'use client'

import { EditorCanvasCardType, EditorNodeType } from '@/lib/types'
import { useEditor } from '@/providers/editor-provider'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ReactFlow, { Background, Connection, Controls, Edge, EdgeChange, MiniMap, NodeChange, ReactFlowInstance, applyNodeChanges, applyEdgeChanges, addEdge, ControlButton } from 'reactflow'
import 'reactflow/dist/style.css'
import EditorCanvasCardSingle from './editor-canvas-card-single'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { usePathname } from 'next/navigation'
import { v4 } from 'uuid'
import { EditorCanvasDefaultCardTypes } from '@/lib/constants'
import FlowInstance from './flow-instance'
import EditorCanvasSidebar from './editor-canvas-sidebar'
import { onGetNodesEdges } from '../../../_actions/workflow_connections'
import { Loader2 } from 'lucide-react'
import { showToast } from '@/helpers/show-toasts'

type Props = {}

const initialNodes: EditorNodeType[] = []

const initialEdges: { id: string; source: string; target: string }[] = []

const EditorCanvas = (props: Props) => {
  const { dispatch, state } = useEditor()
  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const [isWorkFlowLoading, setIsWorkFlowLoading] = useState<boolean>(false)
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>()
  const pathname = usePathname()

  const proOptions = { hideAttribution: true };

  const onDragOver = useCallback((event: any) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      //@ts-ignore
      setNodes((nds) => applyNodeChanges(changes, nds))
    },
    [setNodes]
  )

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      //@ts-ignore
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  )

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  )

  const onDrop = useCallback(
    (event: any) => {
      event.preventDefault()

      const type: EditorCanvasCardType['type'] = event.dataTransfer.getData(
        'application/reactflow'
      )

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return
      }

      const triggerAlreadyExists = state.editor.elements.find(
        (node) => node.type === 'Trigger'
      )

      if (type === 'Trigger' && triggerAlreadyExists) {
        showToast('Only one trigger can be added to automations at the moment', false)
        return
      }

      if (!reactFlowInstance) return
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })

      const newNode = {
        id: v4(),
        type,
        position,
        data: {
          title: type,
          description: EditorCanvasDefaultCardTypes[type].description,
          completed: false,
          current: false,
          metadata: {},
          type: type,
        },
      }
      //@ts-ignore
      setNodes((nds) => nds.concat(newNode))
    },
    [reactFlowInstance, state]
  )

  const handleClickCanvas = () => {
    dispatch({
      type: 'SELECTED_ELEMENT',
      payload: {
        element: {
          data: {
            completed: false,
            current: false,
            description: '',
            metadata: {},
            title: '',
            type: 'Trigger',
          },
          id: '',
          position: { x: 0, y: 0 },
          type: 'Trigger',
        },
      },
    })
  }

  useEffect(() => {
    dispatch({ type: 'LOAD_DATA', payload: { edges, elements: nodes } })
  }, [nodes, edges])

  const nodeTypes = useMemo(
    () => ({
      Action: EditorCanvasCardSingle,
      Trigger: EditorCanvasCardSingle,
      Email: EditorCanvasCardSingle,
      Condition: EditorCanvasCardSingle,
      AI: EditorCanvasCardSingle,
      Slack: EditorCanvasCardSingle,
      'Google Drive': EditorCanvasCardSingle,
      Notion: EditorCanvasCardSingle,
      Discord: EditorCanvasCardSingle,
      'Custom Webhook': EditorCanvasCardSingle,
      'Google Calendar': EditorCanvasCardSingle,
      Wait: EditorCanvasCardSingle,
    }),
    []
  )

  const onGetWorkFlow = async () => {
    setIsWorkFlowLoading(true)
    const response = await onGetNodesEdges(pathname.split('/').pop()!)
    if (response) {
      setEdges(JSON.parse(response.edges!))
      setNodes(JSON.parse(response.nodes!))
      setIsWorkFlowLoading(false)
    }
    setIsWorkFlowLoading(false)
  }

  useEffect(() => {
    onGetWorkFlow()
  }, [])

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center">
          <div
            style={{ width: '100%', height: '100%' }}
            className="relative"
          >
            {isWorkFlowLoading ? (
              <div className="absolute flex h-full w-full items-center justify-center">
                <Loader2 className='rotate w-6 h-6 my-auto text-[#555555]'/>
              </div>
            ) : (
              <ReactFlow
                className="h-full bg-[#0f0f0f]"
                onDrop={onDrop}
                onDragOver={onDragOver}
                nodes={state.editor.elements}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                fitView
                onClick={handleClickCanvas}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
              >
                <Controls position="top-left"/>
                <Background
                  //@ts-ignore
                  variant="dots"
                  gap={40}
                  size={1}
                />
              </ReactFlow>
            )}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={40}
        className="relative sm:block"
      >
        {isWorkFlowLoading ? (
          <div className="absolute flex h-full w-full items-center justify-center">
            <Loader2 className='rotate w-6 h-6 my-auto text-[#555555]'/>
          </div>
        ) : (
          <FlowInstance
            edges={edges}
            nodes={nodes}
          >
            <EditorCanvasSidebar nodes={nodes} />
          </FlowInstance>
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default EditorCanvas

import { EditorCanvasCardType } from '@/lib/types'
import { useEditor } from '@/providers/editor-provider'
import React, { useMemo } from 'react'
import { Position, useNodeId } from 'reactflow'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'
import CustomHandle from './custom-handle'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Props = {}

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor()
  const nodeId = useNodeId()
  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />
  }, [data])

  return (
    <>
      {data.type !== 'Trigger' && data.type !== 'Google Drive' && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <Card onClick={(e) => { e.stopPropagation()
          const val = state.editor.elements.find((n) => n.id === nodeId)
          if (val)
            dispatch({
              type: 'SELECTED_ELEMENT',
              payload: {
                element: val,
              },
            })
        }}
        className="relative w-[400px] card-cover border-none"
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <div className='mb-auto mt-3'>{logo}</div>
          <div>
            <CardTitle className="text-lg font-satoshi-bold">{data.title}</CardTitle>
            <CardDescription>
              <p className='text-xs font-satoshi-medium text-neutral-600'><span>ID: </span> {nodeId}</p>
              <p className='font-satoshi-medium'>{data.description}</p>
            </CardDescription>
          </div>
        </CardHeader>
        <Badge className='m-4 bg-white text-black hover:bg-neutral-100'>{data.type}</Badge>
      </Card>
      <CustomHandle
        type="source"
        position={Position.Bottom}
        id="a"
      />
    </>
  )
}

export default EditorCanvasCardSingle

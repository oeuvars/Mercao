'use client'

import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connection-providers'
import { useEditor } from '@/providers/editor-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect } from 'react'
import { CONNECTIONS, EditorCanvasDefaultCardTypes } from '@/lib/constants'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchBotSlackChannels, onConnections, onDragStart } from '@/lib/editor-utils'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import RenderConnectionAccordion from './render-connection-accordion'
import { useStateStore } from '@/store'
import RenderOutputAccordion from './render-output-accordion'

type Props = {
  nodes: EditorNodeType[]
}

const EditorCanvasSidebar = ({ nodes }: Props) => {
  const { state } = useEditor()
  const { nodeConnection } = useNodeConnections()
  const { googleFile, setSlackChannels } = useStateStore()
  useEffect(() => {
    if (state) {
      onConnections(nodeConnection, state, googleFile)
    }
  }, [state])

  useEffect(() => {
    if (nodeConnection.slackNode.slackAccessToken) {
      fetchBotSlackChannels(
        nodeConnection.slackNode.slackAccessToken,
        setSlackChannels
      )
    }
  }, [nodeConnection])

  return (
    <aside>
      <Tabs
        defaultValue="actions"
        className="h-[93vh] overflow-scroll pb-24"
      >
        <TabsList className="bg-transparent flex border border-dashed border-neutral-700 rounded-sm w-[95%] m-auto py-6">
          <TabsTrigger value="actions" className='font-satoshi-medium mx-auto w-full rounded-md py-2'>Actions</TabsTrigger>
          <div className="divider"></div>
          <TabsTrigger value="settings" className='font-satoshi-medium mx-auto w-full rounded-md py-2'>Settings</TabsTrigger>
        </TabsList>
        <TabsContent
          value="actions"
          className="flex flex-col gap-4 p-4"
        >
          {Object.entries(EditorCanvasDefaultCardTypes)
            .filter(
              ([_, cardType]) =>
                (!nodes.length && cardType.type === 'Trigger') ||
                (nodes.length && cardType.type === 'Action')
            )
            .map(([cardKey, cardValue]) => (
              <Card
                key={cardKey}
                draggable
                className="w-full cursor-grab border-none card-cover-two"
                onDragStart={(event) =>
                  onDragStart(event, cardKey as EditorCanvasTypes)
                }
              >
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                  <EditorCanvasIconHelper type={cardKey as EditorCanvasTypes}/>
                  <CardTitle className="text-lg tracking-normal font-satoshi-medium">
                    <span className='gradient-text pr-1'>{cardKey}</span>
                    <CardDescription className='text-neutral-400 font-satoshi-regular'>{cardValue.description}</CardDescription>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
        </TabsContent>
        <TabsContent
          value="settings"
          className="-mt-6"
        >
          <div className="px-2 py-4 text-center text-3xl font-satoshi-bold">
            <span className='gradient-text saturate-150 px-1'>{state.editor.selectedNode.data.title}</span>
          </div>

          <Accordion type="multiple" className='w-[95%] mx-auto'>
            <AccordionItem
              value="Options"
              className="border-y-[1px] px-2"
            >
              <AccordionTrigger className="!no-underline font-satoshi-medium text-lg">
                Account
              </AccordionTrigger>
              <AccordionContent className={state.editor.selectedNode.data.title !== 'Slack' ? 'mb-8' : ''}>
                {CONNECTIONS.map((connection) => (
                  <RenderConnectionAccordion
                    key={connection.title}
                    state={state}
                    connection={connection}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="Expected Output"
              className="px-2"
            >
              <AccordionTrigger className="!no-underline font-satoshi-medium text-lg">
                Action
              </AccordionTrigger>
              <RenderOutputAccordion
                state={state}
                nodeConnection={nodeConnection}
              />
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </aside>
  )
}

export default EditorCanvasSidebar

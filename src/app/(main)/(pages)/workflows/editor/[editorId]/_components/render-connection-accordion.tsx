'use client'

import React from 'react'
import ConnectionCard from '@/app/(main)/(pages)/connections/_components/connection-card'
import { AccordionContent } from '@/components/ui/accordion'
import MultipleSelector from '@/components/ui/multiple-selector'
import { Connection } from '@/lib/types'
import { useNodeConnections } from '@/providers/connection-providers'
import { EditorState } from '@/providers/editor-provider'
import { useStateStore } from '@/store'

const RenderConnectionAccordion = ({ connection, state }: { connection: Connection, state: EditorState }) => {
  const {
    title,
    image,
    description,
    connectionKey,
    accessTokenKey,
    alwaysTrue,
    slackSpecial,
  } = connection

  const { nodeConnection } = useNodeConnections()
  const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } = useStateStore()

  const connectionData = (nodeConnection as any)[connectionKey]

  const isConnected =
    alwaysTrue ||
    (nodeConnection[connectionKey] &&
      accessTokenKey &&
      connectionData[accessTokenKey!])

  return (
    <AccordionContent key={title}>
      {state.editor.selectedNode.data.title === title && (
        <>
          <ConnectionCard
            title={title}
            icon={image}
            description={description}
            type={title}
            connected={{ [title]: isConnected }}
          />
          {slackSpecial && isConnected && (
            <div className="py-6">
              {slackChannels?.length ? (
                <>
                  <div className="mb-4 ml-1 font-satoshi-medium text-base text-neutral-400">
                    Select the slack channels to send notification and messages:
                  </div>
                  <MultipleSelector
                    value={selectedSlackChannels}
                    onChange={setSelectedSlackChannels}
                    defaultOptions={slackChannels}
                    placeholder="Select channels"
                    className='placeholder:font-satoshi-bold placeholder:text-4xl font-satoshi-medium'
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                      </p>
                    }
                  />
                </>
              ) : (
                <p className='font-satoshi-medium text-neutral-400 text-sm text-center'>No Slack channels found. Please add your Slack bot to your Slack channel</p>
              )}
            </div>
          )}
        </>
      )}
    </AccordionContent>
  )
}

export default RenderConnectionAccordion

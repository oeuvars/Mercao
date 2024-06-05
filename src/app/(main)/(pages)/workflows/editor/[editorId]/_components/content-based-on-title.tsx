import { AccordionContent } from '@/components/ui/accordion'
import { ConnectionProviderProps } from '@/providers/connection-providers'
import { EditorState } from '@/providers/editor-provider'
import { nodeMapper } from '@/lib/types'
import React, { useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import { onContentChange } from '@/lib/editor-utils'
import GoogleFileDetails from './google-file-details'
import GoogleDriveFiles from './google-drive-files'
import ActionButton from './action-button'
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { showToast } from '@/helpers/show-toasts'

export interface Option {
  value: string
  label: string
  disable?: boolean
  fixed?: boolean
  [key: string]: string | boolean | undefined
}
interface GroupOption {
  [key: string]: Option[]
}

type Props = {
  nodeConnection: ConnectionProviderProps
  newState: EditorState
  file: any
  setFile: (file: any) => void
  selectedSlackChannels: Option[]
  setSelectedSlackChannels: (value: Option[]) => void
}

const ContentBasedOnTitle = ({
  nodeConnection,
  newState,
  file,
  setFile,
  selectedSlackChannels,
  setSelectedSlackChannels,
}: Props) => {
  const { selectedNode } = newState.editor
  const title = selectedNode.data.title

  useEffect(() => {
    const reqGoogle = async () => {
      const response: { data: { message: { files: any } } } = await axios.get('/api/drive')
      if (response) {
        setFile(response.data.message.files[0])
        showToast("Fetched file", true)
      } else {
        showToast("something went wrong", false)
      }
    }
    reqGoogle()
  }, [])

  // @ts-ignore
  const nodeConnectionType: any = nodeConnection[nodeMapper[title]]
  if (!nodeConnectionType) return <p></p>

  const isConnected = title === 'Google Drive' ? !nodeConnection.isLoading : !!nodeConnectionType[
          `${
            title === 'Slack'
              ? 'slackAccessToken'
              : title === 'Discord'
              ? 'webhookURL'
              : title === 'Notion'
              ? 'accessToken'
              : ''
          }`
        ]

  if (!isConnected) return <p></p>

  return (
    <AccordionContent className='pb-[2.25rem]'>
      <Card className='border-none card-cover-two'>
        {title === 'Discord' && (
          <div className='flex flex-col w-[90%] pt-5 mx-auto'>
            <CardTitle className='text-neutral-500 text-lg font-satoshi-medium tracking-normal'>{nodeConnectionType.webhookName}</CardTitle>
            <CardDescription className='text-neutral-300 text-lg font-satoshi-medium tracking-normal -mt-1'>{nodeConnectionType.guildName}</CardDescription>
          </div>
        )}
        <div className="flex flex-col gap-3 px-6 py-3 pb-5">
          <p className='text-neutral-500 font-satoshi-medium text-lg'>{title === 'Notion' ? 'Values to be stored' : 'Message'}</p>

          <Input
            type="text"
            value={nodeConnectionType.content}
            onChange={(event) => onContentChange(nodeConnection, title, event)}
            className='border-dashed border-neutral-600 py-5 font-satoshi-medium text-base text-neutral-300'
          />

          {JSON.stringify(file) !== '{}' && title !== 'Google Drive' && (
            <Card className="w-full border-neutral-600 border-dashed">
              <CardContent className="px-2 py-3">
                <div className="flex flex-col gap-4">
                  <CardDescription className='text-neutral-200 font-satoshi-medium text-lg ml-1'>Drive File</CardDescription>
                    <GoogleFileDetails
                      nodeConnection={nodeConnection}
                      title={title}
                      gFile={file}
                    />
                </div>
              </CardContent>
            </Card>
          )}
          {title === 'Google Drive' && <GoogleDriveFiles />}
          <ActionButton
            currentService={title}
            nodeConnection={nodeConnection}
            channels={selectedSlackChannels}
            setChannels={setSelectedSlackChannels}
          />
        </div>
      </Card>
    </AccordionContent>
  )
}

export default ContentBasedOnTitle

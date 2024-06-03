import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { onAddTemplate } from '@/lib/editor-utils'
import { ConnectionProviderProps } from '@/providers/connection-providers'
import React from 'react'

type Props = {
  nodeConnection: ConnectionProviderProps
  title: string
  gFile: any
}
const isGoogleFileNotEmpty = (file: any): boolean => {
  return Object.keys(file).length > 0 && file.kind !== ''
}

const GoogleFileDetails = ({ gFile, nodeConnection, title }: Props) => {
  if (!isGoogleFileNotEmpty(gFile)) {
    return null
  }

  const details = ['kind', 'name', 'mimeType']
  if (title === 'Google Drive') {
    details.push('id')
  }

  return (
    <Card className='border-neutral-600 border-dashed'>
      <CardContent className="flex flex-wrap gap-2 p-4">
        {details.map((detail) => (
          <div
            key={detail}
            onClick={() =>
              onAddTemplate(nodeConnection, title, gFile[detail])
            }
            className="flex cursor-pointer gap-2 rounded-full bg-neutral-800/90 hover:bg-neutral-800/80 px-3 py-1 text-neutral-200 font-satoshi-medium shadow-md"
          >
            {detail}:{' '}
            <CardDescription className="text-neutral-400">
              {gFile[detail]}
            </CardDescription>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default GoogleFileDetails

'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getGoogleListener } from '../../../_actions/workflow_connections'
import { Card, CardDescription } from '@/components/ui/card'
import { CardContainer } from '@/components/global/3d-card'
import { Loader2 } from 'lucide-react'
import { showToast } from '@/helpers/show-toasts'
import { Button } from '@nextui-org/button'

type Props = {}

const GoogleDriveFiles = (props: Props) => {
  const [loading, setLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)

  const reqGoogle = async () => {
    setLoading(true)
    const response = await axios.get('/api/drive-activity')
    if (response) {
      showToast(response.data, true)
      setLoading(false)
      setIsListening(true)
    }
    setIsListening(false)
  }

  const onListener = async () => {
    const listener = await getGoogleListener()
    if (listener?.googleResourceId !== null) {
      setIsListening(true)
    }
  }

  useEffect(() => {
    onListener()
  }, [])

  return (
    <div className="flex flex-col gap-3 pb-6">
      {isListening ? (
        <Card className="py-3">
          <CardContainer>
            <CardDescription>Listening...</CardDescription>
          </CardContainer>
        </Card>
      ) : (
        <Button
          className='bg-gradient-to-r from-indigo-200 to-yellow-100 rounded-md text-neutral-950 saturate-150 font-satoshi-medium'
          {...(!loading && {
            onClick: reqGoogle,
          })}
        >
          {loading ? (
            <div className="absolute flex h-full w-full items-center justify-center">
              <Loader2 className='rotate w-6 h-6 my-auto text-[#555555]'/>
            </div>
          ) : (
            'Create Listener'
          )}
        </Button>
      )}
    </div>
  )
}

export default GoogleDriveFiles

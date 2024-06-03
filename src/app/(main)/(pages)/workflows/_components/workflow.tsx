"use client"

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { onFlowPublish, onGetWorkflows } from '../_actions/workflow_connections'
import WorkflowIconHelper from './workflow-icon-helper'
import { showToast } from '@/helpers/show-toasts'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
   name: string,
   description: string,
   id: string,
   publish: boolean | null
}

const Workflow = ({ description, id, name, publish }: Props) => {
  const [flowIcons, setFlowIcons] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const onPublishFlow = async (event: any) => {
    const response = await onFlowPublish(
      id,
      event.target.ariaChecked === 'false'
    )
    if (response) {
      showToast(response, true)
    }
  }
  const onGetFlowPath = async () => {
    try {
      const response = await onGetWorkflows();
      const flowPathString = response?.[0]?.flowPath;
      const flowPathArray = flowPathString ? JSON.parse(flowPathString.replace(/'/g, '"')) : [];

      if (Array.isArray(flowPathArray)) {
        setFlowIcons(flowPathArray);
        setLoading(false)
      } else {
        console.error('Invalid flowPath format');
      }
    } catch (error) {
      console.error('Error fetching workflows:', error);
    }
  }
  useEffect(() => {
    onGetFlowPath()
  }, [])

  return (
    <Card className='flex w-full items-center justify-between border border-neutral-700 border-dashed hover:bg-neutral-950/40 animation cursor-pointer'>
      <CardHeader className='flex flex-col gap-4 w-full'>
        <Link href={`/workflows/editor/${id}`}>
          <div className="flex flex-row gap-4">
            {loading ? (
              Array.from({ length: 5}, (_, index) => (
                <Skeleton key={index} className='w-10 h-10 rounded-md'/>
              ))
            ) : (
              <>
                {flowIcons.map((flowIcon, index) => (
                  <div key={index}>
                    <WorkflowIconHelper type={flowIcon} />
                  </div>
                ))}
              </>
            )}
          </div>
          <hr className='border-t border-neutral-600 border-dashed my-5 w-[15%]'/>
          <div className="">
            <CardTitle className="text-lg tracking-wide">{name}</CardTitle>
            <CardDescription className='text-base text-neutral-400 font-satoshi-medium'>{description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex items-center gap-2 p-4">
        <Label
          htmlFor="airplane-mode"
          className="font-satoshi-medium"
        >
          {publish! ? 'On' : 'Off'}
        </Label>
        <Switch
          id="airplane-mode"
          className='bg-white'
          onClick={onPublishFlow}
          defaultChecked={publish!}
        />
      </div>
    </Card>
  )
}

export default Workflow

'use client'
import { useNodeConnections } from '@/providers/connection-providers'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { onCreateNodesEdges, onFlowPublish } from '../_actions/workflow-connections'
import { showToast } from '@/helpers/show-toasts'
import { Button } from '@nextui-org/button'
import { useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
  edges: any[]
  nodes: any[]
}

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname()
  const [isFlow, setIsFlow] = useState([])
  const { nodeConnection } = useNodeConnections()
  const router = useRouter()

  const onFlowAutomation = async () => {
    console.log("isflow:", isFlow)
    const flow = await onCreateNodesEdges(
      pathname.split('/').pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    )

    if (flow) {
      showToast(flow?.message, true)
    }
    else {
      showToast("Flow not saved", false)
    }
  }

  const onPublishWorkflow = async () => {
    const response = await onFlowPublish(pathname.split('/').pop()!, true)
    if (response) {
      showToast(response, true)
      router.push('/workflows', { scroll: false })
    }
  }

  const onAutomateFlow = async () => {
    const flows: any = []
    const connectedEdges = edges.map((edge) => edge.target)
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type)
        }
      })
    })

    setIsFlow(flows)
  }

  useEffect(() => {
    onAutomateFlow()
  }, [edges])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4 bg-transparent backdrop-blur-md">
        <Button onClick={onFlowAutomation} isDisabled={isFlow.length < 1} className='bg-white rounded-md text-black font-satoshi-medium cursor-pointer'>
          Save
        </Button>
        <Button isDisabled={isFlow.length < 1} onClick={onPublishWorkflow} className='cursor-pointer bg-gradient-to-r from-indigo-200 to-yellow-100 rounded-md text-neutral-950 saturate-150 font-satoshi-medium'>
          Publish
        </Button>
      </div>
      {children}
    </div>
  )
}

export default FlowInstance

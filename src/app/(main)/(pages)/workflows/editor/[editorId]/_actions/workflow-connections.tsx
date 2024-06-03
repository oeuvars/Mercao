'use server'

import { db } from '@/lib/db'

export const onCreateNodesEdges = async ( flowId: string, nodes: string, edges: string, flowPath: string ) => {
  console.log(flowPath)
  const flow = await db.workflows.update({
    where: {
      id: flowId,
    },
    data: {
      nodes: nodes,
      edges: edges,
      flowPath: flowPath,
    },
  })

  if (flow) return { message: 'Workflow saved' }
}

export const onFlowPublish = async (workflowId: string, state: boolean) => {
  console.log(state)
  const published = await db.workflows.update({
    where: {
      id: workflowId,
    },
    data: {
      publish: state,
    },
  })

  if (published.publish) return 'Workflow published'
  return 'Workflow unpublished'
}

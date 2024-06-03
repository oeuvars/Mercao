"use client"

import { WorkflowFormSchema } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Loader2 } from 'lucide-react'
import { useModal } from '@/providers/modal-provider'
import { Button } from '@nextui-org/button'
import { onCreateWorkflow } from '@/app/(main)/(pages)/workflows/_actions/workflow_connections'
import { Input } from '../ui/input'
import { showToast } from '@/helpers/show-toasts'

type Props = {
  title?: string
  subTitle?: string
}

const Workflowform = ({ subTitle, title }: Props) => {
  const { setClose } = useModal()
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const isLoading = form.formState.isLoading
  const router = useRouter()

  const handleSubmit = async (values: z.infer<typeof WorkflowFormSchema>) => {
    const workflow = await onCreateWorkflow(values.name, values.description)
    if (workflow) {
      showToast(workflow.message, true)
      router.refresh()
    }
    setClose()
  }

  return (
    <Card className="w-full max-w-[650px] border-none outline-none">
      {title && subTitle && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subTitle}</CardDescription>
        </CardHeader>
      )}
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 text-left"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <div className='flex flex-col'>
                  <h1 className='text-base font-satoshi-medium text-neutral-300 tracking-tight'>Name</h1>
                  <FormControl>
                    <Input
                      {...field}
                      className='border-none card-cover h-12 font-satoshi-medium text-neutral-200 mt-2'
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="description"
              render={({ field }) => (
                <div className=''>
                  <h1 className='text-base font-satoshi-medium text-neutral-300 tracking-tight'>Description</h1>
                  <FormControl>
                    <Input
                      {...field}
                      className='border-none card-cover h-12 font-satoshi-medium text-neutral-200 mt-2'
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
            <Button
              className="mt-4 bg-gradient-to-r from-indigo-200 to-yellow-100 font-satoshi-medium text-black rounded-md"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                'Save Settings'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Workflowform

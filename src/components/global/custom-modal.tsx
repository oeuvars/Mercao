import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
 } from '@/components/ui/drawer'
 import { useModal } from '@/providers/modal-provider'
import { Button } from '@nextui-org/button'

 import React from 'react'


 type Props = {
   title: string
   subheading: string
   children: React.ReactNode
   defaultOpen?: boolean
 }

 const CustomModal = ({ children, subheading, title, defaultOpen }: Props) => {
   const { isOpen, setClose } = useModal()
   const handleClose = () => setClose()

   return (
     <Drawer
       open={isOpen}
       onClose={handleClose}
     >
       <DrawerContent className='bg-black/10 backdrop-blur-lg border-none outline-none'>
         <DrawerHeader>
           <DrawerTitle className="text-center font-satoshi-medium text-4xl tracking-normal"><span className='gradient-text px-1'>{title}</span></DrawerTitle>
           <DrawerDescription className="text-center flex flex-col items-center gap-16 h-[25vw] overflow-scroll font-satoshi-medium text-lg text-neutral-500">
             {subheading}
             {children}
           </DrawerDescription>
         </DrawerHeader>
         <DrawerFooter className="flex flex-col gap-4 border-t-[1px] border-neutral-800">
           <DrawerClose>
             <Button
               className="w-full bg-neutral-950 text-white font-satoshi-medium rounded-md"
               onClick={handleClose}
             >
               Close
             </Button>
           </DrawerClose>
         </DrawerFooter>
       </DrawerContent>
     </Drawer>
   )
 }

 export default CustomModal

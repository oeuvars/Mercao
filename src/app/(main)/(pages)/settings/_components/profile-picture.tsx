'use client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-xl text-white font-satoshi-medium"> Profile Picture</p>
      <div className="flex flex-col items-center justify-center mt-3">
        {userImage ? (
          <>
            <div className="relative h-full w-full">
              <Image
                src={userImage}
                alt="User_Image"
                className='w-20 rounded'
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className=" hover:text-white rounded mr-auto mt-2 bg-[#222222]/50"
            >
              <X />
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture

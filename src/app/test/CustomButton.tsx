import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CustomButton = ({text="button", w=20, h=10, link=''}) => {
  return (
    <div className='w-full'>
      <Link href={link} className='w-full'>
        <Button className={``}>{text}</Button>
      </Link>
    </div>
  )
}

export default CustomButton

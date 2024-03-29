import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

function Banner() {
  return (
    <div className='container mx-auto px-5 text-center' id='register'>
        <h2 style={{lineHeight: "1.3"}} className='text-center w-full text-3xl md:text-4xl lg:text-6xl font-black bg-clip-text text-transparent bg-slate-900 mb-3'>Start your <span className='text-orange-600'>Journey</span> with US</h2>
        <p className='w-full md:w-[500px] mx-auto mb-8 text-slate-600 text-lg md:text-xl'>Start your coding journey with gamified and project based live courses. Don&apos;t worry, we have mentors to guide them throughout the process.</p>
        <Link href={`/pricing`}>
        <Button className='px-12'>Book a Seesion</Button>
        </Link>
    </div>
  )
}

export default Banner
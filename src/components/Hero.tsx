import { HERO } from '@/constants'
import React from 'react'
import SearchForm from './SearchForm'

const Hero = () => {
  return (
    <div className="hero flex min-h-screen items-center justify-center">
      <div className="flex max-w-4xl flex-col pb-10 items-center gap-6">
        <div className="space-y-4 mt-16">
            <h1 className='m-4 text-center text-4xl text-white md:text-5xl lg:text-6xl '>
                {HERO.title}
            </h1>
            <p className='text-center p-4 text-slate-300'>
                {HERO.description}
            </p>
        </div>
        {/* <SearchForm /> */}
      </div>
    </div>
  )
}

export default Hero

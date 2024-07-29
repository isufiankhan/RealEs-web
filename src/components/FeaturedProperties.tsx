import { FEATURED_PROPERTIES } from '@/constants'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedProperties = () => {
    return (
        <div className='container mx-auto border-b py-6 pb-10' id='FeaturedProperties'>
            <h2 className='font-semibold text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl'>
                Featured Properties
            </h2>
            <div className='flex flex-wrap'>
                {FEATURED_PROPERTIES.map((property, index) => {
                    return (
                        <div
                            key={index}
                            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <Link href="#" className='m-2 inline-block'>
                                <div className="p-8">
                                    <Image src={property.image} alt={property.name} width={200} height={200}
                                        className='mb-8 rounded-md object-cover' 
                                    />

                                    <div className='text-center'>
                                        <h6 className='mb-5 mt-2 font-medium'>{property.name}</h6>
                                        <p className=''>{property.description}</p>
                                        <br />
                                        <span className='mb-5 mt-2'>{property.price}</span>
                                    </div>
                                    
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedProperties

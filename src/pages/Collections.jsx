import React from 'react'
import { Link } from 'react-router-dom'

const Collections = () => {
    return (
        <>
            <div className='relative w-full h-[50vh] md:h-[60vh]'>
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-10' />
                <div className='absolute inset-0 flex flex-col justify-center items-center z-20 text-white text-center px-4 sm:px-8'>
                </div>
                <div className='absolute inset-0'>
                    <img src="./before_footer.avif" className='w-full h-full object-cover object-top' alt="Collections Banner" />
                </div>
            </div>

            <section className="bg-white py-10 md:py-12">
                <div className="px-4 sm:px-8">
                    <div className='flex flex-col gap-1.5 mb-8'>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-left">
                            SEASONAL
                        </h1>
                        <p className='text-gray-500 text-sm md:text-base'>Curated styles handpicked for every season and mood.</p>
                    </div>
                    <div className="grid grid-cols-2">
                        {[
                            {
                                name: "Summer '25 Collection",
                                slug: 'summer-25-collection',
                                image: './tops.avif',
                            },
                            {
                                name: 'Fall/Winter Drop',
                                slug: 'fall-winter-drop',
                                image: './trousers.avif'
                            },
                        ].map((category) => (
                            <a
                                key={category.slug}
                                href={`/collections/${category.slug}`}
                                className="block group"
                            >

                                <div key={category.name} className='cursor-pointer'>
                                    {/* Category Card */}
                                    <div className='group cursor-pointer'>
                                        <div className='overflow-hidden'>
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-all ease-in-out duration-300"
                                            />
                                        </div>
                                        <div className='px-0 md:px-2 py-4 flex flex-col gap-1'>
                                            <p className='text-sm group-hover:underline md:text-base font-medium uppercase'>{category.name}</p>
                                            <a href="/" className='text-xs md:text-sm'>EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 md:py-12">
                <div className="px-4 sm:px-8">
                    <div className='flex flex-col gap-1.5 mb-8'>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-left">
                            OCCASION / VIBE
                        </h1>
                        <p className='text-gray-500 text-sm md:text-base'>Curated styles handpicked for every season and mood.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8">
                        {[
                            {
                                name: 'Streetwear',
                                slug: 'streetwear',
                                image: './tops.avif'
                            },
                            {
                                name: 'Casual Essentials',
                                slug: 'casual-essentials',
                                image: './trousers.avif'
                            },
                            {
                                name: 'Party-Ready',
                                slug: 'party-ready',
                                image: './dress.avif'
                            },
                            {
                                name: 'Work / Smart Casual',
                                slug: 'work-smart-casual',
                                image: './shoes.avif'
                            },
                            {
                                name: 'Lounge & Chill',
                                slug: 'lounge-chill',
                                image: './tops.avif'
                            },
                            {
                                name: 'Special Occasion / Drop 002',
                                slug: 'special-occasion-drop-002',
                                image: './trousers.avif'
                            },
                        ].map((category) => (
                            <a
                                key={category.slug}
                                href={`/collections/${category.slug}`}
                                className="block group"
                            >
                                <div key={category.name} className='cursor-pointer'>
                                    {/* Category Card */}
                                    <div className='group cursor-pointer'>
                                        <div className='overflow-hidden'>
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-all ease-in-out duration-300"
                                            />
                                        </div>
                                        <div className='px-0 md:px-2 py-4 flex flex-col gap-1'>
                                            <p className='text-sm group-hover:underline md:text-base font-medium uppercase'>{category.name}</p>
                                            <a href="/" className='text-xs md:text-sm'>EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-10 md:py-12">
                <div className="px-4 sm:px-8">
                    <div className='flex flex-col gap-1.5 mb-8'>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-left">
                            FEATURED
                        </h1>
                        <p className='text-gray-500 text-sm md:text-base'>Curated styles handpicked for every season and mood.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8">
                        {[
                            {
                                name: 'men',
                                slug: 'men',
                                image: './tops.avif'
                            },
                            {
                                name: 'women',
                                slug: 'women',
                                image: './trousers.avif'
                            },
                            {
                                name: 'kids',
                                slug: 'kids',
                                image: './dress.avif'
                            },
                        ].map((category) => (
                            <a
                                key={category.slug}
                                href={`/collections/${category.slug}`}
                                className="block group"
                            >
                                <div key={category.name} className='cursor-pointer'>
                                    {/* Category Card */}
                                    <div className='group cursor-pointer'>
                                        <div className='overflow-hidden'>
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full h-auto aspect-[3/4] object-cover group-hover:scale-105 transition-all ease-in-out duration-300"
                                            />
                                        </div>
                                        <div className='px-0 md:px-2 pt-4 pb-2 flex flex-col gap-1'>
                                            <p className='text-sm group-hover:underline md:text-base font-medium uppercase'>{category.name}</p>
                                            <a href="/" className='text-xs md:text-sm'>EXPLORE</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50">
                <img src="./before_footer.png" className='w-full md:aspect-video aspect-[3/4] object-cover' alt="" />
            </section>
        </>
    )
}

export default Collections
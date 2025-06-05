import React from 'react'

const Home = () => {
    return (
        <>
            <section className="relative bg-black overflow-hidden text-white">
                {/* Hero Background Video */}
                <div className="relative aspect-[6/9] sm:aspect-video lg:aspect-[22/9] w-full">
                    <video
                        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.6]"
                        src="./bgvideo.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                </div>

                {/* Floating Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 py-8 md:py-6 flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-2">
                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-left">
                            SUMMER <br /> COLLECTION
                        </h1>

                        <p className='md:hidden mb-4 text-gray-300'>Where comfort meets style. Discover pieces that move with your lifestyle.</p>

                        {/* CTA Wrapper */}
                        <div className="w-auto mb-4">
                            <a
                                href="/shop"
                                className="inline-flex items-center justify-center px-8 py-4 text-md sm:text-xl font-semibold bg-gray-50 text-black hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
                            >
                                Shop Now
                                <svg
                                    className="ml-2 md:ml-2.5 w-4 md:w-5 md:h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>




            </section>

            {/* Featured Collections Section */}
            <section className="bg-gray-100 py-10 md:py-12">
                <div className="px-4 sm:px-8">
                    <div className='flex flex-col gap-1.5 mb-8'>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent text-left">
                            FEATURED COLLECTIONS
                        </h1>
                        <p className='text-gray-500 text-sm md:text-base'>Curated styles handpicked for every season and mood.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
                        {[
                            { name: 'TOPS', image: './tops.avif' },
                            { name: 'TROUSERS', image: './trousers.avif' },
                            { name: 'DRESS', image: './dress.avif' },
                            { name: 'SHOES', image: './shoes.avif' }
                        ].map((category) => (
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
                                        <p className='text-sm group-hover:underline md:text-base font-medium'>{category.name}</p>
                                        <a href="/" className='text-xs md:text-sm'>EXPLORE</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="bg-gray-50 py-10 md:py-12">
                <div className="px-4 sm:px-8 ">
                    {/* Headline */}
                    <div className='flex flex-col gap-1.5 mb-8'>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent text-left">
                            NEW ARRIVALS
                        </h1>
                        <p className='text-gray-500 text-sm md:text-base'>Fresh styles just dropped — discover what’s trending now.
                        </p>
                    </div>

                    {/* New Arrivals Grid */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <img
                                key={item}
                                src={`./` + item + `.avif`}
                                alt={`New arrival ${item}`}
                                className='cursor-pointer hover:opacity-90 transition-opacity duration-300'
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop by Category Section */}
            <section className="bg-gray-100 py-10 md:py-12">
                <div className="px-4 sm:px-8">
                    <div className='flex flex-col gap-1.5 mb-8'>
                        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent text-left">
                            SHOP BY CATEGORY
                        </h1>
                        <p className='text-gray-500 text-sm md:text-base'>Explore by category for effortless shopping.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
                        {[
                            { name: 'TOPS', image: './tops.avif' },
                            { name: 'TROUSERS', image: './trousers.avif' },
                            { name: 'DRESS', image: './dress.avif' },
                            { name: 'SHOES', image: './shoes.avif' }
                        ].map((category) => (
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
                                        <p className='text-sm group-hover:underline md:text-base font-medium'>{category.name}</p>
                                        <a href="/" className='text-xs md:text-sm'>EXPLORE</a>
                                    </div>
                                </div>
                            </div>
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

export default Home

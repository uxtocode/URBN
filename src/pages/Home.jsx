import React from 'react'

const Home = () => {
    return (
        <>
            <section className="relative bg-black overflow-hidden text-white">
                {/* Hero Background Video */}
                <div className="relative h-[65vh] md:h-[85vh] w-full">
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
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 py-8 md:py-6 flex justify-center">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-7xl gap-4">
                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-left">
                            SUMMER COLLECTION
                        </h1>

                        {/* CTA Wrapper */}
                        <div className="w-auto">
                            <a
                                href="/shop"
                                className="inline-flex items-center justify-center px-8 py-4 text-md sm:text-lg font-semibold rounded-2xl bg-gray-50 text-black hover:scale-105 transition-all shadow-lg"
                            >
                                Shop Now
                                <svg
                                    className="ml-3 w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.5}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>




            </section>

            <section className=" bg-gray-50">
                {/* 2 images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
                    <div>
                        <img
                            src="./hero1.jpeg"
                            alt="Image 1"
                            className="w-full h-auto aspect-[3/4] object-cover"
                        />
                        <div className='px-4 sm:px-8 py-4 flex justify-between items-center'> 
                            <p className='font-semibold text-xl'>NEW POITIC</p>
                            <a href="/" className='underline'>SHOP NOW</a>
                        </div>
                    </div>

                    <div>
                        <img
                            src="./hero2.jpeg"
                            alt="Image 1"
                            className="w-full h-auto aspect-[3/4] object-cover"
                        />
                        <div className='px-4 sm:px-8 py-4 flex justify-between items-center'>
                            <p className='font-semibold text-xl'>SARTORIAL EDIT</p>
                            <a href="/" className='underline'>SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

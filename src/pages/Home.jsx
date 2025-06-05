import React from 'react'

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black overflow-hidden text-white min-h-screen">
                {/* Hero Background Video */}
                <div className="absolute inset-0">
                    <video
                        className="w-full h-full object-cover brightness-50"
                        src="./bgvideo.webm"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex items-end justify-center min-h-screen pb-16 md:pb-20">
                    <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                            {/* Headline */}
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                                    <span className="block bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                                        STREET
                                    </span>
                                    <span className="block bg-gradient-to-r from-gray-300 via-white to-white bg-clip-text text-transparent">
                                        ESSENTIALS
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 font-light max-w-md">
                                    Where comfort meets style. Discover pieces that move with your lifestyle.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/shop"
                                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95"
                                >
                                    SHOP NOW
                                    <svg
                                        className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
            </section>

            {/* Featured Categories Section */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className='text-center mb-12 md:mb-16'>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight text-black">
                            TRENDING NOW
                        </h2>
                        <p className='text-gray-600 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed'>
                            Curated collections that define today's street culture and tomorrow's classics.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {[
                            { name: 'STREETWEAR', subtitle: 'Urban Essentials', image: './tops.avif' },
                            { name: 'JOGGERS', subtitle: 'Comfort First', image: './trousers.avif' },
                            { name: 'DRESSES', subtitle: 'Effortless Style', image: './dress.avif' },
                            { name: 'SNEAKERS', subtitle: 'Step Up', image: './shoes.avif' }
                        ].map((category) => (
                            <div key={category.name} className='group cursor-pointer'>
                                <div className='relative overflow-hidden bg-gray-100 mb-4 md:mb-6 rounded-sm'>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                    
                                </div>
                                <div className='space-y-1 md:space-y-2'>
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black group-hover:underline transition-colors duration-300'>
                                        {category.name}
                                    </h3>
                                    <p className='text-xs md:text-sm lg:text-base text-gray-500 font-medium'>
                                        {category.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Drops Section */}
            <section className="bg-gray-100 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className='flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20 gap-6'>
                        <div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight text-black">
                                FRESH DROPS
                            </h2>
                            <p className='text-gray-600 text-base md:text-lg lg:text-xl font-light max-w-xl leading-relaxed'>
                                Just landed. Get them before they're gone — these pieces won't stay long.
                            </p>
                        </div>
                        <a
                            href="/new-arrivals"
                            className="inline-flex items-center text-lg font-bold text-black hover:text-gray-600 transition-colors duration-300 group"
                        >
                            VIEW ALL
                            <svg
                                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2.5}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                            <div key={item} className="group cursor-pointer">
                                <div className="relative overflow-hidden bg-gray-100 mb-2 md:mb-3 rounded-sm">
                                    <img
                                        src={`./` + item + `.avif`}
                                        alt={`New drop ${item}`}
                                        className='w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop by Style Section */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className='text-center mb-12 md:mb-16'>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight text-black">
                            YOUR STYLE
                        </h2>
                        <p className='text-gray-600 text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-relaxed'>
                            Find pieces that speak your language. Every style tells a story.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {[
                            { name: 'MINIMAL', subtitle: 'Less is More', image: './tops.avif' },
                            { name: 'ATHLETIC', subtitle: 'Performance Ready', image: './trousers.avif' },
                            { name: 'CASUAL', subtitle: 'Everyday Vibes', image: './dress.avif' },
                            { name: 'STATEMENT', subtitle: 'Bold Choices', image: './shoes.avif' }
                        ].map((category) => (
                            <div key={category.name} className='group cursor-pointer'>
                                <div className='relative overflow-hidden bg-gray-100 mb-4 md:mb-6 rounded-sm'>
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                                <div className='space-y-1 md:space-y-2'>
                                    <h3 className='text-lg md:text-xl lg:text-2xl font-bold text-black group-hover:underline transition-colors duration-300'>
                                        {category.name}
                                    </h3>
                                    <p className='text-xs md:text-sm lg:text-base text-gray-500 font-medium'>
                                        {category.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Statement Section */}
            <section className="bg-black text-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tight leading-tight">
                        WEAR YOUR
                        <br />
                        CONFIDENCE
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-gray-300 mb-12 leading-relaxed">
                        We believe style is personal. It's about feeling good in what you wear
                        and owning every step you take.
                    </p>
                    <a
                        href="/about"
                        className="inline-flex items-center text-lg font-bold text-white border-b-2 border-white hover:text-gray-300 hover:border-gray-300 transition-all duration-300 pb-2"
                    >
                        OUR STORY
                    </a>
                </div>
            </section>

            {/* Footer Banner */}
            <section className="bg-gray-50">
                <img
                    src="./before_footer.png"
                    className='w-full aspect-[16/9] md:aspect-[21/9] object-cover'
                    alt="Brand lifestyle imagery"
                />
            </section>
        </>
    )
}

export default Home
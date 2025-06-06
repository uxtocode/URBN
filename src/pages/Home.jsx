import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [isVideoPlaying, setIsVideoPlaying] = useState(true)
    const videoRef = useRef(null)

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 500)
    }, [])

    const toggleMute = () => {
        const video = videoRef.current
        if (video) {
            video.muted = !video.muted
            setIsMuted(video.muted)
        }
    }

    const toggleVideo = () => {
        const video = videoRef.current
        if (video) {
            if (video.paused) {
                video.play()
                setIsVideoPlaying(true)
            } else {
                video.pause()
                setIsVideoPlaying(false)
            }
        }
    }

    const mensItems = [
        // Featured Collections
        {
            type: 'featured',
            name: 'Streetwear',
            image: '/assets/Men/Featured_Collections/streetwear.webp'
        },
        {
            type: 'featured',
            name: 'Casual Essentials',
            image: '/assets/Men/Featured_Collections/casuals.webp'
        },
        {
            type: 'featured',
            name: 'Suits',
            image: '/assets/Men/Featured_Collections/suits.avif'
        },
        {
            type: 'featured',
            name: 'Lounge & Chill',
            image: '/assets/Men/Featured_Collections/chill.webp'
        },

        // New Arrivals
        { type: 'new', name: 'New Arrival 1', image: '/assets/Men/New_Arrivals/1.avif' },
        { type: 'new', name: 'New Arrival 2', image: '/assets/Men/New_Arrivals/2.avif' },
        { type: 'new', name: 'New Arrival 3', image: '/assets/Men/New_Arrivals/3.avif' },
        { type: 'new', name: 'New Arrival 4', image: '/assets/Men/New_Arrivals/4.avif' },
        { type: 'new', name: 'New Arrival 5', image: '/assets/Men/New_Arrivals/5.avif' },
        { type: 'new', name: 'New Arrival 6', image: '/assets/Men/New_Arrivals/6.avif' },
        { type: 'new', name: 'New Arrival 7', image: '/assets/Men/New_Arrivals/7.avif' },
        { type: 'new', name: 'New Arrival 8', image: '/assets/Men/New_Arrivals/8.avif' },
        { type: 'new', name: 'New Arrival 9', image: '/assets/Men/New_Arrivals/9.avif' },
        { type: 'new', name: 'New Arrival 10', image: '/assets/Men/New_Arrivals/10.avif' },
        { type: 'new', name: 'New Arrival 11', image: '/assets/Men/New_Arrivals/11.avif' },
        { type: 'new', name: 'New Arrival 12', image: '/assets/Men/New_Arrivals/12.avif' },

        // Categories
        { type: 'category', name: 'T-Shirts', image: '/assets/Men/Categories/t-shirt.avif' },
        { type: 'category', name: 'Shirts', image: '/assets/Men/Categories/shirt.avif' },
        { type: 'category', name: 'Jeans', image: '/assets/Men/Categories/jeans.avif' },
        { type: 'category', name: 'Trousers', image: '/assets/Men/Categories/trousers.avif' },
        { type: 'category', name: 'Shorts', image: '/assets/Men/Categories/shorts.avif' },
        { type: 'category', name: 'Jackets', image: '/assets/Men/Categories/jackets.avif' },
        { type: 'category', name: 'Sweaters', image: '/assets/Men/Categories/sweaters.avif' },
        { type: 'category', name: 'Hoodies', image: '/assets/Men/Categories/hoodies.avif' }
      ];

    return (
        <>
            <section className="relative w-full bg-black text-white overflow-hidden">
                {/* Video Container with Aspect Ratio */}
                <div className="relative aspect-[6/9.5] sm:aspect-[3/4] md:aspect-[16/12] lg:aspect-[22.5/9] w-full">
                    {/* Background Video */}
                    <video
                        ref={videoRef}
                        id="hero-video"
                        className="absolute inset-0 w-full h-full object-cover brightness-50 transition-all duration-1000"
                        src="/bgvideo.webm"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        poster="/fallback.jpg"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" />

                    {/* Video Controls */}
                    <div className="absolute top-6 right-4 md:top-8 md:right-8 z-30 flex items-center justify-start gap-3">
                        <button
                            onClick={toggleVideo}
                            className="group bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300"
                        >
                            {isVideoPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                </svg>
                            ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 ml-[2px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={toggleMute}
                            className="group bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300"                      >
                            {isMuted ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Text Content Bottom Left */}
                    <div className="absolute bottom-0 left-0 z-20 w-full px-4 sm:px-8 pb-12">
                        <div
                            className={`text-left space-y-8 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                        >
                            <div className="space-y-2 flex flex-wrap items-end gap-4 justify-between">
                                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight md:leading-[0.9]">
                                    <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                        SUMMER
                                    </span>
                                    <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        COLLECTION
                                    </span>
                                </h1>

                                <button className='md:mb-3'>
                                    <a
                                        href="/collections/summer-collection"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                                    >
                                        SHOP NOW
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5 ml-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
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
                        {mensItems.filter(item => item.type === 'featured').map((category) => (
                            <div
                                key={category.name}
                                onClick={() => navigate(`/collections/${category.name.toLowerCase()}`)}
                                className='cursor-pointer'>
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
                        {mensItems.filter(item => item.type === 'new').map((item) => (
                            <img
                                key={item.name}
                                onClick={() => navigate(`/new-arrivals/men/${item.name.toLowerCase()}`)}
                                src={`${item.image}`}
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
                        {mensItems.filter(item => item.type === 'category').map((category) => (
                            <div
                                key={category.name}
                                onClick={() => navigate(`/category/men/${category.name.toLowerCase()}`)}
                                className='cursor-pointer'>
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

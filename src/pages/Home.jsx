import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

const Home = () => {
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

    return (
        <>
            <section className="relative w-full bg-black text-white overflow-hidden">
                {/* Video Container with Aspect Ratio */}
                <div className="relative aspect-[3/5] lg:aspect-[21/9] w-full">
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
                    <div className="absolute top-6 right-6 z-30 flex gap-3">
                        <button
                            onClick={toggleVideo}
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 group"
                        >
                            {isVideoPlaying ? (
                                <Pause className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                            ) : (
                                <Play className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                            )}
                        </button>
                        <button
                            onClick={toggleMute}
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 group"
                        >
                            {isMuted ? (
                                <VolumeX className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                            ) : (
                                <Volume2 className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
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
                                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.9]">
                                    <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-pulse">
                                        SUMMER
                                    </span>
                                    <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        COLLECTION
                                    </span>
                                </h1>

                                <button className='mb-3'>
                                    <a
                                        href="/shop"
                                        className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                                    >
                                        SHOP NOW
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

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const sampleProducts = [
    {
        id: 1,
        title: "Classic T-Shirt",
        image: "https://image.hm.com/assets/hm/7e/cb/7ecbe5b1a522e69dfa961bb64f479393007c26ec.jpg?imwidth=1536",
        price: 29.99,
        gender: "men",
    },
    {
        id: 2,
        title: "Urban Graphic Tee",
        image: "https://image.hm.com/assets/hm/ce/9d/ce9de2231d7527eb2f8d435d9e1c9749f6e1ae51.jpg?imwidth=1536",
        price: 34.99,
        gender: "men",
    },
    {
        id: 3,
        title: "Oversized Fit Tee",
        image: "https://image.hm.com/assets/hm/d1/02/d102221dfb6336536ddb05ab0dd9ff9d10d10f61.jpg?imwidth=1536",
        price: 39.99,
        gender: "women",
    },
    {
        id: 4,
        title: "Minimal Cotton Tee",
        image: "https://image.hm.com/assets/hm/1f/63/1f6307c2ebfd65b8b6174864cddbb03772d9fad7.jpg?imwidth=1536",
        price: 24.99,
        gender: "kids",
    },
];

export default function CollectionDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const readableSlug = slug.replaceAll("-", " ");
    const pathSegments = slug.split("/");

    const [sortOption, setSortOption] = useState("featured");
    const [selectedGender, setSelectedGender] = useState("all");

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`);
    };

    const handleBreadcrumbClick = () => {
        navigate("/collections");
    };

    // Filter products by gender
    const filteredProducts =
        selectedGender === "all"
            ? sampleProducts
            : sampleProducts.filter((p) => p.gender === selectedGender);

    // Sort products by selected option
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === "price-low") return a.price - b.price;
        if (sortOption === "price-high") return b.price - a.price;
        if (sortOption === "newest") return b.id - a.id; // Mock logic
        return 0; // featured
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-white py-10 md:py-12">
                <div className="px-4 sm:px-8">
                    {/* Breadcrumb */}
                    <div className="text-sm text-gray-500 mb-4 font-medium">
                        <nav className="flex flex-wrap gap-1 items-center">
                            <span
                                onClick={handleBreadcrumbClick}
                                className="text-black hover:underline cursor-pointer"
                            >
                                Collections
                            </span>
                            {pathSegments.map((seg, idx) => (
                                <span key={idx} className="flex items-center gap-1">
                                    <span>/</span>
                                    <span className="capitalize text-gray-700">{seg.replaceAll("-", " ")}</span>
                                </span>
                            ))}
                        </nav>
                    </div>

                    {/* Page Heading */}
                    <div className="flex flex-col gap-1.5 mb-8">
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
                            {readableSlug}
                        </h1>
                    </div>

                    {/* Filters and Sorting */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                        {/* Gender Filter */}
                        <div className="mb-6">
                            <div className="flex flex-wrap gap-3">
                                {["all", "men", "women", "kids"].map((gender) => (
                                    <label
                                        key={gender}
                                        className={`cursor-pointer px-4 py-1.5 rounded-full border text-sm capitalize transition-all
          ${selectedGender === gender
                                                ? "bg-black text-white border-black"
                                                : "bg-white text-gray-700 border-gray-300 hover:border-black"
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={gender}
                                            checked={selectedGender === gender}
                                            onChange={() => setSelectedGender(gender)}
                                            className="hidden"
                                        />
                                        {gender}
                                    </label>
                                ))}
                            </div>
                        </div>


                        {/* Sort */}
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="text-sm border border-gray-300 rounded px-3 py-1"
                        >
                            <option value="featured">Sort by: Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {sortedProducts.map((product) => (
                            <div
                                key={product.id}
                                className="cursor-pointer"
                                onClick={() => handleProductClick(product)}
                            >
                                <div className="overflow-hidden rounded-md mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full aspect-[3/4] object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

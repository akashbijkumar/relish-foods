import { useNavigate, Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Star, ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { fadeInUp } from '../utils/animations';


const Products = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Vannamei Shrimps",
            category: "Shrimps & Prawns",
            image: `${import.meta.env.BASE_URL}images/products/Vanameri_Shrimp.png`,
            desc: "Premium quality Vannamei shrimps, head-on or headless, processed to perfection.",
            specs: ["IQF Frozen", "Export Quality", "HACCP Certified"]
        },
        {
            id: 2,
            name: "Black Tiger Prawns",
            category: "Shrimps & Prawns",
            image: `${import.meta.env.BASE_URL}images/products/Black_Tiger.png`,
            desc: "Massive, juicy Black Tiger prawns sourced from the deep Arabian sea.",
            specs: ["Block Frozen", "Sustainably Sourced"]
        },
        {
            id: 3,
            name: "Squids",
            category: "Cephalopods",
            image: `${import.meta.env.BASE_URL}images/products/Squid.png`,
            desc: "Tender, hand-cut squid rings, perfectly blanched and ready for gourmet cooking.",
            specs: ["Flash Frozen", "Cleaned & Ready"]
        },
        {
            id: 4,
            name: "Yellowfin Tuna",
            category: "Fish Dishes",
            image: `${import.meta.env.BASE_URL}images/products/Tuna.png`,
            desc: "Sashimi-grade Yellowfin Tuna, processed under strict temperature controls.",
            specs: ["Blast Frozen", "Prime Cut"]
        },
        {
            id: 5,
            name: "Indian Mackerel",
            category: "Fish Dishes",
            image: `${import.meta.env.BASE_URL}images/products/Indian_Mackrel.png`,
            desc: "Freshly caught Indian Mackerel, rich in oil and flavor, frozen at source.",
            specs: ["Whole Round", "High Protein"]
        },
        {
            id: 6,
            name: "Sardines",
            category: "Fish Dishes",
            image: `${import.meta.env.BASE_URL}images/products/Sardines.png`,
            desc: "Nutrient-dense Sardines, perfectly preserved to maintain their natural goodness.",
            specs: ["Blast Frozen", "Omega-3 Rich"]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <PageHeader
                tagline="Finest Catch"
                title="Premium Products"
                subtitle="Explore our diverse range of world-class seafood, ethically sourced and frozen to stay fresh."
                image={`${import.meta.env.BASE_URL}images/brands_bg_fish.png`}
            />


            {/* Filtering & Listing */}
            <section className="pt-16 pb-24 md:pt-24 md:pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {products.map((product) => (
                            <Motion.div
                                key={product.id}
                                {...fadeInUp}
                                transition={{ ...fadeInUp.transition, delay: (products.indexOf(product) % 3) * 0.1 }}
                                whileHover={{ y: -15 }}
                                className="group bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-50 relative"
                            >
                                {/* Image Container */}
                                <div className="relative h-72 md:h-96 overflow-hidden bg-slate-50">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md text-slate-900 px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-brand-red transition-colors uppercase leading-[0.9]">
                                            {product.name}
                                        </h3>
                                        <div className="p-3 bg-red-50 text-brand-red rounded-2xl opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 hidden sm:block">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-base md:text-lg mb-8 font-medium leading-relaxed">
                                        {product.desc}
                                    </p>

                                    {/* Specs Tags */}
                                    <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                                        {product.specs.map((spec, i) => (
                                            <span key={i} className="flex items-center gap-2 bg-slate-50 text-slate-400 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-slate-100">
                                                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => navigate('/contact')}
                                        className="w-full py-5 rounded-[2rem] bg-slate-900 text-white font-black text-lg md:text-xl hover:bg-brand-red transition-all duration-500 shadow-xl shadow-slate-900/10 hover:shadow-brand-red/20"
                                    >
                                        Request Quote
                                    </button>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Section */}
            <section className="py-24 md:py-32 bg-brand-red relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.2),transparent)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-white max-w-2xl text-center md:text-left">
                        <Motion.h2
                            {...fadeInUp}
                            className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight"
                        >
                            Bulk Orders & <br />Global Exports
                        </Motion.h2>
                        <Motion.p
                            {...fadeInUp}
                            transition={{ ...fadeInUp.transition, delay: 0.2 }}
                            className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed"
                        >
                            Looking for large quantities? We specialize in bulk exports with customized packaging and private labeling options.
                        </Motion.p>
                    </div>
                    <Motion.div
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.3 }}
                    >
                        <Link
                            to="/contact"
                            className="block bg-white text-brand-red px-10 md:px-12 py-5 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-2xl hover:scale-105 transition-all whitespace-nowrap"
                        >
                            Contact Sales Team
                        </Link>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};

export default Products;

import { TbBlendMode } from "react-icons/tb";
import { BiError } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

const Services = () => {
    return (
        <section id="services" className="pt-28 container mx-auto px-5">
            <div className="mb-10">
                <h2 className="text-center text-4xl font-bold text-amber-600">What I Do?</h2>
                <p className="text-center text-lg font-bold">My Services</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
            <div className="border p-10 rounded bg-slate-200 shadow-lg">
                <p className="inline-block p-2 border-4 border-amber-600 rounded"><TbBlendMode className="text-5xl text-amber-600 font-bold" /></p>
                <h3 className="text-3xl mt-6 mb-2 font-semibold text-amber-600">Web Design</h3>
                <p className="text-gray-600">I can fix any types of bug in your website. Sometimes, Lots of website are disabled by google due to security reason.</p>
            </div>
            <div className="border p-10 rounded bg-slate-200 shadow-lg">
                <p className="inline-block p-2 border-4 border-amber-600 rounded"><BiError className="text-5xl text-amber-600 font-bold" /></p>
                <h3 className="text-3xl mt-6 mb-2 font-semibold text-amber-600">Fix Website Bugs</h3>
                <p className="text-gray-700">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
            </div>
            <div className="border p-10 rounded bg-slate-200 shadow-lg">
                <p className="inline-block p-2 border-4 border-amber-600 rounded"><FaCode className="text-5xl text-amber-600 font-bold" /></p>
                <h3 className="text-3xl mt-6 mb-2 font-semibold text-amber-600">Web Development</h3>
                <p className="text-gray-700">I will make a clean, unique and professional looking website. My design must be responsive in all devices</p>
            </div>
            </div>
        </section>
    )
}

export default Services;
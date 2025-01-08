import Marquee from "react-fast-marquee";
import s1 from "../assets/skills/s1.png"
import s2 from "../assets/skills/s2.png"
import s3 from "../assets/skills/s3.png"
import s4 from "../assets/skills/s4.png"
import s5 from "../assets/skills/s5.png"
import s6 from "../assets/skills/s6.png"
import s7 from "../assets/skills/s7.png"
import s8 from "../assets/skills/s8.png"
import s9 from "../assets/skills/s9.png"
import s10 from "../assets/skills/s10.png"
import s11 from "../assets/skills/s11.png"

const Skills = () => {
    return (
        <section id="skills" className="pt-28 container mx-auto px-5 overflow-hidden">
            <div className="mb-10">
                <h2 className="text-center text-4xl font-bold text-amber-600">What I Learned</h2>
                <p className="text-center text-lg font-bold">My Skills</p>
            </div>
            <Marquee gradient={true} pauseOnHover={true} autoFill={true}>
                <div className="flex gap-10">
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s1} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">HTML</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s2} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">CSS</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s3} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">JavaScript</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s4} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">React JS</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s5} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">Bootstrap</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer me-12 p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s6} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg"> Node JS</p>
                    </div>
                </div>
            </Marquee>
            <Marquee speed='30' gradient={true} className="mt-7" direction='right' pauseOnHover={true} autoFill={true}>
                <div className="flex gap-10">
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s7} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">Photoshop</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s8} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">Git</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s9} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">Figma</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 grid place-items-center rounded-lg">
                        <img src={s10} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">Tailwind CSS</p>
                    </div>
                    <div className="bg-slate-200 cursor-pointer p-5 px-8 me-12 grid place-items-center rounded-lg">
                        <img src={s11} alt="logo" className="w-10" />
                        <p className="font-bold text-gray-700 mt-2 text-lg">WordPress</p>
                    </div>
                </div>
            </Marquee>
        </section>
    )
}

export default Skills;
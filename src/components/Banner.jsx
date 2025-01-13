import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import resume from "../assets/resume_of_towfiq_islam.pdf"
import { Typewriter } from 'react-simple-typewriter'
import { HiOutlineDownload } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";

const Banner = () => {
    return (
        <header id="home" className="text-center py-10 md:py-0 md:h-screen flex justify-center items-center text-white">
            <div className="mt-20">
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-black">
                    I Am
                    <span className="font-semibold" style={{ color: '#d97706' }}>
                        <Typewriter
                            words={[
                                ' Towfiq Islam',
                                ' A Web Designer',
                                ' A Web Developer',
                                ' A UI/UX Designer',
                                ' A Web Developer'
                            ]}
                            loop={3}
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <p className="lg:w-4/6 px-10 lg:px-0 mt-5 text-lg mx-auto">Web Development is my passion. Clients satisfaction is my first priority. Full and fresh code is my power. Love to learn and explore new skills. Now learning Next JS. All of my required social links are mentioned here. If you want, You can check any of them.
                </p>
                <div className="flex justify-center items-center gap-6 mb-8 mt-6">
                    <a target="_blank" href="https://www.facebook.com/towfiqislambd"><FaFacebookF className="text-xl" /></a>
                    <a target="_blank" href="https://drive.google.com/file/d/1dNtdGa7bcVG5l2-D1WF5vDC5er5o2yNu/view?usp=sharing"><FiFileText className="text-xl" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/towfiqislambd"><FaLinkedinIn className="text-xl" /></a>
                    <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=towfiqislambd@gmail.com"><LuMail className="text-xl" /></a>
                </div>
                <button className="flex gap-1 mx-auto items-center px-5 py-[10px] font-semibold tracking-widest rounded bg-amber-600">
                    <a href={resume} download className="">Download Resume</a>
                    <HiOutlineDownload className="text-white text-xl" />
                </button>

            </div>
        </header>
    )
}

export default Banner;
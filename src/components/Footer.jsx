import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#1a202cf5] text-gray-300 md:text-lg py-7">
            <div className="container mx-auto px-5 flex flex-col items-center md:flex-row gap-3 md:justify-between">
                <p className="text-sm sm:text-[16px]">Copyright © {new Date().getFullYear()} - All right reserved by <a className="hover:underline font-medium text-yellow-600" href="#">Towfiq Islam</a></p>
                <p className="flex gap-3 items-center md:pe-10">
                    <a target="_blank" href="https://www.facebook.com/towfiqislambd" className="w-8 h-8 text-gray-200 rounded-full border grid place-items-center"><FaFacebook /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/towfiqislambd" className="w-8 h-8 text-gray-200 rounded-full border grid place-items-center"><FaLinkedin /></a>
                    <a target="_blank" href="https://www.instagram.com/towfiqislambd" className="w-8 h-8 text-gray-200 rounded-full border grid place-items-center"><FaInstagram /></a>
                    <a target="_blank" href="https://www.github.com/towfiqislambd" className="w-8 h-8 text-gray-200 rounded-full border grid place-items-center"><FaGithub /></a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
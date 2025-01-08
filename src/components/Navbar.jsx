import { FaBars } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SmoothScroll from "./SmoothScroll";
import StickyNavbar from "react-sticky-navbar";
import { useState } from "react";

const Navbar = () => {
    const [activeBtn, setActiveBtn] = useState('home');
    return (
        <StickyNavbar showOnScrollDown={true} showOnScrollUp={true} stickyBackground={'#1a202cf5'}>
            <SmoothScroll></SmoothScroll>
            <nav className="w-full container mx-auto px-2 z-50 text-white">
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        <div className="navbar px-0 w-full flex-row-reverse lg:flex-row">
                            <div className="flex-none lg:hidden">
                                <a href="https://github.com/towfiqislambd" target="_blank" className="rounded grid place-items-center"><FaGithub className="text-3xl" /></a>
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <FaBars className="text-3xl" />
                                </label>
                            </div>
                            <div className="flex-1 px-2">
                                <a href="/" className="lg:text-3xl text-2xl font-black uppercase border-b-[3px] tracking-wide pb-1 border-amber-600">Towfiq</a>
                            </div>
                            <div className="hidden flex-none lg:block">
                                <ul className="menu menu-horizontal px-1 ms-auto gap-x-5 tracking-widest text-[.95rem] font-semibold uppercase flex items-center">
                                    <li><a onClick={() => setActiveBtn('home')} href="#home" className={activeBtn === 'home' ? 'active' : ''}>Home</a></li>
                                    <li><a onClick={() => setActiveBtn('about')} href="#about" className={activeBtn === 'about' ? 'active' : ''}>About Us</a></li>
                                    <li><a onClick={() => setActiveBtn('portfolio')} href="#portfolio" className={activeBtn === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
                                    <li><a onClick={() => setActiveBtn('skills')} href="#skills" className={activeBtn === 'skills' ? 'active' : ''}>skills</a></li>
                                    <li><a onClick={() => setActiveBtn('services')} href="#services" className={activeBtn === 'services' ? 'active' : ''}>Services</a></li>
                                    <li><a onClick={() => setActiveBtn('contact')} href="#contact" className={activeBtn === 'contact' ? 'active' : ''}>Contact</a></li>
                                    <li><a href="https://github.com/towfiqislambd" target="_blank" className="rounded grid place-items-center"><FaGithub className="text-3xl text-white" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu min-h-full w-80 space-y-3 bg-[#1a202cfa] z-[1] p-5 shadow tracking-widest text-[.95rem] font-semibold uppercase">
                            <li><a onClick={() => setActiveBtn('home')} href="#home" className={activeBtn === 'home' ? 'active' : ''}>Home</a></li>
                            <li><a onClick={() => setActiveBtn('about')} href="#about" className={activeBtn === 'about' ? 'active' : ''}>About Us</a></li>
                            <li><a onClick={() => setActiveBtn('portfolio')} href="#portfolio" className={activeBtn === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
                            <li><a onClick={() => setActiveBtn('skills')} href="#skills" className={activeBtn === 'skills' ? 'active' : ''}>skills</a></li>
                            <li><a onClick={() => setActiveBtn('services')} href="#services" className={activeBtn === 'services' ? 'active' : ''}>Services</a></li>
                            <li><a onClick={() => setActiveBtn('contact')} href="#contact" className={activeBtn === 'contact' ? 'active' : ''}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </StickyNavbar>
    )
}

export default Navbar;
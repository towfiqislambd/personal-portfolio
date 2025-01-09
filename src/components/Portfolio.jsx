import project1 from "../assets/p1.png"
import project2 from "../assets/p2.png"
import project3 from "../assets/p3.png"
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
    return (
        <section id="portfolio" className="container pt-28 mx-auto px-5">
            <div className="mb-10" >
                <h2 className="text-center text-4xl font-bold text-amber-600">Latest Works</h2>
                <p className="text-center text-lg font-bold">My Portfolio</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                <div className="projectBox shadow-lg bg-gray-300 rounded-lg">
                    <div className="h-56 overflow-hidden border rounded-t-lg">
                        <a target="_blank" href="https://crowd-funding-12832.web.app">
                            <img src={project1} alt="" className="h-full w-full" />
                        </a>
                    </div>
                    <div className="p-7">
                        <p className="font-bold text-xl mb-2">Crowd Funding Application</p>
                        <p className="text-gray-700 mb-5 font-medium">A crowdfunding website is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially</p>
                        <div className="flex gap-2 items-center">
                            <a target="_blank" href="https://crowd-fundingbd.netlify.app" className="flex gap-2 items-center bg-amber-600 text-white duration-500 hover:bg-transparent hover:text-amber-600 font-semibold border-2 rounded border-amber-600 px-4 py-1">
                                <span>Live Link</span>
                                <FaLink className="inline text-lg" />
                            </a>
                            <a target="_blank" href="https://github.com/towfiqislambd/crowd-funding-application" className="text-gray-200 bg-gray-700 flex gap-2 items-center font-semibold border-2 px-4 rounded py-1">
                                <span>Github Link</span>
                                <FaGithub className="inline text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projectBox shadow-lg bg-gray-300 rounded-lg">
                    <div className="h-56 overflow-hidden border rounded-t-lg">
                        <a target="_blank" href="https://burger-shopps.netlify.app">
                            <img src={project2} alt="" className="h-full w-full" />
                        </a>
                    </div>
                    <div className="p-7">
                        <p className="font-bold text-xl mb-2">Burger Shop</p>
                        <p className="text-gray-700 mb-5 font-medium">It is a online food related platform where people can order food. At the same time, people can pre order any food item. Besides, There are lots of offers.</p>
                        <div className="flex gap-2">
                            <a target="_blank" href="https://burger-shopps.netlify.app" className="flex gap-2 items-center bg-amber-600 text-white duration-500 hover:bg-transparent hover:text-amber-600 font-semibold border-2 rounded border-amber-600 px-4 py-1">
                                <span>Live Link</span>
                                <FaLink className="inline text-lg" />
                            </a>
                            <a target="_blank" href="https://github.com/towfiqislambd/burger-shop" className="text-gray-200 bg-gray-700 flex gap-2 items-center font-semibold border-2 px-4 rounded py-1">
                                <span>Github Link</span>
                                <FaGithub className="inline text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="projectBox shadow-lg bg-gray-300 rounded-lg">
                    <div className="h-56 overflow-hidden border rounded-t-lg">
                        <a target="_blank" href="https://towfiqislambd.github.io/organic-shop">
                            <img src={project3} alt="" className="h-full w-full" />
                        </a>
                    </div>
                    <div className="p-7">
                        <p className="font-bold text-xl mb-2">Online Group Study</p>
                        <p className="text-gray-700 mb-5 font-medium">The purpose of this project is to create a collaborative online platform where users can engage in group study activities with their friends.</p>
                        <div className="flex gap-2">
                            <a target="_blank" href="https://online-group-study-56c30.web.app" className="flex gap-2 items-center bg-amber-600 text-white duration-500 hover:bg-transparent hover:text-amber-600 font-semibold border-2 rounded border-amber-600 px-4 py-1">
                                <span>Live Link</span>
                                <FaLink className="inline text-lg" />
                            </a>
                            <a target="_blank" href="https://github.com/towfiqislambd/online-group-study" className="text-gray-200 bg-gray-700 flex gap-2 items-center font-semibold border-2 px-4 rounded py-1">
                                <span>Github Link</span>
                                <FaGithub className="inline text-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;
import aboutBg from "../assets/about.png"
const AboutMe = () => {
    return (
        <section id="about" className="grid md:grid-cols-12 gap-10 pt-28 container mx-auto px-5 items-center">
            <div className="md:col-span-5">
                <img style={{ clipPath: "polygon(3% 0, 97% 0, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0 97%, 0 3%)" }} className="md:w-96 w-full max-h-96 mx-auto object-cover brightness-75" src={aboutBg} alt="About" />
            </div>
            <div className="md:col-span-7">
                <p className="text-xl mb-3 font-bold">About Me</p>
                <h3 className="lg:text-3xl text-2xl leading-tight mb-3 text-amber-600 font-bold">Hello, My name is Towfiq Islam. I’m a Web Designer and Frontend Web Developer.</h3>
                <p className="lg:text-lg mb-3">I’m a Front End Web developer passionate about making error-free websites with 100% client satisfaction. I am passionate about learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic and goal-oriented, and I always work with an end goal in mind. Most of the time I work with MERN Stack but I have a little bit knowledge in WordPress. I can customize any WordPress Theme and Plugins.</p>
                <p className="lg:text-lg">My job is to build your website so that it is functional and user-friendly but at the same time attractive. Keeping in mind scalability and clean code that is maintainable and readable.</p>
            </div>
        </section>
    )
}

export default AboutMe;
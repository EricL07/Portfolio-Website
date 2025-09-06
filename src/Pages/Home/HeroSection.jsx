export default function HeroSection() {
    return (
       <section id="heroSection" className="hero--section"> 
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Eric</p> 
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Full Stack
                        </span>
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        I am a full stack developer specializing in building (and occasionally designing) exceptional digital experiences. 
                        <br />
                        Currently, I am focused on building responsive full-stack web applications.
                        <br />
                        In addition to coding, I enjoy video games, reading novels, and exploring new technologies.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src=".\img\Self_Image.png" alt="Hero Section"/>
            </div>
       </section>
    )
}
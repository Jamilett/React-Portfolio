import "../styles/colors.css";
import "../styles/home.css";

function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 h-screen">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        <div id="content-hero" className="flex flex-col items-start space-y-6 md:w-2/3">
          <h1 className="text-left text-4xl md:text-6xl lg:text-[96px] font-medium white-txt">
            About me...
          </h1>
          <p className="text-left text-lg grey-txt">
            I'm a programmer with a passion for creating beautiful, functional, and user-friendly websites and applications.
          </p>
          <p className="text-left text-lg grey-txt">
            My skills include HTML, CSS, JavaScript, React, Node.js, and more. I'm always learning and exploring new technologies to stay up-to-date with the latest trends in web development.
          </p>
        </div>
      </div>


      <p id="phrase" className="text-left mt-12 white-txt text-lg">
        "The best way to predict the future is to create it." - Peter Drucker
      </p>
    </div>
  );
}

export default About;
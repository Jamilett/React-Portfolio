import "../styles/colors.css";
import "../styles/home.css";

function Home() {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-screen pb-[240px]">

      <div id="content-hero" className="flex flex-col items-start space-y-6 md:w-1/2">
        <h1 className="text-left text-4xl md:text-6xl lg:text-[96px] font-medium white-txt">
          Hello <span className="cyan-txt">word!</span> I'm <span className="cyan-txt">Jam :)</span>
        </h1>
        <p className="text-left text-lg grey-txt">
          I'm a programmer with a passion for creating beautiful, functional, and user-friendly websites and applications.
        </p>
        <div className="flex space-x-4" id="hero-buttons">
          <button className="px-6 py-3 rounded-lg transition black2-bg " id="hero-button1">
            <a href="/portfolio">
              View Portfolio
            </a>
          </button>
          <button className="px-6 py-3 rounded-lg transition cyan-border cyan-txt black-bg" id="button2">
            <a href="/contact">
              Contact Me
            </a>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Home;
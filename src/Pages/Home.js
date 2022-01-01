import "./Home.css";
import { HoverMorphIcon } from "react-svg-buttons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Hi, I'm Yeeun.</h1>
      <p>I'll show you around my workspace.</p>
      <br />
      <Link to="/projects">
        <HoverMorphIcon
          baseType="fwd"
          hoverType="arrowRight"
          size={60}
          thickness={2}
          color="#ffffff"
          className="hovericon"
        />
      </Link>
    </div>
  );
}

export default Home;

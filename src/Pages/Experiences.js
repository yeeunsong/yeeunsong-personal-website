import "./Experiences.css";

function Experiences() {
  return (
    <div className="Experiences">
      <div className="static-container">
        <h1 className="title">Experiences</h1>

        <div className="std">
          <div className="first-fold">
            <ul className="about-contact">
              <li>
                <a href="/" target="_blank" title="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ico"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-labelledby="LinkedinIcoTitle"
                  >
                    <title id="LinkedinIcoTitle">LinkedIn logo</title>
                    <path
                      stroke="none"
                      d="M14.8 0H1.2C.5 0 0 .5 0 1.2v13.7c0 .6.5 1.1 1.2 1.1h13.6c.7 0 1.2-.5 1.2-1.2V1.2c0-.7-.5-1.2-1.2-1.2zM4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/iuridepaula"
                  target="_blank"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ico"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-labelledby="GithubIcoTitle"
                  >
                    <title id="GithubIcoTitle">GitHub logo</title>
                    <path
                      stroke="none"
                      fill-rule="evenodd"
                      d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6 0 1.3-.1 2-.1s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                Download my
                <a
                  href="./Iuri-de-Paula-Resume.pdf"
                  target="_blank"
                  title="Download Resume"
                  className="bt"
                >
                  resume{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ico"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      d="M8 11.4l3.3-2.9m-6.6 0L8 11.4V.5M.5 10.8v4.7h15v-4.7"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <p class="-purple">
              I am a creative frontend developer, designer and illustrator.
            </p>
            <p class="-gray">10+ years of experience</p>
          </div>
          
          <div className="about-grid">
                    <h2>Main skills</h2>
                    <div class="columns fluent">
                        <ul>
                            <li>
                                Frontend development,<br>
                                UX/UI design
                            </li>
                            <li>
                                JavaScript, CSS, HTML<br>
                                Vue, jQuery, GSAP
                            </li>
                            <li>
                                Photoshop,<br>
                                Illustrator
                            </li>
                            <li>
                                Strategic thinking,<br>
                                Storytelling
                            </li>
                            <li>
                                E-commerce,<br>
                                Magento,<br>
                                WordPress
                            </li>
                            <li>
                                Graphic design,<br>
                                Brand design
                            </li>
                        </ul>
                    </div>

                    <h2>Tools</h2>
                    <div class="columns tools">
                        <ul>
                            <li>Vue</li>
                            <li>Sass/Less</li>
                            <li>Linters</li>
                            <li>Mocha</li>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                        <ul>
                            <li>Webpack</li>
                            <li>Node.js</li>
                            <li>npm</li>
                            <li>GitHub</li>
                            <li>REST APIs</li>
                            <li>PHP</li>
                        </ul>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Adobe XD</li>
                            <li>Sketch</li>
                            <li>SVG</li>
                            <li>Canvas</li>
                        </ul>
                        <ul>
                            <li>Pencil & Paper</li>
                            <li>Philosophy</li>
                            <li>Psychology</li>
                        </ul>
                    </div>

                    <h2>Experience</h2>
                    <div class="columns experience">
                        <ul>
                            <li>
                                <b class="-purple">Head of Product Design</b><br>
                                at BizCommerce<br>
                                2016 - 2019
                            </li>
                            <li>
                                <b class="-purple">Head of UX/UI</b><br>
                                at BizCommerce<br>
                                2011 - 2019
                            </li>
                            <li>
                                <b class="-purple">Head of Design & Frontend</b><br>
                                at JOE<br>
                                2010 - 2014
                            </li>
                            <li>
                                <b class="-purple">Senior Frontend Developer</b><br>
                                at Tray<br>
                                2008 - 2010
                            </li>
                            <li>
                                <b class="-purple">Web Designer</b><br>
                                at E2W<br>
                                2006 - 2008
                            </li>
                            <li>
                                <b class="-purple">Freelancer</b><br>
                                Illustrations & Web development<br>
                                2005 - now
                            </li>
                        </ul>
                    </div>

                    <h2>Languages</h2>
                    <div class="columns languages">
                        <ul>
                            <li>
                                <span class="-comment">// fluent</span><br>
                                <i class="-purple">pt-BR</i> Português,<br>
                                <i class="-purple">en-US</i> English
                            </li>
                            <li>
                                <span class="-comment">// intermediate</span><br>
                                <i class="-purple">es-ES</i> Español<br>
                            </li>
                            <li>
                                <span class="-comment">// basic</span><br>
                                <i class="-purple">ca-ES</i> Català,<br>
                                <i class="-purple">ja-JP</i> 日本語<br>
                            </li>
                        </ul>
                    </div>

                    <h2>Also busy with</h2>
                    <div class="columns busy">
                        <ul>
                            <li>Pet my dog</li>
                            <li>Spanish guitar</li>
                            <li>Video games</li>
                            <li>#eleNÃO</li>
                        </ul>
                    </div>
                </div>
       
        </div>
      </div>
    </div>
  );
}

export default Experiences;

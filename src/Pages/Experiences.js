import "./Experiences.css";

function Experiences() {
  return (
    <div id="about" className="Experiences">
      <div className="static-container">
        <h1 className="major-title">Experiences</h1>

        <div className="std">
          <div className="first-fold">
            <ul className="about-contact">
              <li>
                <a
                  href="https://www.linkedin.com/in/yeeun-song-2b1481208/"
                  target="_blank"
                  title="LinkedIn"
                  rel="noreferrer"
                >
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
                  href="https://github.com/yeeunsong"
                  target="_blank"
                  title="GitHub"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ico"
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
            </ul>

            <p className="-gray">
              I am an engineer, project developer, and explorer. Following
              directions where my interests leads me.
            </p>
            <p className="-gray">
              Currently senior in Computer Science at Korea University.
            </p>
          </div>

          <div className="about-grid">
            <h2 className="sub-title">Skills</h2>
            <div className="columns fluent">
              <ul>
                <li>
                  Backend Development,
                  <br />
                  Machine Learning
                </li>
                <li>
                  Node.js, Express, Three.js,
                  <br />
                  C, Python, Pytorch
                </li>
              </ul>
            </div>

            <h2 className="sub-title">Work Experiences</h2>
            <div className="columns experience">
              <ul>
                <li>
                  <b className="-purple">
                    Wildfire AI Strategy Planning / Sales, Intern
                  </b>
                  <br />
                  Alchera
                  <br />
                  2021.03 - 2021.09
                </li>
                <li>
                  <b className="-purple">
                    Machine Learning (Generative Model), Intern
                  </b>
                  <br />
                  ETRI
                  <br />
                  2021.01 - 2021.02
                </li>
                <li>
                  <b className="-purple">
                    Machine Learning (Virtual Dataset), Intern
                  </b>
                  <br />
                  ETRI
                  <br />
                  2020.07 - 2020.08
                </li>
                <li>
                  <b className="-purple">
                    International Students Management, Intern
                  </b>
                  <br />
                  Korea Univ. International Summer School
                  <br />
                  2019.07 - 2019.08
                </li>
              </ul>
            </div>

            <h2 className="sub-title">Awards</h2>
            <div className="columns experience">
              <ul>
                <li>
                  <b className="-purple">2020 DIME Innovative Ideaton</b>
                  <br />
                  App for the mobility handicapped
                  <br />
                  2020.12
                </li>
                <li>
                  <b className="-purple">Drone AI Video Software Hackaton</b>
                  <br />
                  AI model for drone video object detection
                  <br />
                  2020.10
                </li>
                <li>
                  <b className="-purple">KU 2020 Smart Campus Dataton</b>
                  <br />
                  App for promotional material management services
                  <br />
                  2020.09
                </li>
                <li>
                  <b className="-purple">Creative Challenger Program</b>
                  <br />
                  Credit card fraud detection AI
                  <br />
                  2019.04 - 2020.02
                </li>
              </ul>
            </div>

            <h2 className="sub-title">Activities</h2>
            <div className="columns experience">
              <ul>
                <li>
                  <b className="-purple">2020 Kaist Summer MadCamp</b>
                  <br />
                  Developed 4 app and web services
                  <br />
                  2021.07
                </li>
                <li>
                  <b className="-purple">
                    Korea University Big Data / Machine Learning Association,
                    Vice President
                  </b>
                  <br />
                  Long-term machine learning projects
                  <br />
                  2019.04 - 2020.08
                </li>
                <li>
                  <b className="-purple">KU Future Sharing School</b>
                  <br />
                  Math / English mentor for high school students
                  <br />
                  2018.05 - 2019.03
                </li>
                <li>
                  <b className="-purple">
                    KU Global Leadership China Winter Program
                  </b>
                  <br />
                  Harbin Institute of Technology, Chinese study
                  <br />
                  2018.12 - 2019.01
                </li>
                <li>
                  <b className="-purple">
                    KU Global Leadership China Summer Program
                  </b>
                  <br />
                  Shanghai Huadong Normal University, Chinese study
                  <br />
                  2018.07 - 2018.08
                </li>
              </ul>
            </div>

            <h2 className="sub-title">Languages</h2>
            <div className="columns languages">
              <ul>
                <li>
                  <span className="-comment">Korean // Native</span>
                </li>
                <li>
                  <span className="-comment">English // Fluent</span>
                </li>
                <li>
                  <span className="-comment">Chinese // Basic</span>
                </li>
              </ul>
            </div>

            <h2 className="sub-title">Also busy with</h2>
            <div className="columns busy">
              <ul>
                <li>Learning German</li>
                <li>Preparing exchange student to Germany</li>
                <li>Workout</li>
                <li>Running</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;

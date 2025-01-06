import "./Dashboard.css";
import Card from "../Card/Card";
import data from "../../assets/Data.json";

const Dashboard = () => {
  // const [languages, setLanguages] = useState([]);

  // useEffect(() => {
  //   setLanguages(data);
  // }, []);
  return (
    <>
      <section>
        <div className="dashboard-img">
          <div className="notes">
            <h1>
              Online <span style={{ color: "orangered" }}>Software Course</span>{" "}
              in India
            </h1>
            <h5>
              Are you looking to improve your IT skills and boost your
              confidence in creating projects? Look no further! At Best Notes,
              we offer the best online IT course in India, perfect for learners
              at all levels.Web development relies on a combination of core
              languages: HTML, CSS, and JavaScript. HTML structures content,
              defining elements like headings, paragraphs, and links. CSS styles
              the content, handling layouts, colors, fonts, and responsiveness.
              JavaScript adds interactivity, enabling dynamic features like
              animations, form validation, and user interactions. Together, they
              form the foundation of web design and development. Advanced
              frameworks like React simplify complex projects. Back-end
              languages like Node.js, Python operations, ensuring functionality.
              Emphasize clean, accessible code and responsive design to create
              engaging, user-friendly web experiences.
            </h5>
          </div>
        </div>
      </section>
      <section className="second-dashboard">
        <div className="dashboard-next">
          <h1>One of the famous programing language in the World</h1>
        </div>
        <div className="dashboard-card">
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  {" "}
                  <Card
                    language_image={item.language_image}
                    language_name={item.language_name}
                    about={item.about}
                    link={item.link}
                    label="Watch"
                  />{" "}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

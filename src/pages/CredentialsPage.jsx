import { useState } from "react";
import cert1 from '../assets/metafrontend.jpeg'
import "./CredentialsPage.css";

const credentialsData = [
  {
    id: 1,
    type: "certificate",
    title: "Meta Back-End Developer",
    org: "Coursera | META",
    image: `${cert1}`,
    stack: ["react", "django", "mysql"],
  },
  {
    id: 1,
    type: "certificate",
    title: "Meta Back-End Developer",
    org: "Coursera | META",
    image: `${cert1}`,
    stack: ["react", "django", "mysql"],
  },
  {
    id: 1,
    type: "certificate",
    title: "Meta Back-End Developer",
    org: "Coursera | META",
    image: `${cert1}`,
    stack: ["react", "django", "mysql"],
  },
  {
    id: 1,
    type: "certificate",
    title: "Meta Back-End Developer",
    org: "Coursera | META",
    image: `${cert1}`,
    stack: ["react", "django", "mysql"],
  },
  {
    id: 2,
    type: "badge",
    title: "Meta Back-End Developer",
    org: "Coursera | April 1, 2025",
    image: `${cert1}`,
    stack: ["react", "django", "mysql"],
  },
  // add more...
];

const techIcons = {
  react: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  django: "https://cdn-icons-png.flaticon.com/512/919/919837.png",
  mysql: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
};

const CredentialsPage = () => {
  const [filter, setFilter] = useState("all");

  const filtered = credentialsData.filter(
    (item) => filter === "all" || item.type === filter
  );

  return (
    <section className="credentials" id="credentials-page">
      <h2>Head</h2>
      <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>

      <div className="filters">
        {["all", "certificate", "badge"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}s
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.org}</p>
            <div className="stack">
              {item.stack.map((tech) => (
                <img key={tech} src={techIcons[tech]} alt={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CredentialsPage;

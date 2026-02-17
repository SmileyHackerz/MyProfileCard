import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "yellow",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "lightskyblue",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "darkblue",
  },
  {
    skill: "React",
    level: "beginner",
    color: "purple",
  },
  {
    skill: "Language C",
    level: "intermediate",
    color: "green",
  },
  {
    skill: "Java",
    level: "beginner",
    color: "red",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me.jpeg" alt="Mohamed Faye" />;
}

function Intro() {
  return (
    <div>
      <h1>Mohamed Faye</h1>
      <p>
        Engineering student passionate about tech and creativity. I love
        drawing, video editing, cooking (and eating), and training —
        weightlifting and calisthenics. Always building, always improving. 🚀
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill color={skill.color} level={skill.level} skill={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ color, level, skill }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level == "beginner" && "👶"}
        {level == "intermediate" && "👍"}
        {level == "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

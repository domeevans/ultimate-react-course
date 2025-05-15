import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "beginerSkill", level: "beginer", color: "#cee6c5" },
  { skill: "intermediateSkill", level: "intermediate", color: "#cee6c6" },
  { skill: "advancedSkill", level: "advanced", color: "#bb7845" },
  { skill: "beginerSkill2", level: "beginer", color: "#accda3" },
  { skill: "beginerSkill3", level: "beginer", color: "#accda3" },
];

const emojiMap = {
  beginer: "🐥",
  intermediate: "👍",
  advanced: "💪",
};

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <br></br>
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function Avatar() {
  return <img className="avatar" src="avatar.png" alt="" />;
}
function Intro() {
  return (
    <div>
      <h1>Dominic Evans</h1>
      <p>
        Lorem ipsum dolor sit amet et consectetuer. Duo ex amet te amet dolor et
        kasd invidunt facer duo consectetuer. Liber labore stet eirmod dolor et
        liber euismod elitr tempor stet rebum sed.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </ul>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emojiMap[level]}</span>
    </div>
  );
}

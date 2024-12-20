import './Skills.css';

const skillDetails = [
  {
    category: "Programming Languages",
    skills: [
        { name: "JavaScript", logo: "public/logos/javascript.svg" },
        { name: "Python", logo: "public/logos/python.svg" },
        { name: "Java", logo: "public/logos/java.svg" },
        { name: "C++", logo: "public/logos/c++.svg" },
        
    ],
  },
  {
    category: "Frontend",
    skills: [
        { name: "HTML", logo: "public/logos/html.svg" },
        { name: "CSS", logo: "public/logos/css.svg" },
        { name: "React", logo: "public/logos/react.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
        { name: "Node.js", logo: "public/logos/nodejs.svg" },
        { name: "Express", logo: "public/logos/express.svg" },
        { name: "PostgreSQL", logo: "public/logos/postgresql.svg" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
        { name: "Git", logo: "public/logos/git.svg" },
        { name: "AWS", logo: "public/logos/aws.svg" },
    ],
  },

];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      {skillDetails.map((section, index) => (
        <div key={index} className="skills-section">
          <h3 className="skills-subtitle">{section.category}</h3>
          <ul className="skills-list">
            {section.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
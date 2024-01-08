import { useState, useEffect } from "react";
import "./Experience.css";
import { SlCalender } from "react-icons/sl";

const Experience = ({ state }) => {
  const [education, setEducation] = useState("");

  useEffect(() => {
    const { contract } = state;
    const educationDetails = async () => {
      const education = await contract.methods.allEducationDetails().call();
      setEducation(education);
    };
    contract && educationDetails();
  }, [state]);
  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education </h1>

      <div className="container">
        <div className="education">
          <h1 className="edu-title">Education</h1>
          <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> Dec 2020 - Present
            </p>
            <h3 className="card-text2">
              Dr BR Ambedkar National Institute Of Technology,Jalandhar
            </h3>
            <p className="card-text3">
              CGPA- 8.28
              <br></br>
              Relevant Coursework: Object Oriented Programming, Computer
              Networks, Data Anal- ysis, Soft Computing, Database Management
              System, Data Structures and Algorithms
            </p>
          </div>
          {education !== "" &&
            education.map((edu) => {
              return (
                <div className="edu-card">
                  <p className="card-text1">
                    <SlCalender className="icon" /> {edu.date}
                  </p>
                  <h3 className="card-text2">{edu.degree}</h3>
                  <p className="card-text3">{edu.knowledgeAcquired}</p>
                  <p className="card-text4">{edu.instutionName}</p>
                </div>
              );
            })}
        </div>
        {/* experience */}
        <div className="education">
          <h1 className="edu-title">Experience</h1>
          {/* card1 */}
          <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> May-Sept 2023
            </p>
            <h3 className="card-text2">Backend Developer Intern</h3>
            <p className="card-text3">
              Worked on building wallets mainly on backend part which included
              building APIs, storing data in database
            </p>
          </div>
          {/* card2 */}
          <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> Mar-Nov 2023
            </p>
            <h3 className="card-text2">Blockchain Developer Intern</h3>
            <p className="card-text3">
              Developed decentralized finance using uniswap protocols and
              learned different devOps tools and cleared GCP and AWS
              certification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

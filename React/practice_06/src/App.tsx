import { useEffect, useState } from "react";
import { fetchJobs, jobs } from "./data";
import { FaAngleDoubleRight } from "react-icons/fa";

const url: string = "https://www.course-api.com/react-tabs-project";

function App() {
  const [newJobs, setnewJobs] = useState<jobs[] | null>(null);

  const [tabId, setTabId] = useState(0);
  useEffect(() => {
    const getJobs = async () => {
      const jobsData = await fetchJobs(url);
      setnewJobs(jobsData);
    };
    getJobs();
  }, []);
  if (!newJobs)
    return (
      <section className="loading">
        <h1>Loading...</h1>
      </section>
    );
  return (
    <section className="jobs-center">
      <div className="btn-container">
        {newJobs.map((item, index) => {
          return (
            <button
              className={`job-btn ${index === tabId && "active-btn"}`}
              onClick={() => setTabId(index)}
            >
              {item.company}
            </button>
          );
        })}
      </div>
      <article className="job-info">
        <h3>{newJobs[tabId].title}</h3>
        <span className="job-company">{newJobs[tabId].company}</span>
        <p className="job-date">{newJobs[tabId].dates}</p>
        <div>
          {newJobs[tabId].duties.map((item) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
}

export default App;

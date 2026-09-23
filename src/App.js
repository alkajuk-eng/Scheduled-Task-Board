import { Headers } from "./components/Headers";
import { JobForm } from "./components/JobForm";
import { Footer } from "./components/Footer";
import { Jobcolumn } from "./components/Jobcolumn";

import Complete from "./Images/complete.png";
import InProgress from "./Images/inprogress.png";
import Completed from "./Images/Completed.png";

import "./App.css";
import { useState } from "react";

function App() {
  const [job, setJob] = useState([]);

  const callDeleteJob=(uqueNumber)=>{
    const filtredJobs=job.filter((item,index)=>index!==uqueNumber)
    setJob(filtredJobs)
  }

  console.log(job);
  return (
    <div className="app">
      <Headers />
      <JobForm setJob={setJob} />

      <main className="headerfunc">
        <Jobcolumn
          title="Need to Complete"
          imgIcon={Complete}
          job={job}
          status="tostart"
          callDeleteJob={callDeleteJob}
        />
        <Jobcolumn
          title="In Progress"
          imgIcon={InProgress}
          job={job}
          status="inprogress"
          callDeleteJob={callDeleteJob}
        />
        <Jobcolumn
          title="Completed"
          imgIcon={Completed}
          job={job}
          status="completed"
          callDeleteJob={callDeleteJob}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

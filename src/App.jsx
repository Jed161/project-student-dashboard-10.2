import { useState } from "react";

import CohortList from "./Components/CohortList.jsx";
import HomePage from "./Components/HomePage.jsx"
import StudentsList from "./Components/StudentsList.jsx"
import data from "./data/data.json"

import "./App.css"

function App() {
  const [displayedStudents, setDisplayedStudents] = useState(data);

  const getCohorts = (StudentsList) => {
    let cohortCounter = {}
    StudentsList.forEach(student => {
      cohortCounter[student.cohort.cohortCode] = true
    })
    return Object.keys(cohortCounter)
  }
  const filterStudentsByCohort = (cohortCode) => {
    console.log(cohortCode)
    let filteredList = data.filter(student => {
      return student.cohort.cohortCode === cohortCode
    })
    setDisplayedStudents(filteredList)
    return filteredList
  }

  return (
    <div>
      <Header />
      <section className="main-page-content"></section>
      <CohortList filterStudentByCohort={filterStudentsByCohort} cohorts={getCohorts(data)} />
      <StudentsList students={displayedStudents} />
    </div>
  );
}

export default App;
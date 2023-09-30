 import { useState } from "react";
 import CohortList from "./Components/CohortList";
 import StudentList from "./Components/StudentList"
// import "./data/App.css"
import data from "./data/data.json"

function App() {
  const [displayedStudents, setDisplayedStudents] = useState(data);

  const getCohorts = (StudentList) => {
    let cohortCounter = {}
    StudentList.forEach(student => {
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
       {/* <section className="main-page-content"></section> */}
      <CohortList 
      filterStudentByCohort={filterStudentsByCohort} cohorts={getCohorts(data)} /> 
      <StudentList students={data} /> 
    </div>
  );
}

export default App;



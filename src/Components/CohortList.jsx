import React, { useState } from "react"

function CohortList({cohorts, filterStudentByCohort}) {
    const [selectedCohort, setSelectedCohort] = useState("all");

    function onCohortClick(cohort) {
        setSelectedCohort(cohort);
        if (cohort === "all") {

        }
    }

    return (
        <ul>
            <li>All Students</li>
            {cohorts.map((cohort) => {
                return (
                    <li key={cohort} onClick={() => {
                        filterStudentByCohort(cohort)
                    }}>{cohort.substring(0, cohort.length - 4) + " " + cohort.substring(cohort.length - 4, cohort.length)}</li>
                )
            })}
        </ul>

    );
};
export default CohortList
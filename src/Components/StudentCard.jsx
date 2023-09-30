import React from 'react'

export default function StudentCard({student}) {
  return (
    <>
    <h1>StudentCard</h1>
    <p>{student.names.preferredName}</p>
    <p>{student.names.middleName}</p>
    <p>{student.names.surname}</p>
    <p>{student.cohort.cohortCode}</p>
    </>
  )
}




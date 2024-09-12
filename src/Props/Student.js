import React from 'react'

function Student(props) {
  return (
    <>
    <h1>Student</h1>
    <p>{props.name}</p>
    <p>{props.agr}</p>
    <p>{props.class}</p>
    </>
  )
}

export default Student

import React from 'react'

function Teacher(props) {
  return (
    <>
      <h1>Teacher</h1>
      <p>{props.teacher.name}</p>
      <p>{props.teacher.post}</p>
      <p>{props.teacher.salary}</p>
    </>
  )
}

export default Teacher

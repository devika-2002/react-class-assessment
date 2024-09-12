import React from 'react';
import Student from './Props/Student';
import Teacher from './Props/Teacher';
import Principal from "./Props/Principal";

function App() {
  const student = {
    name: "Nav",
    age: "22",
    class: "12th"
  }
  const teacher = {
    name: "pk",
    post: "Teacher",
    salary: "30,000"
  }

  const principal = {
    name: "Mr.Raj",
    age: 30,
    experince: 5,
  }

  return (
    <div>
      navgurukul
      <Student name = {student.name} age = {student.age} class = {student.class}/>
      <Teacher teacher={teacher}/>
      <Principal {...principal}/>  
    </div>
  );
}

export default App;
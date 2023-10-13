// App.js
import React, { useState } from 'react';
import StudentMarksForm from './components/StudentMarksForm';
import StudentMarksDisplay from './components/StudentMarksDisplay';
import Navbar from './components/navbar';
import students from './data/students';

const App = () => {
  const [studentData, setStudentData] = useState(null);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  

  const searchStudent = (regNo, pass) => {
    const student = students.find((s) => s.regNo === regNo);

    if (student && pass === student.password) {
      setStudentData(student);
      setPasswordIncorrect(false); 
    } else {
      setStudentData(null);
      setPasswordIncorrect(true);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto px-4 mt-4">
        <StudentMarksForm onSearch={searchStudent} />
        {passwordIncorrect && (
          <div className="bg-red-100 text-red-500 p-2 rounded mt-2">
            Password Incorrect. Please try again.
          </div>
        )}
        <StudentMarksDisplay student={studentData} />
      </div>
    </div>
  );
};

export default App;

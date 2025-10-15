import React, { useState } from "react";
import "./App.css";

function App() {
  const students = ["Alice", "Bob", "Charlie", "David", "Emma"];

  const [presentStudents, setPresentStudents] = useState([]);

  const handleCheckboxChange = (student) => {
    if (presentStudents.includes(student)) {
      setPresentStudents(presentStudents.filter((name) => name !== student));
    } else {
      setPresentStudents([...presentStudents, student]);
    }
  };

  return (
    <div className="container">
      <h1>Attendance Tracker</h1>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student} className="student-item">
            <label>
              <input
                type="checkbox"
                checked={presentStudents.includes(student)}
                onChange={() => handleCheckboxChange(student)}
              />
              {student}
            </label>
          </li>
        ))}
      </ul>
      <div className="count">
        Total Present: {presentStudents.length} / {students.length}
      </div>
    </div>
  );
}

export default App;

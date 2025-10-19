
import Student from "./Student.jsx";
const School=() =>{
  const students = [
    { id: 1, name: "דני כהן", gradeAvg: 95, age: 17 },
    { id: 2, name: "רות לוי", gradeAvg: 58, age: 16 },
    { id: 3, name: " נועה רובין", gradeAvg: 82, age: 18 },
  ];

  // פונקציה שמודפסת כשיש יציאה של תלמיד
  const handleStudentExit = () => {
    console.log("השער נפתח");
  };

  return (
    <div>
      <h1>בית הספר</h1>
      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          gradeAvg={student.gradeAvg}
          age={student.age}
          onExit={handleStudentExit} // נשלח פונקציה כ־prop
        />
      ))}
    </div>
  );
}
export default School;
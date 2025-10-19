const Student = ({ name, gradeAvg, age, onExit }) => {
  // קובעים את התואר לפי ממוצע
  let title = "";
  if (gradeAvg > 90) {
    title = "תלמיד מצטיין";
  } else if (gradeAvg < 60) {
    title = "טעון שיפור";
  }

  // פונקציה ללחיצה על כפתור יציאה
  const handleExit = () => {
    const time = new Date().toLocaleTimeString("he-IL");
 console.log(`${name} - יצאת בשעה ${time}`);
    onExit(); // מפעילים את הפונקציה מה־School
  };

  return (
    <div>
      
    
      <h2>{name}</h2>
      <p>גיל: {age}</p>
      <p>ממוצע ציונים: {gradeAvg}</p>
      {title && <p>{title}</p>}

      <button onClick={handleExit}>יציאה מבית הספר</button>
    </div>
  );
}

export default Student;
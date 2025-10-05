import CourseDetails from "./CourseDetails";

const PersonDetails = () => {

    const personDetails={
        name:"John Doe",
        age:30,
       
    }
   return (
     <>
     <h1>PersonDetails</h1>
     {
         <p>Name: {personDetails.name}</p>
     }
     {
         <p>Age: {personDetails.age}</p>
     }
      <h3>רשימת קורסים:</h3>

      
      <CourseDetails
        courseName="React"
        grade={95} 
      />
      <CourseDetails
        courseName="JavaScript"
        grade={88}
      />   
     </>
   );
}
export default PersonDetails;
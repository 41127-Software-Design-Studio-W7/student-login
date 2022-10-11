import React, { useState } from 'react'

function InputForm( { Logout, Courses } ) {
    const [courses, setCourses] = useState({courseNum: "", spec: "", studyYear: ""});


    const submitHandler = e => {
        e.preventDefault();

        Courses(courses);
    }

    const logoutHandler = e => {
        e.preventDefault();
        Logout();
    }
  
    return (
    <form onSubmit={submitHandler}>
        <div>
            <h2>Course Recommendation Input</h2>
            <div className="form-group">
                <input type="courseNum" name="courseNum" id="courseNum" onChange={e => setCourses({...courses, courseNum: e.target.value})} value={courses.courseNum} placeholder="Course Number"/>
            </div>
            <div className="form-group">
                <input type="spec" name="spec" id="spec" onChange={e => setCourses({...courses, spec: e.target.value})} value={courses.spec} placeholder="Specialisation"/>
            </div>    
            <div className="form-group">
                <input type="studyYear" name="studyYear" id="studyYear" onChange={e => setCourses({...courses, studyYear: e.target.value})} value={courses.studyYear} placeholder="Year of Study"/>
            </div> 
            <input  name="continue" type="submit" value="Continue"/>          
            <button class='button' onClick={(Logout)} name="logout" type="submit" value="Logout"> Logout </button>
        </div>
    </form>


  )
}

export default InputForm

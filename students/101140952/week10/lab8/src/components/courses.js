import React from 'react';

const  Course = ({enrolled}) => {
    return (
        <>
            <p>Student is enrolled in <b>Course</b> <b>{enrolled}</b></p>
        </>
      );
}
 
export default Course;
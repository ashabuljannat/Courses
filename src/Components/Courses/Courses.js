import React from 'react';
import './Courses.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';




const Courses = (props) => {

    return (
        
        <div className='product'>
                 <div>                  
                       <h3> Course Name : {props.course.name} <FontAwesomeIcon icon={faCode} /></h3>
                        <h4>Class Schedule : {props.course.class}</h4>
                        <h4>Trainer : {props.course.trainer}</h4>
                        <h3>Cost : ${props.course.price} </h3>
                      <button onClick={() => props.handleAddCost(props.course)}  className='btn btn-outline-info'>
                         Enroll Now</button>
                </div>
               
    </div>
    );
};

export default Courses;
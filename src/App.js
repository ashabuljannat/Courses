import React, { useState } from 'react';
import './App.css';
import List from './Components/List/List';
import Courses from './Components/Courses/Courses';

function App(){

 const [list, setList] = useState([]);

 var courses = [
  { name:'Web Design ',   class:'friday', trainer:'Bill Gates', price:100 },
  { name:'Creative Arts ', class:'saturday', trainer:'Paul Allen',price:200 },
  { name:'IT & Computer ', class:'sunday',trainer:'Steve Jobs',price:300 },
  { name:'learn java ',    class:'monday',trainer:'Ronald',price:400 },
  { name:'learn php ',     class:'tuesday',trainer:'Jeff Bezos',price:500 },
  { name:'learn python ',  class:'wednesday',trainer:'Steve Jobs',price:600 },
  { name:'learn js ',      class:'thursday',trainer:'Steve Jobs',price:700 },
  { name:'Web Development ',class:'friday',trainer:'Bill Gates + Steve Jobs ',price:100 },
  { name:'Data Type ',      class:'saturday',trainer:'Ronald',price:200 },
  { name:'Web Search ',     class:'sunday',trainer:'Bill Gates',price:300 },
  { name:'learn C++ ',      class:'monday',trainer:'Steve Jobs + Ronald',price:400 },
  { name:'Video Editing ',  class:'tuesday',trainer:'Jeff Bezos',price:500 },
  { name:'Photoshop ',      class:'wednesday',trainer:'Jeff Bezos',price:600 },
  { name:'Fashion Design ', class:'thursday',trainer:'Jeff Bezos',price:700 },
];


 const handleAddCost = (props) => {
     const newList =[...list,props];
     setList(newList);
 };


    return ( 
      <div className = "App" >
      <header className = "header" >
          <div className='main'>
               <h2>Total Courses : 15</h2>
                   {
                    courses.map(course =>
                      <Courses course={course} handleAddCost = {handleAddCost}>
                    </Courses>) 
                   }    
         </div>    
           <div className="cart">
               <List list={list}></List>
           </div>
      </header>
    </div>



    );
  }

export default App; 
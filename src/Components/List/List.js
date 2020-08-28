import React from 'react';
import './List.css';

const List = (props) => {
    const list = props.list;
    let total = 0;
    let totalNam='';

    

    for (let i = 0; i < list.length; i++) {
        total = total + list[i].price;
        totalNam += list[i].name;
    };

    return (
        <div className='list'>
            <h3>Enroll Courses : {list.length}</h3>
            <h5>Courses Name : {totalNam}</h5>
            <h3>Total Cost : ${total}</h3>
        </div>
    );
};

export default List;
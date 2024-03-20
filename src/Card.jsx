import React, { useState } from 'react';

const Card = ({item,title,setTitle,description,setDescription,handleDelete,toggleComplete,setCart,handleEdit}) => {

  const[edit,setEdit]=useState(false);
  
  return (
    <div >

      

       <div className="card mt-3 mb-3" style={{backgroundColor:"aquamarine",width:"20rem"}}>
            <div className="card-body">
            <p className="fw-bold">Id:{item.id}</p>
              <p className="fw-bold">Title:{item.title}</p>
              <p className="fw-bold">Description:{item.description}</p>
             
              <select className={item.completed?"text-bg-success":"text-bg-danger"} 
              name={`status-${item.id}`}
              id={`status-${item.id}`}
              value={item.completed ? "completed" : "pending"}
              onChange={()=>toggleComplete(item.id)}>
                 <option value="completed">Completed</option>
                 <option value="pending">Pending </option>   
              </select> <br />
              <button className="btn btn-success p-2 ms-5 mt-3" onClick={()=>handleEdit()}>Edit</button>
              <button className="btn btn-danger p-2 ms-5 mt-3" onClick={()=>handleDelete(item.id)}>Delete</button>
            </div>
          </div>
    </div>
  );
};

export default Card;

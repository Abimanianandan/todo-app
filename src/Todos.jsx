import React from 'react';

const Todos = ({addTodoData,title,setTitle,description,setDescription}) => {
  const handleSubmit = () => {
    addTodoData(title, description),
    setTitle(""),
    setDescription("")
  };
    return (
        <div>
            <div className="row">
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control"
                id="todoTitle"
                placeholder="Todo Title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
              />
            </div>

            <div className="col-lg-4">
              <input
                type="text"
                className="form-control"
                id="todoDesc"
                placeholder="Todo Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
                
              >
                Add Todo
              </button>
            </div>
          </div>
        </div>
    );
};

export default Todos;
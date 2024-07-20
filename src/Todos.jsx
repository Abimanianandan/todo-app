import React from 'react';

const Todos = ({addTodoData,title,setTitle,description,setDescription,titleError,setTitleError,descriptionError,setDescriptionError}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError('');
    setDescriptionError('');
    let isValid = true;
    if (title.trim() === '') {
      setTitleError('Title is required');
      isValid = false;
    }
    if (description.trim() === '') {
      setDescriptionError('Description is required');
      isValid = false;
    }

    if (isValid) {
      addTodoData(title, description);
      setTitle('');
      setDescription('');
    }
   
  };
    return (
        <div>
            <div className="row">
            <div className="col-lg-4 mb-3">
              <input
                type="text"
                className="form-control"
                id="todoTitle"
                placeholder="Todo Title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                required
              />
               {titleError && <p className="text-danger">{titleError}</p>}
            </div>

            <div className="col-lg-4 mb-3">
              <input
                type="text"
                className="form-control"
                id="todoDesc"
                placeholder="Todo Description"
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
                required
              />
              {descriptionError && <p className="text-danger">{descriptionError}</p>}
            </div>
            <div className="col-auto mb-3">
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
import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import Card from "./Card";
import Todos from "./Todos";

const App = () => {
  const [cart, setCart] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [view, setView] = useState("all");
  const [filteredTodo, setFilteredtodo] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [edit,setEdit]=useState(false);
  const[editId,setEditId]=useState(-1)

  const addTodoData = (newTitle, newDescription) => {
    console.log(edit);
    if(!edit){
      let newData = {
        id: cart.length + 1,
        title: newTitle,
        description: newDescription,
        completed: false,
      };
      setCart([...cart, newData]);
    }
    else {
      console.log(editId);
      const updatedCart = cart.map(item => {
        if (item.id === editId) {
          return { ...item, title: newTitle, description: newDescription };
        } else {
          return item;
        }
      });
      console.log(updatedCart); 
      setCart(updatedCart);
      setEdit(false)
    }
  
  };
  function handleEdit(id, newTitle, newDescription){
   setEditId(id)
   setTitle(newTitle)
   setDescription(newDescription)
    setEdit(true)
    ;
  };
 
  
  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  function toggleComplete(id) {
    setCart(
      cart.map((item, index) => ({
        key: index,
        ...item,
        completed: item.id === id ? !item.completed : item.completed,
      }))
    );
  }

  function changeView(e) {
    setView(e.target.value);
  }
  useEffect(() => {
    if (view === "all") {
      setFilteredtodo(cart);
    } else if (view === "completed") {
      setFilteredtodo(cart.filter((todos) => todos.completed === true));
    } else {
      setFilteredtodo(cart.filter((todos) => todos.completed === false));
    }
  }, [view, cart]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="myTodo mt-3">My todo</h1>
          </div>
          <div className="row">
            <Todos
              addTodoData={addTodoData}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              titleError={titleError}
              setTitleError={setTitleError}
              descriptionError={descriptionError}
              setDescriptionError={setDescriptionError}
              view={view}
              completed={completed}
              setCompleted={setCompleted}
            />
          </div>
        </div>
      </div>
      <FilterBar changeView={changeView} />
      <div className="card-group">
        {filteredTodo.map((item, index) => {
          return (
            <div key={index}>
              <Card
                item={item}
                handleDelete={handleDelete}
                toggleComplete={toggleComplete}
                setCart={setCart}
                title={title}
                description={description}
                setTitle={setTitle}
                setDescription={setDescription}
                edit={edit}
                setEdit={setEdit}
                handleEdit={()=>handleEdit(item.id, item.title, item.description)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

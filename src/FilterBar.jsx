import React from "react";

const FilterBar = ({ changeView}) => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary m-5">
        <div className="container-fluid">
          <h3>My Todos</h3>
          <form className="d-flex" role="search">
            <h3>Set Filter:</h3>
            <select className="filter bg-info fs-4"  onChange={changeView}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default FilterBar;

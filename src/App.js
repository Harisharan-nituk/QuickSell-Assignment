import React, { useState } from "react";
import displayIcon from "./icons_FEtask/Display.svg";
import downIcon from "./icons_FEtask/down.svg";
import "./App.css";

import { filterTickets } from "./assets/SortUtil";
import KanbanBoard from "./component/KanbanBoard";

function App() {
  const [grouping, setGrouping] = useState("status"); // default group by "status"
  const [sorting, setSorting] = useState("priority"); // default sort by "priority"

  // Handle filter changes
  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  // Fetch filtered and sorted data
  const data = filterTickets(grouping, sorting);

  return (
    <div className="App">
      {/* Filter Controls */}
      <div className="Filter">
        <img src={displayIcon} alt="Display Icon" />
        <h5>Display</h5>
        <img src={downIcon} alt="Down Icon" />

        <div className="Filter-Container">
          {/* Grouping Filter */}
          <div className="Filter-Container-Item">
            <p>Group by:</p>
            <select value={grouping} onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          {/* Sorting Filter */}
          <div className="Filter-Container-Item">
            <p>Sort by:</p>
            <select value={sorting} onChange={handleSortingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>

      {/* KanbanBoard component with filtered and sorted data */}
      <KanbanBoard data={data} />
    </div>
  );
}

export default App;

import React from "react";
import Card from "./Card";
// import {icon} from "../icons_FEtask/"
const KanbanBoard = ({ data = {} }) => {
  return (
    <div className="kanban-board">
      {Object.keys(data).map((groupKey) => (
        <div key={groupKey} className="kanban-column">

          <h3 className="group">{groupKey}</h3>

          {data[groupKey].length > 0 ? (
            data[groupKey].map((item, index) => (
              
              <div key={item.id || index} className="section-item">
                <Card item={item} />
               
              </div>
            ))
          ) : (
            <p>
              
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;

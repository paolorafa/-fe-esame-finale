import React from "react";


function TableInfo({name, value}) {

    


  return (
    <>
      <div className="table-container">
        <div className="fixed-column">
          <div className="table-row">
            <div className="table-cell">{name}:{value}</div>
          </div>
        
        </div>
      </div>
    </>
  );
}

export default TableInfo;

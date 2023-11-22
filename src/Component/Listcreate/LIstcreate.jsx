import React from "react";
import "./Listcreate.css"

const ComponentTab = ({ list, handle }) => {
     return (
          <>
               <div className="tablist">
                    <ul>
                         <li onClick={handle}>{list}</li>
                    </ul>
               </div>
          </>
     );
};
export default ComponentTab;

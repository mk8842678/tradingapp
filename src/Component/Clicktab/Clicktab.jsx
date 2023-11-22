import React from "react";
import "./Clicktab.css"



const Clicktab = ({ list, handelclick, activecolor }) => {
     return (
          <>
               < div className="list" >
                    <ul>
                         <li onClick={handelclick} className={activecolor}>{list}</li>
                    </ul>
               </div >

          </>
     )



}
export default Clicktab
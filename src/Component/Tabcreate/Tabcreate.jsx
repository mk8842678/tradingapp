import React, { useEffect, useState } from "react";
import "./Tabcreate.css"
import ComponentTab from "../Listcreate/LIstcreate";



// import "./index.css";


const Tabcreate = () => {
     const [data, setData] = useState("aboutlist");

     const handler = (event) => {
          setData(event);
     };
     //   console.log(data);

     // useEffect(() => {
     //      console.log(data);

     // }, [])

     return (
          <>
               <div className="tab">
                    <div className="list-wrap">
                         <ComponentTab handle={() => handler("aboutlist")} list="ABOUT" />
                         <ComponentTab handle={() => handler("selectlist")} list="SELECT" />
                         <ComponentTab handle={() => handler("contactlist")} list="CONTACT" />
                    </div>
                    {data === "aboutlist" && (
                         <div className="first">
                              useState is React Hook that allows you to add state to a functional
                              component. It returns an array with two values: the current state
                              and a function to update it. The Hook takes an initial state value
                              as an argument and returns an updated state value whenever the
                              setter function is called.
                         </div>
                    )}
                    {data === "selectlist" && (
                         <div className="second">

                              React makes it easier to create interactive UI using components and
                              efficiently manage states of those components. Multiple components
                              can be composed together to make complex applications without losing
                              their state in DOM.
                         </div>
                    )}
                    {data === "contactlist" && (
                         <div className="third">
                              React makes111 it easier to create interactive UI using components and
                              efficiently manage states of those components. Multiple components
                              can be composed together to make complex applications without losing
                              their state in DOM.
                         </div>
                    )}
               </div>
          </>
     );
};
export default Tabcreate;
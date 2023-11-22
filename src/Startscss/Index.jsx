import React, { useEffect, useState } from "react";
import Styles from "./Learn.module.scss"
const Practice = () => {

     const [data, getdata] = useState([])
     const [show, setshowdata] = useState([])
     const [modal, showmodaal] = useState(false)


     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch(
                         "https://countriesnow.space/api/v0.1/countries/flag/images"
                    );
                    const data = await response.json();
                    getdata(data.data);
               } catch (error) {
                    console.log(error);
               }
          };
          fetchData();
     }, []);

     const showimage = (name) => {
          const storedata = data.filter((item) => item.name === name)
          setshowdata(storedata[0].flag)
          // console.log(name);
          // console.log(storedata[0].flag);
          showmodaal(true)
     }
     const cutmodaal = () => {
          showmodaal(false)
     }

     // console.log(data);
     return (
          <>
               {
                    modal && (
                         <div className={Styles.container}>
                              <div className={Styles.container__modaal}>
                                   <img src={show} alt="error" />
                                   <span onClick={cutmodaal}>X</span>
                              </div>
                         </div>
                    )
               }
               <table>
                    <thead>
                         <tr>
                              <th>S.no</th>
                              <th>Name</th>
                              <th>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((item, index) => {
                                   return (
                                        <tr>
                                             <td>{index + 1}</td>
                                             <td>{item.name}</td>
                                             <td>
                                                  <button onClick={() => showimage(item.name)}>flag</button>
                                             </td>
                                        </tr>
                                   )
                              })
                         }
                    </tbody>
               </table>
          </>
     )
}
export default Practice
import React, { useState } from "react";
import "./Data.css"
import countydata from "../../Component/data.json"


const Data = () => {
     const [storedata, setstoredata] = useState([])
     // console.log(countydata);

     const optionchange = (e) => {
          const { value } = e.target;

          if (value) {
               let filterdata = countydata.filter((item) => item.name === value)
               setstoredata(filterdata[0].cities)
          } else {
               setstoredata([])
          }
     }
     return (
          <>
               <select onChange={optionchange}>
                    <option value="">select Country</option>
                    {
                         countydata.map((item) => {
                              return (
                                   <option>{item.name}</option>
                              )
                         })
                    }
               </select>


               {!!storedata.length && <select>
                    <option>city</option>
                    {storedata.map((item) => <option>{item}</option>)}

               </select>}



          </>

     )
}
export default Data
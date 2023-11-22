import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import "./Creat.css"


const Create = () => {
     const [selectedIndex, setSelectedIndex] = useState()
     const [inputs, setInputs] = useState({
          name: "",
          email: "",
          phone: ""
     })
     const handlerChanger = (e) => {
          setInputs({
               ...inputs, [e.target.name]: e.target.value
          })
     }
     const [storeData, getStoreData] = useState([])
     const [editclick, setediteclick] = useState(false)
     const submitHandler = (e) => {
          e.preventDefault()
          getStoreData([...storeData, inputs])
          setInputs({
               name: "",
               email: "",
               phone: ""
          })
     }

     const deleteBtn = (index) => {
          let remainingItem = storeData.filter((item, ind) => ind !== index)
          getStoreData(remainingItem)
     }

     const handeledit = (index) => {
          const editedata = storeData[index]
          setInputs({
               name: editedata.name,
               email: editedata.email,
               phone: editedata.phone,
          })
          setSelectedIndex(index)

     }
     const updateBtn = () => {
          const remainData = [...storeData]
          remainData[selectedIndex] = inputs
          getStoreData(remainData)
          setInputs({
               name: "",
               email: "",
               phone: ""
          })

     }
     return (
          <>
               <div className="inputField">
                    <form onSubmit={submitHandler}>
                         <div className="inputSection">
                              <label>Name:-</label><br />
                              <input name="name" value={inputs.name} onChange={handlerChanger} />
                         </div>
                         <div className="inputSection">
                              <label>Email:-</label><br />
                              <input name="email" value={inputs.email} onChange={handlerChanger} />
                         </div>
                         <div className="inputSection">
                              <label>MobileNumber:-</label><br />
                              <input type="number" name="phone" value={inputs.phone} onChange={handlerChanger} />
                         </div>
                         <button type="submit">Add</button>
                    </form>
                    <button onClick={updateBtn}>Update</button>
               </div>
               <table>
                    <thead>
                         <tr>
                              <th>S.NO</th>
                              <th>NAME</th>
                              <th>EMAIL</th>
                              <th>MOBILE-NO</th>
                              <th>ACTION</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              storeData.map((item, index) => {
                                   return (
                                        <tr>
                                             <td>{index + 1}</td>
                                             <td>{item.name}</td>
                                             <td>{item.email}</td>
                                             <td>{item.phone}</td>
                                             <td><button onClick={() => handeledit(index)}>Edit</button><button onClick={() => deleteBtn(index)}>Delete</button></td>
                                        </tr>
                                   )
                              })
                         }
                    </tbody>
               </table>
          </>
     )
}
export default Create
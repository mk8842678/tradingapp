import React, { useState } from "react";
import useCounter from "../Customhook/useCounter";


const Crud = () => {
     const { count, increamentBtn, decreamentBtn } = useCounter(10)
     const [selectedIndex, setSelectedIndex] = useState()
     const [storeData, getStoreData] = useState([])
     const [input, setInputs] = useState({
          name: "",
          email: "",
     })

     const handelinput = (e) => {
          setInputs({
               ...input, [e.target.name]: e.target.value

          })
     }

     const submithandel = (e) => {
          e.preventDefault()
          getStoreData([...storeData, input])
          setInputs({
               name: "",
               email: "",
          })
     }

     const handeldelete = (index) => {

          const deleteitem = storeData.filter((item, ind) => ind !== index)
          getStoreData(deleteitem)
     }

     const handeledit = (index) => {
          const remainingItem = storeData[index]
          setInputs({
               name: remainingItem.name,
               email: remainingItem.email
          })
          setSelectedIndex(index)

     }

     const updatehandel = () => {

          const updateitem = [...storeData]
          updateitem[selectedIndex] = input
          getStoreData(updateitem)

     }




     return (
          <>

               <p>{count}</p>
               <button onClick={increamentBtn}>increament</button>
               <button onClick={decreamentBtn}>decreament</button>

               <div className="inputfield">
                    <form onSubmit={submithandel}>
                         <div className="inputsec">
                              <label >name:-</label><br />
                              <input name="name" value={input.name} onChange={handelinput} />
                         </div>
                         <div className="inputsec">
                              <label >email:-</label><br />
                              <input name="email" value={input.email} onChange={handelinput} />
                         </div>
                         <button type="submit">add</button>
                    </form>
                    <button onClick={updatehandel}>update</button>
               </div>


               <table>
                    <thead>
                         <tr>
                              <th>s.no</th>
                              <th>name</th>
                              <th>email</th>
                              <th>action</th>
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
                                             <td><button onClick={() => handeledit(index)}>edit</button>
                                                  <button onClick={() => handeldelete(index)}>delete</button>
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
export default Crud
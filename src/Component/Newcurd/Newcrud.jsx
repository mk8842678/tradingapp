import React, { useState } from "react";


const NewCrud = () => {
     const [selectedIndex, setSelectedIndex] = useState()
     const [storeData, setstoredata] = useState([])
     const [input, setInputs] = useState({
          name: "",
          email: ""
     })

     const handelinput = (e) => {
          setInputs({ ...input, [e.target.name]: e.target.value })
     }

     const handelsubmit = (e) => {
          e.preventDefault()
          setstoredata([...storeData, input])

     }

     const handeldelet = (index) => {
          const deletitem = storeData.filter((item, ind) => ind !== index)
          setstoredata(deletitem)

     }

     const handeledit = () => {
          const remainingItem = storeData[index]
          setInputs({
               name: remainingItem.name,
               email: remainingItem.email
          })
          setSelectedIndex(index)
     }
     return (
          <>
               <div className="inputfield">
                    <form onSubmit={handelsubmit}>
                         <div className="inputsec">
                              <label>name</label><br />
                              <input name="name" value={input.name} onChange={handelinput} />
                         </div>
                         <div className="inputsec">
                              <label>email</label><br />
                              <input name="email" value={input.email} onChange={handelinput} />
                         </div>
                         <button type="submit">add</button>
                    </form>

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
               </table>

               <tbody>
                    {
                         storeData.map((item, index) => {
                              return (
                                   <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                             <button onClick={() => handeledit(index)}>edit</button>
                                             <button onClick={() => handeldelet(index)}>delet</button>
                                        </td>

                                   </tr>
                              )
                         })
                    }

               </tbody>
          </>
     )
}
export default NewCrud
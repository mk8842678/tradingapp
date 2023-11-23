import React, { useState } from "react";
import Clicktab from "../Clicktab/Clicktab";
import "./UPstock.css"
import array from "../UPstock/db.json"
import Typewriter from "typewriter-effect"
// import { logDOM } from "@testing-library/react";



const Upstock = () => {

     /////////
     const [data, setData] = useState("list1")
     const [wishdata, setwishdata] = useState([])
     const [orderListid, setorderlist] = useState([])
     const [trade] = useState(array[0])

     const handeltab = (event) => {
          setData(event)
     }

     const wishlistbtn = (id) => {
          let remainData = wishdata.find((item) => item.id === id)
          let detail = trade.find((item) => item.id === id)
          if (remainData) {
               setwishdata(wishdata.filter((item) => item.id !== id))
          } else {
               setwishdata(wishdata.concat(detail))
          }
     }
     const watchlist = (id) => {
          let filterData = wishdata.filter((item) => item.id !== id)
          setwishdata(filterData)
     }

     const orderlistbtn = (id) => {
          let orderlist = orderListid.find((item) => item.id === id)
          let orderdetail = trade.find((item) => item.id === id)
          if (orderlist) {
               setorderlist(orderListid.filter((item) => item.id !== id))
          } else {
               setorderlist(orderListid.concat(orderdetail))
          }
     }

     const watchorderlistbtn = (id) => {
          let filterData = orderListid.filter((item) => item.id !== id)
          setorderlist(filterData)

     }

     return (
          <>
               <div className="stock-parent">
                    <div className="head">
                         <h2>
                              <Typewriter
                                   options={{
                                        strings: [
                                             "Welcome to ",
                                             "UpStock trading",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        typeSpeed: 200,
                                        deleteSpeed: 80,
                                   }}
                              />
                         </h2>
                    </div>
                    <div className="box" >
                         <Clicktab handelclick={() => handeltab("list1")} list="Stock" activecolor={data === "list1" ? "active" : ""} />
                         <Clicktab handelclick={() => handeltab("list2")} list="Watchlist" activecolor={data === "list2" ? "active" : ""} />
                         <Clicktab handelclick={() => handeltab("list3")} list="Order" activecolor={data === "list3" ? "active" : ""} />
                    </div>
                    <div className="tablist1">
                         {data === "list1" && (
                              array[0]?.map((item, i) => {
                                   return (
                                        <>
                                             <div className="stock" key={item.id}>
                                                  <div className="stockname">
                                                       <h3>{item.name}</h3>
                                                       <p>{item.stockExchange}</p>
                                                  </div>
                                                  <div className="action">
                                                       <button onClick={() => wishlistbtn(item.id)} className={wishdata.find((ind) => ind.id === item.id) ? "activea" : ""}><i className="fa-solid fa-heart"></i></button>
                                                       <button onClick={() => orderlistbtn(item.id)} className={orderListid.find((ind) => ind.id === item.id) ? "activea" : ""}><i className="fa-solid fa-cart-shopping"></i></button>
                                                  </div>
                                                  <div className="price">
                                                       <p>₹{item.stockPrice}</p>
                                                       <span style={item.stockValueChange.includes("-") ? { color: "red" } : { color: "green" }}>₹{item.stockValueChange}</span>
                                                  </div>
                                             </div >
                                        </>

                                   )
                              })
                         )}
                    </div >
                    <div className="tablist2">
                         {data === "list2" && (
                              wishdata?.map((item) => {
                                   return (
                                        <>
                                             <div className="stock" key={item.id}>
                                                  <div className="stockname">
                                                       <h3>{item.name}</h3>
                                                       <p>{item.stockExchange}</p>
                                                  </div>
                                                  <div className="action">
                                                       <button style={{ color: "red" }} onClick={() => watchlist(item.id)}><i className="fa-solid fa-heart"></i></button>
                                                       <button><i className="fa-solid fa-cart-shopping"></i></button>
                                                  </div>
                                                  <div className="price">
                                                       <p>₹{item.stockPrice}</p>
                                                       <span>₹{item.stockValueChange}</span>
                                                  </div>
                                             </div>
                                        </>
                                   )
                              })
                         )}
                    </div>
                    <div className="tablist3">
                         {data === "list3" && (
                              orderListid?.map((item) => {
                                   return (
                                        <>
                                             <div className="stock">
                                                  <div className="stockname">
                                                       <h3>{item.name}</h3>
                                                       <p>{item.stockExchange}</p>
                                                  </div>
                                                  <div className="action">
                                                       <button><i className="fa-solid fa-heart"></i></button>
                                                       <button onClick={() => watchorderlistbtn(item.id)} style={{ color: "red" }}><i className="fa-solid fa-cart-shopping"></i></button>
                                                  </div>
                                                  <div className="price">
                                                       <p>₹{item.stockPrice}</p>
                                                       <span>₹{item.stockValueChange}</span>
                                                  </div>
                                             </div>
                                        </>
                                   )
                              })
                         )}
                    </div>
               </div >

          </>
     )
}
export default Upstock
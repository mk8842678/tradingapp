import React, { useState } from "react";
const useCounter = (initialValue) => {
     const [count, setcount] = useState(initialValue)
     const increamentBtn = () => {
          setcount((formalValue) => formalValue + 4)
     }

     const decreamentBtn = () => {
          setcount((formalNumber) => formalNumber - 2)
     }
     return { count, increamentBtn, decreamentBtn }

}
export default useCounter
/* eslint-disable react/prop-types */
import { useState, createContext} from "react";
import {Tooltip} from 'bootstrap';
// import { useRef } from "react/ts5.0";

export const ClientContext = createContext(null);

export const ClientProvider = ({children}) => {
  const [isLoggedIn, setIslogged] = useState(true);
  // const toolTipRef = useRef();

//   useEffect(() => {
//     var tooltip = new Tooltip(toolTipRef.current, {
//         title: "This is the tooltip content!",
//         placement: 'right',
//         trigger: 'hover'
//     })
// })
const displayTooltip = (tipRef)=>{
  new Tooltip(tipRef?.current, {
            title: "This is the tooltip content!",
            placement: 'right',
            trigger: 'hover'
        })
}

  return (
    <ClientContext.Provider value={{ isLoggedIn,displayTooltip }}>
      {children}
    </ClientContext.Provider>
  );
};
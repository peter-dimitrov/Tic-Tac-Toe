import React, { useEffect, useState } from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { IoIosArrowDropright, IoIosArrowDropleft, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Deleteable from "./Deleteable.js"

const Deleteables = ({clearAllData, histItems}) => {

  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };

  const ArrowLeft = <div className = "circle"><IoIosArrowBack className = "arrowLeft"/></div>
  const ArrowRight = <div className = "circle"><IoIosArrowForward className = "arrowRight"/></div>
  
  var menu = histItems.map((title, id) => {
    return (
      <Deleteable
      clearAllData = {clearAllData}
      key = {id}
      id = {id}
      title = {title}/>
    );
  });

    return(
        <div className = "deleteables">
        Click on an item to clear all its data.
        <div className = "deleteablesScroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          dragging = {false}
        />
        </div>
        </div>
    )
  }

  export default Deleteables;

// import React, { useEffect, useState } from "react";
// import ScrollMenu from 'react-horizontal-scrolling-menu';
// import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
// import HistItem from "./HistItem.js"
// import Deleteable from "./Deleteable.js"


// const Deleteables = ({VscChromeClose, addHistItem, histItems, currItems, deleteHistItem}) => {

//   const Arrow = ({ text, className }) => {
//     return (
//       <div
//         className={className}
//       >{text}</div>
//     );
//   };

//   const ArrowLeft = <TiChevronLeft className = "arrowLeft"/>
//   const ArrowRight = <TiChevronRight className = "arrowRight"/>
  
//   var menu = histItems.map((title, id) => {
//     return (
//       <Deleteable
//       deleteHistItem = {deleteHistItem}
//       VscChromeClose = {VscChromeClose}
//       className = "histItem"
//       addHistItem = {addHistItem}
//       key = {id}
//       id = {id}
//       addHistItem = {addHistItem}
//       title = {title}/>
//     );
//   });

//     return(
//         <div className = "histScroll">
//         <ScrollMenu
//           data={menu}
//           arrowLeft={ArrowLeft}
//           arrowRight={ArrowRight}
//           dragging = {false}
//         />
//         </div>
//     )
//   }

//     // const hist = histItems.map((title, id) => {
//     // if(!currItems.includes(title)){
//     // return(<HistItem deleteHistItem = {deleteHistItem} VscChromeClose = {VscChromeClose} className = "histItem" addHistItem = {addHistItem} key = {id} id = {id} title = {title}/>)
//     // }
//     // })

//   export default Deleteables;
import React, { useEffect, useState } from "react";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import RedHistItem from "./RedHistItem.js"
import HistItem from "./HistItem.js"
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
// import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDropright, IoIosArrowDropleft, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoArrowBack, IoArrowForward, IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";

const HistItems = ({addItemsAutomatically, running, setRedHistItems, objTimeLefts, redHistItems, VscChromeClose, addHistItem, histItems, currItems, deleteHistItem}) => {

  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };

  const ArrowLeft = <div className = "circle"><IoIosArrowBack className = "arrowLeft"/></div>
  const ArrowRight = <div className = "circle"><IoIosArrowForward className = "arrowRight"/></div>

  var checkItems = []
  for (var i = 0; i < histItems.length; i++) {
    if(!currItems.includes(histItems[i])){
      checkItems.push(histItems[i])
    }
  }

  console.log('objTimeLefts', objTimeLefts)

  var menu = checkItems.map((title, id) => {
    return (
      <HistItem
      addItemsAutomatically = {addItemsAutomatically}
      passed = {objTimeLefts[title] <= 0 && addItemsAutomatically ? 'histTester' : 'histItem'}
      redHistItems = {redHistItems}
      deleteHistItem = {deleteHistItem}
      VscChromeClose = {VscChromeClose}
      objTimeLefts = {objTimeLefts}
      key = {title}
      id = {id}
      addHistItem = {addHistItem}
      title = {title}/>
    );
  });

    return(
        <div className = "histScroll">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          dragging = {false}
        />
        </div>
    )
  }

    // const hist = histItems.map((title, id) => {
    // if(!currItems.includes(title)){
    // return(<HistItem deleteHistItem = {deleteHistItem} VscChromeClose = {VscChromeClose} className = "histItem" addHistItem = {addHistItem} key = {id} id = {id} title = {title}/>)
    // }
    // })

  export default HistItems;
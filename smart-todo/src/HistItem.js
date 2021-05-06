import React, { useEffect, useState } from "react";

const HistItem = ({addItemsAutomatically, passed, objTimeLefts, redHistItems, deleteHistItem, VscChromeClose, addHistItem, title, id}) => {
    return(
      <div className = {passed} value = {title} title = {title} id = {id} onClick = {(e) => addHistItem(e)}>
      <div className = {objTimeLefts[title] <= 0 && addItemsAutomatically ? 'histTesterLabel' : 'histItemLabel'} value = {title} title = {title} id = {id} onClick = {(e) => addHistItem(e)}>
      {title}
      </div>
      </div>
    )
  }

  export default HistItem;
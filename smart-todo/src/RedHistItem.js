import React, { useEffect, useState } from "react";

const RedHistItem = ({deleteHistItem, VscChromeClose, addHistItem, title, id}) => {
    return(
      <div className = "redhistitem" value = {title} title = {title} id = {id} onClick = {(e) => addHistItem(e)}>
      <div className = "histItemLabel" value = {title} title = {title} id = {id} onClick = {(e) => addHistItem(e)}>
      {title}
      </div>
      </div>
    )
  }

  
  export default RedHistItem;
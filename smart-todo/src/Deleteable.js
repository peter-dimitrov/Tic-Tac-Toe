import React, { useEffect, useState } from "react";

const Deleteable = ({clearAllData, title, id}) => {
    return(
      <div className = "deleteable" value = {title} title = {title} id = {id} onClick = {(e) => clearAllData(e, title)}>
      <div className = "deleteableItemLabel" value = {title} title = {title} id = {id} onClick = {(e) => clearAllData(e, title)}>
      {title}
      </div>
      </div>
    )
  }

  
  export default Deleteable;
import React, {useState, useEffect} from 'react'


const Header = ({numItems}) => {
    return(
      <div className = "header">
        You have {numItems} items on your grocery list
      </div>
    )
    }


    export default Header;
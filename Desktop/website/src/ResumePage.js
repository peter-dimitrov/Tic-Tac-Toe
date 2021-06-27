import React from 'react';
import { Link } from "react-router-dom";


class ResumePage extends React.Component {
    render(){
        return(
        <div align = "center">
            <Page/>
            <Navbar/>
        </div>
        )
    }
}

const Page = () => {
    return(
        <div align = "center">
        <header style = {{margin: 50}}>Resume</header>
        <iframe src="./Peter_R_Dimitrov_Resume-converted.pdf" width = "800" height = "1200"/>
        </div>
    )
}


function Navbar() {
    return (
      <div>
        <Link to="/">Home</Link>
      </div>
    );
  };

export default ResumePage;
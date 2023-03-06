import React from "react";
import Profile from "./Profile";



const About1 = () => {
  return (
    <div className="bg-green-200 min-h-screen">About</div>
  )
}

class About extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name : "React",
      topic : "class based component",
    }
    console.log("About Constructor");
  }

  componentDidMount(){
    console.log("About componentDidMount");

  }

  componentDidUpdate(){
    console.log("About componentDidUpdate");
  }


  render(){
    console.log("About render");

    return(
      <div className="bg-green-200 min-h-screen">
        <h1>About page</h1>
        <Profile name={this.state.name}/>
       
      </div>
    );
  }
}

export default About;
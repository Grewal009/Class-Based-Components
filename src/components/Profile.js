
import React from 'react';


const Profile1 = () => {
  return (
    <div>Profile</div>
  )
}

class Profile extends React.Component{
  constructor(props){
    super(props);
    console.log("Profile Constructor");
  }

  componentDidMount(){
    console.log("Profile componentDidMount");
    this.timer = setInterval(()=>{console.log("Profile component")},1000);
  }

  componentDidUpdate(){
    console.log("Profile componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("Profile componentWillUnmount");
    clearInterval(this.timer);
  }

  render(){
    console.log("Profile render");
    return(
      <div>
        <h1>Profile component</h1>
      </div>
    );
  }
}

export default Profile;
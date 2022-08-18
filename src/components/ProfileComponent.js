// import React from 'react'

// const ProfileComponent = (props) => {
//     return (
//         <div>
//             <h1>Profile Dumb Component</h1>
//             <h1>{props.hello}</h1>
//             <h1>{props.example}</h1>
//             {/* test to see if it works no other bugs */}
//             {/* show user or not show not defined */}
//             <h1>{props.user || "not defined"}</h1>
//             {/* array mapped over */}
//             {props.cars.map((car, index) => {
//                 return (
//                     <h2 key={index}>{car}</h2>
//                 )
//             })}
//         </div>
//     )
// }

// export default ProfileComponent

// change to class based component 
// since we are using form we need state

import React, { Component } from 'react';


class ProfileComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        newCar: ""
    }

  }

  handleChange = (e) => {
     this.setState({
        newCar: e.target.value
   })
}

handleSubmit = (e) => {
e.preventDefault();
 
    this.props.addCar(this.state.newCar)
 
    this.setState({
        newCar: " "
  })
}


  render() {
    return (
      <div>
        <h1>Add a new Car</h1>
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type='text' value={this.state.newCar} onChange={e => this.handleChange(e)} />
        <input type='submit' />
      </form>
        {this.props.cars.map((car, index) => {
            return (
                <h2 key={index}>{car}</h2>
            )
        })}
      </div>
    )
  }
}

export default ProfileComponent


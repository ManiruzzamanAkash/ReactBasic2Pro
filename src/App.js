import React from 'react';

class App extends React.Component{

  state = {
    name : "Akash",
    level: 'Intemediate',
    age: 26,
    address: {
      house: '87/ka',
      city: 'Dhaka'
    },
    prorgammings: ['Java', 'JavaScript', 'PHP']
  }
  
  componentDidMount() {
    console.log('enter componentDidMount() :>> ');

    console.log('name', this.state.name);
    console.log('age', this.state.age);
    console.log('Address - City', this.state.address.city);
    console.log('Address - House', this.state.address.house);

    console.log('programming 1', this.state.prorgammings);
  }

  changeLevel = () => {
    if(this.state.level === 'Intemediate'){
      this.setState({
        level : 'Advanced'
      })
    }else{
      this.setState({
        level : 'Intemediate'
      })
    }
  }
  
  render(){
    console.log('enter render ');
    return (
      <>
        <h2>Class 1</h2>
        <hr/>
        <h3>Name: {this.state.name}</h3>
        <h3>Level: <mark>{this.state.level}</mark></h3>
        <h5>Age: {this.state.age}</h5>
        <h5>Address:</h5>
        <address>
          House: {this.state.address.house} <br />
          City: {this.state.address.city} <br />
        </address>
        <h5>Favorite Programmings: </h5>
        {
          this.state.prorgammings.map((programming, index) => (
            <li key={index}>{programming}</li>
          ))
        }
        <button onClick={this.changeLevel}>
          Change Level
        </button>
      </>
    )
  }
}

export default App;
import React from 'react';
import './App.css';


const App = () =>(<PersonList/>)

const PersonList = () => {
  const people = [
    {
      img:22,name:'Jhon',job:'developer'
    },
    {
      img:34,name:'Bob',job:'Designer'
    },
    {
      img:56,name:'Peter',job:'Artist'
    }

  ]
  return(
    <section>
      <Person person={people[0]}></Person>
      <Person person={people[1]}></Person>
      <Person  person={people[2]}></Person>
    </section>

    
    )
  }
  
const Person = props => {

    const {img,name,job} = props.person;
    console.log(props)
    const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`

    return(
    <div className="person">
      <img src={url} alt=""/>
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
      </div>
    </div>
    )
  }


export default App;

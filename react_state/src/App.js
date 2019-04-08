import React, { Component } from 'react';
import './App.css';

const persons = [{
  firstname: 'harry',
  lastname: 'potter',
  image: 'harry',
  job: 'wizard',
  type: 'student',
}, {
  firstname: 'hermione',
  lastname: 'granger',
  image: 'hermione',
  job: 'wizard',
  type: 'student',
}, {
  firstname: 'ron',
  lastname: 'weasley',
  image: 'ron',
  job: 'wizard',
  type: 'student',
}, {
  firstname: 'hagrid',
  lastname: 'rubeus',
  image: 'hagrid',
  job: 'professor',
  type: 'prof',
}, {
  firstname: 'albus',
  lastname: 'dumbledore',
  image: 'albus',
  job: 'headmaster',
  type: 'prof',
}, {
  firstname: 'severus',
  lastname: 'snape',
  image: 'severus',
  job: 'professor',
  type: 'prof',
}, {
  firstname: 'tom',
  lastname: 'riddle',
  image: 'tom',
  job: 'bad guy',
  type: 'student',
}, {
  firstname: 'drago',
  lastname: 'malefoy',
  image: 'drago',
  job: 'cunt',
  type: 'student',
}, {
  firstname: 'dolores',
  lastname: 'umbridge',
  image: 'dolores',
  job: 'bad girl',
  type: 'prof',
}];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [...persons],
    }
  }

  showAllStudents = () => {
    this.setState({
      students: [...persons],
    });
  }

  showLessStudents = () => {
    const students = this.state.students.slice(0, 3);
    this.setState({
      students: students
    });
  }

  render() {
    const students = this.state.students;
    const nbStudents = students.length;
    return (
      <div className="App">
        <ul>
          {
            students.map(person => (
              <li>{person.firstname}</li>
            ))
          }
        </ul>
        <button className={(nbStudents > 3) ? 'hidden' : '' } onClick={this.showAllStudents}>Show All</button>
        <button className={(nbStudents === 3) ? 'hidden' : '' } onClick={this.showLessStudents}>Show 3</button>
      </div>
    );
  }
}

export default App;

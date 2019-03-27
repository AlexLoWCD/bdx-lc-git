import React, { Component } from 'react';
import Student from './Student';
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

class Students extends Component {
  render() {
    return(
      <div className="Students">
        {
          persons.map(student => (<Student student={student} />))
        }
      </div>
    )
  }
}

export default Students;


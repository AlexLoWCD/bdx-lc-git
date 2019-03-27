import React, { Component } from 'react';
import './Student.css';

class Student extends Component {
  render() {
    const { lastname, firstname, job, image } = this.props.student;
    return (
      <a className="Student" href="#">
        <div className="photo">
          <img src={image} />
        </div>
        <div className="name">
          <span className="lastname">{lastname}</span>
          <span className="firstname">{firstname}</span>
          <span className="job">{job}</span>
        </div>
      </a>
    )
  }
}

export default Student;
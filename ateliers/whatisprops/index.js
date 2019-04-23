const root = document.getElementById('root');
// createElement
// appendChild

function createStudent(name) {
  const student = document.createElement('li');
  student.classList = 'Student'
  student.textContent = `Student ${name}`;
  return student;
}

const students = document.createElement('ul');
students.appendChild(createStudent('John', 25));
students.appendChild(createStudent('Marie'));
students.appendChild(createStudent('Joseph'));
students.appendChild(createStudent('Bernard'));

root.appendChild(students);

// class Student 
// render() {
//   return (
//     <li className="Student">
//        Element
//      </li>
//   )
// }

// class Students
// render() {
//   return (
//     <ul>
//       <Student />
//     </ul>
    
//   )
// }

import React, {Component} from 'react';

class Temp extends Component {
  resize() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    console.log('je vais être détruit :(');
    window.removeEventListener('resize', this.resize);
  }
  render() { 
    return ( <div>Coucou</div> );
  }
}

export default Temp;
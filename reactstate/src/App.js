import React, { Component } from 'react';
import Pic from './Pic.jpg'

class App extends Component {
  state = {
    person: {
      fullName: 'BEN KHALIFA Dhoha',
      bio: 'I m a fullstack react js developper',
      imgSrc: Pic,
      profession: 'Developer'
    },
    shows: false,
    mountTime: 0
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({ mountTime: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  toggleShow = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  }

  render() {
    const { person, shows, mountTime } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {shows && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Component mounted at {new Date(mountTime).toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;

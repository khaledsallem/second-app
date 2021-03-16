import React from 'react';
import Profil from './Components/Profil';
import FullName from './Components/FullName';
import Adress from './Components/Adress';
import Count from './Components/Count';
import './App.css';
import "./Styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }


  render() {
    return (
      <div className="App">
          <div>
            {
              this.state.show ? <div>
                <Profil />

                <FullName />

                <Adress />

                <Count />

              </div> : null
            }
            <button onClick={() => { this.setState({ show: !this.state.show }) }}>{this.state.show ? 'Hide' : 'Show'} Div</button>
          </div>
      </div>
    );
  }
}
export default App;

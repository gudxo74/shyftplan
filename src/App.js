import React, { Component } from 'react';
import './App.css';
import 'toastr/build/toastr.min.css';
import Calendar from './Containers/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span>
              Hyeongtae Kim Event Scheduler
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;

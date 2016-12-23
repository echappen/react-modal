import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';

// ModalTrigger is an example of a purely functional component.

// You can pass components as props
// since they are essentially objects.

// Making the modal trigger a component
// makes the modal re-usable pretty much anywhere.
// Trigger can be a button, hyperlink, whatever you want.

const ModalTrigger = (props) =>
  <div><button>{props.text}</button></div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Example Modal</h2>

          <Modal
            trigger={<ModalTrigger text="open modal"/>}
            onOpen={ () => { console.log("open") } }
            onClose={ () => { console.log("close") } }>
            <h1>Example Modal</h1>
            <p>Semiotics 90's banh mi prism. Narwhal snackwave microdosing bicycle rights fingerstache. Hexagon tattooed asymmetrical sartorial slow-carb, fashion axe craft beer kale chips artisan pitchfork. 8-bit fashion axe art party deep v, helvetica cornhole edison bulb bicycle rights. Copper mug fap photo booth, succulents poutine woke bespoke semiotics keytar YOLO celiac church-key man bun mixtape. Tofu 90's trust fund portland. Mumblecore gentrify fixie humblebrag, raclette echo park microdosing typewriter tote bag af slow-carb craft beer.</p>
          </Modal>

        </div>
        <p className="App-intro">
          Check out <code>src/App.js</code> for use of the modal component.
        </p>
      </div>
    );
  }
}

export default App;

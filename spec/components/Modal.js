/**
 * Created by denvey on 16/4/26.
 */
import React, { PropTypes } from 'react';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';

class ModalTest extends React.Component {
  state = {
    alert: false,
    confirm: false,
    prompt: false
  };

  handleToggle = () => {
    this.setState({
      alert: !this.state.alert
    });
  };

  handleToggleConfirm = () => {
    this.setState({
      confirm: !this.state.confirm
    });
  };

  handleTogglePrompt = () => {
    this.setState({
      prompt: !this.state.prompt
    });
  };

  handleAlert = () => {
    this.setState({
      alert: true,
      confirm: false
    });
  };

  render() {
    let alertData = {
      text: "Hello",
      title: "Reui",
      buttons: [{text: "Ok", bold: true, onClick: this.handleToggle}]
    };
    let confirmData = {
      text: "Are you feel good today?",
      title: "Reui",
      buttons: [
        {text: "Cancel", onClick: this.handleToggleConfirm},
        {text: "OK", bold: true, onClick: this.handleAlert}
      ]
    };

    let promptData = {
      title: "Reui",
      text: "What is your name?",
      buttons: [
        {text: "Cancel", onClick: this.handleTogglePrompt},
        {text: "OK", bold: true, onClick: this.handleTogglePrompt}
      ]
    };

    return (
      <section>
        <h5>Modal</h5>
        <p>lorem ipsum...</p>
        <Button onClick={this.handleToggle}>Alert</Button>
        <Modal
          {...alertData}
          active={this.state.alert}
          onOverlayClick={this.handleToggle}
          onEscKeyDown={this.handleToggle}
        >
          Let Google help apps
        </Modal>
        <Button onClick={this.handleToggleConfirm}>Confirm</Button>
        <Modal
          {...confirmData}
          active={this.state.confirm}
        >
          Let Google help apps
        </Modal>

        <Button onClick={this.handleTogglePrompt}>Propmt</Button>
        <Modal
          {...promptData}
          active={this.state.prompt}
          onOverlayClick={this.handleTogglePrompt}
          onEscKeyDown={this.handleTogglePrompt}
        >
          <div className="input-field">
            <input type="text" className="modal-text-input" />
          </div>
        </Modal>
      </section>
    );
  };
}

export default ModalTest;
/**
 * Created by denvey on 16/4/26.
 */
import React, { PropTypes } from 'react';
import Button from '../../src/components/Button';
import Preloader from '../../src/components/Preloader';

class ModalTest extends React.Component {
  state = {
    loading: false
  };

  handleToggle = () => {
    this.setState({
      loading: !this.state.loading
    });

    /*setTimeout(() => {
      this.setState({
        loading: !this.state.loading
      });
    },1000)*/
  };

  render() {
    return (
      <section>
        <h5>Preloader</h5>
        <p>lorem ipsum...</p>
        <Preloader />
        <Preloader className="white" />
        <Button onClick={this.handleToggle}>Preloader</Button>
        {/*<Preloader
          active={this.state.loading}
          onOverlayClick={this.handleToggle}
          onEscKeyDown={this.handleToggle}
        />*/}
      </section>
    );
  };
}

export default ModalTest;
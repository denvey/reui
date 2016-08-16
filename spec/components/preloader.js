/**
 * Created by denvey on 16/4/26.
 */
import React, { PropTypes } from 'react';
import Button from '../../src/components/Button';
import { Preloader, Preloaders } from '../../src/components/Preloader';

class PreloaderTest extends React.Component {
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
        <div className="content-block row ks-preloaders">
          <div className="col-25">
            Default<br />
            <Preloader />
          </div>
          <div className="col-25" style={{'backgroundColor': '#222','color':'#fff'}}>
            White<br />
            <Preloader className="white" />
          </div>
          <div className="col-25">
            Default<br />
            <Preloader className="big" />
          </div>
          <div className="col-25" style={{'backgroundColor': '#222','color':'#fff'}}>
            White<br />
            <Preloader className="white big" />
          </div>
        </div>

        <Button onClick={this.handleToggle}>Open small indicator overlay</Button>
        <Preloaders
          type="indicator"
          active={this.state.loading}
          onOverlayClick={this.handleToggle}
          onEscKeyDown={this.handleToggle}
        />

        <Button onClick={this.handleToggle}>Open preloader modal</Button>
        <Preloaders
          type="modal"
          active={this.state.loading}
          onOverlayClick={this.handleToggle}
          onEscKeyDown={this.handleToggle}
        />

        <Button onClick={this.handleToggle}>Open custom preloader</Button>
        <Preloaders
          type="modal"
          title="My text"
          active={this.state.loading}
          onOverlayClick={this.handleToggle}
          onEscKeyDown={this.handleToggle}
        >
          <div href="">yilahe</div>
        </Preloaders>
      </section>
    );
  };
}

export default PreloaderTest;
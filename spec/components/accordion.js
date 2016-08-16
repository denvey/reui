/**
 * Created by denvey on 16/4/26.
 */
import React, { PropTypes } from 'react';
import {Accordion, Accordions} from '../../src/components/Accordion';

export default class AccordionTest extends React.Component {
  state = {
    index: 1
  };

  handleTabChange = (index) => {
    console.log(index);
  };

  handleActive = () => {
    console.log('Special one activated');
  };

  render() {
    return (
      <div className="page-content">
        <div className="content-block-title">List View Accordion</div>
        <div className="list-block accordion-list">
          <Accordions active={this.state.index} onChange={this.handleTabChange}>
            <Accordion
              header={
                <a href="#" className="item-link item-content">
                  <div className="item-inner">
                    <div className="item-title">Lorem Ipsum</div>
                  </div>
                </a>
              }
            >
              <div className="content-block">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
              </div>
            </Accordion>
            <Accordion
              header={
                <a href="#" className="item-link item-content">
                  <div className="item-inner">
                    <div className="item-title">Lorem Ipsum1</div>
                  </div>
                </a>
              }
            >
              <div className="content-block">
                <p>1Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </Accordion>
          </Accordions>
        </div>
      </div>
    );
  };
}

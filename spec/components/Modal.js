/**
 * Created by denvey on 16/4/26.
 */
import React, { PropTypes } from 'react';
import Button from '../../src/components/Button';
import Modal from '../../src/components/Modal';

class ModalTest extends React.Component {
    state = {
        active: false
    };

    handleToggle = () => {
        this.setState({
            active: !this.state.active
        });
    };

    render() {
        let modals = {
            text: "text",
            title: "title",
            buttons: [ {text: "确定", bold: true, onClick: this.handleToggle} ]
        };
        return (
            <section>
                <h5>Modal</h5>
                <p>lorem ipsum...</p>
                <Button onClick={this.handleToggle}>你好</Button>
                <Modal
                    {...modals}
                    active={this.state.active}
                    onOverlayClick={this.handleToggle}
                    onEscKeyDown={this.handleToggle}
                >
                    Let Google help apps
                </Modal>
            </section>
        );
    };
}

export default ModalTest;
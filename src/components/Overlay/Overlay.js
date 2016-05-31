import React, { PropTypes } from 'react';
import Portal from '../Hoc/Portal';
import classnames from 'classnames';
import style from './style';

export default class Overlay extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.string,
        invisible: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        onEscKeyDown: React.PropTypes.func
    };

    static defaultProps = {
        invisible: false
    };

    componentDidMount () {
        if (this.props.active) {
            this.escKeyListener = document.body.addEventListener('keydown', this.handleEscKey.bind(this));
        }
    }

    componentDidUpdate () {
        if (this.props.active && !this.escKeyListener) {
            this.escKeyListener = document.body.addEventListener('keydown', this.handleEscKey.bind(this));
        }
    }

    componentWillUnmount () {
        if (this.escKeyListener) {
            document.body.removeEventListener('keydown', this.handleEscKey);
            this.escKeyListener = null;
        }
    }

    handleEscKey (e) {
        if (this.props.active && this.props.onEscKeyDown && e.which === 27) {
            this.props.onEscKeyDown(e);
        }
    }

    render () {
        const classname = classnames({
            "modal-overlay":true,
            "modal-overlay-visible": this.props.active
        });
        return (
            <Portal>
                <div>
                    <div className={classname} onClick={this.props.onClick} />
                    {this.props.children}
                </div>
            </Portal>
        );
    }
}





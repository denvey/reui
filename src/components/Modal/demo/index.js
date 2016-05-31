/**
 * Created by denvey on 16/4/12.
 */
import React from 'react';
import Modal from '../Modal';

export default class DemoModal extends React.Component {

    state = {
        active: false
    };

    handleToggle = () => {
        this.setState({active: !this.state.active});
    }

    actions = [
        { label: "Cancel", onClick: this.handleToggle },
        { label: "Save", onClick: this.handleToggle }
    ];

    render() {
        const modal = {
            title: '标题',
            text: '内容',
            afterText: '将被放在"text"后的文本',
            buttons: [
                {
                    text: '确定'
                },
                {
                    text: '取消'
                }
            ],
            onClick: () => {
                this.setState({
                    overlay:{
                        visible: false
                    },
                    modal: {
                        visible: false
                    }
                })
            }
        }
        return (
            <div className="page-content">
                <div className="content-block">
                    <p><a href="#" className="alert-text" onClick={this.handleToggle}>Alert With Text</a></p>
                    <p><a href="#" className="alert-text-title">Alert With Text and Title</a></p>
                    <p><a href="#" className="alert-text-title-callback">Alert With Text and Title and Callback</a></p>
                    <p><a href="#" className="alert-text-callback">Alert With Text and Callback</a></p>
                </div>
                <Modal modal={modal}>
                    <p>你好</p>
                </Modal>
            </div>
        )
    }
}
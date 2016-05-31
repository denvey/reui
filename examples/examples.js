import React  from 'react';
import { Button, ButtonGroup }  from '../src/components';

//demo
import DemoModal from  '../src/components/Modal/demo/index'

export default class Examples extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlay: {
                visible: false
            },
            modal: {
                visible: false
            }
        };
    }

    handlerAlert(){
        this.setState({
            overlay:{
                visible: true
            },
            modal: {
                visible: true
            }
        });
    }

    handleClick(){
        console.log(1);
    }


    render() {
        return (
            <div>
                <div className="content-block">
                    <p>
                        <Button>Hello1</Button>
                    </p>
                    <p>
                        <Button active onClick={this.handleClick}>Hello</Button>
                    </p>
                    <p>
                        <Button className="nihao" type="round" size="big" color="green">Hello</Button>
                    </p>

                    <ButtonGroup>
                        <Button>Hello</Button>
                        <Button>Hello</Button>
                    </ButtonGroup>
                </div>
                <DemoModal />
            </div>
        );
    }
}
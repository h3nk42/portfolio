import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScrollSnap from "scroll-snap";
import ReactTypingEffect from 'react-typing-effect';

import { getRandomColor } from '@bit/joshk.jotils.get-random-color';

import ChevronDown from "./components/DownArrow";
import {get} from "bit-bin/dist/api/consumer/lib/global-config";


function callback() {
    console.log("snapped");
}

class App extends React.Component {
    container = React.createRef();
    helloRef = React.createRef();



    typingEffect = () => {
        return (
            <ReactTypingEffect
                text="Hello. My name is Henk and I study computer science!" //text=["Hello.", "World!"]
            />);
    };

    handleClick(event) {
        if (this.helloRef && this.helloRef.current) {
            this.helloRef.current.scrollIntoView();
        }
    }


    bindScrollSnap () {
        const element = this.container.current;
        const snapElement = new ScrollSnap(element, {
            snapDestinationY: "90%",
            time: true
        });

        snapElement.bind(callback);
    }

    componentDidMount() {
        this.bindScrollSnap();
    }

    render() {
        return (
            <div id="container" ref={this.container}>
                <div className="page first-page" id='myTarget'>
                    <div className='boxes boxesTop'>
                        <div className='box'>
                            <h1 style={{color: getRandomColor()} }>HENK</h1>
                        </div>
                        <div className='box'>

                        </div>
                        <div className='box'>
                            <h1>DER</h1>
                        </div>
                        <div className='box'>

                        </div>
                    </div>

                    <div className='boxes'>
                        <div className='box'>

                        </div>
                        <div className='box'>
                            <h1>VAN</h1>
                        </div>
                        <div className='box'>

                        </div>
                        <div className='box'>
                            <h1>SLOOT</h1>
                        </div>
                    </div>

                    <div className="scrolling">
                        {this.typingEffect()}
                    </div>

                    <div className="hint">
                        
                        </div>
                    <div className='ArrowDown'><ChevronDown></ChevronDown></div>

                </div>
                <div className="page second-page">
                    <div className='scrolling'>II</div>
                </div>
                <div className="page third-page">
                    <div className='scrolling'>III</div>
                </div>
                <div ref={this.helloRef} className="page fourth-page">
                    <div className='scrolling'>IV</div>
                    <div className="hint"><a className="link" href='#myTarget' >back up!</a></div>
                </div>
            </div>
        );
    }
}

export default App;

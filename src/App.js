import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTypingEffect from 'react-typing-effect';
import ScrollSnap from 'scroll-snap';

function callback() {
    console.log("snapped");
}

class App extends Component {
    container = React.createRef();
    constructor(props) {
        super(props);
        this.typingEffect = this.typingEffect.bind(this);
    }

    bindScrollSnap() {
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

    typingEffect = () => {
        return (
            <ReactTypingEffect
                text="Hello. My name is Henk and I study computer science!" //text=["Hello.", "World!"]
            />
        );
    };
    render() {

        return (


            <div className="App">
                <div id='container' ref={this.container}>
                    <header className="App-header">
                        <div className="UpLeftDiv" >
                            <h1>HENK</h1>
                        </div>
                        <div className="UpRightDiv" >
                            <h1>VAN</h1>
                        </div>
                        <div className="DownLeftDiv" >
                            <h1>DER</h1>
                        </div>
                        <div className="DownRightDiv" ></div>
                    </header>
                      <body className="App-body">
                          <div className="App-body-NameBlocks">
                              <div className="UpLeftDiv" > </div>
                              <div className="UpRightDiv" ></div>
                              <div className="DownLeftDiv" ></div>
                              <div className="DownRightDiv" >
                                  <h1>SLOOT</h1>
                              </div>
                          </div>

                          <div className='App-body-Text'>
                              {this.typingEffect()}
                          </div>

                      </body>
                    <div className='core' >

                    </div>
                </div>
            </div>
        )};
}

export default App;

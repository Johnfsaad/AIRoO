import React from 'react';
import '../../css/info.css';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-container">
                <div className="column">
                    <div className="container-small" style={{float:'left'}}>
                        <div className="mene">
                            <div className='mene-header'>
                                <h1>
                                    Long Pham
                                    <span>
                            <strong>Student at Pennsylvania State University</strong>
                        </span>
                                </h1>
                            </div>
                            <img className='img-responsive mene-img' src={require("../../images/a2.jpg")}/>
                            <div className='mene-description'>
                                <p>
                                    <a href="https://www.linkedin.com/in/long-pham-8b6a731a1/">
                                        <img border="0" alt="linkedin" src={require("../../images/linkedin.png")} style={{float:'left'}} width="160" height="100"/>
                                    </a>
                                </p>
                                <p>
                                    <a href="https://github.com/lnp5131/">
                                        <img border="0" alt="linkedin" src={require("../../images/github.png")} style={{float:'right', paddingTop:20}} width="160" height="100"/>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="container-small" style={{float:'right'}}>
                        <div className="mene">
                            <div className='mene-header'>
                                <h1>
                                    Ramzy Saad
                                    <span>
                            <strong>Student at Pennsylvania State University</strong>
                        </span>
                                </h1>
                            </div>
                            <img className='img-responsive mene-img' src={require("../../images/a3.jpg")}/>
                            <div className='mene-description'>
                                <p>
                                    <a href="https://www.linkedin.com/in/ramzy-saad-063a761a9/">
                                        <img border="0" alt="linkedin" src={require("../../images/linkedin.png")} style={{float:'left'}} width="160" height="100"/>
                                    </a>
                                </p>
                                <p>
                                    <a href="https://github.com/ramzysaad/">
                                        <img border="0" alt="linkedin" src={require("../../images/github.png")} style={{float:'right', paddingTop:20}} width="160" height="100"/>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
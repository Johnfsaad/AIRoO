import React from 'react';
import firebase from '../../firebase';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.message !== '') {
            const chatRef = firebase.database().ref('general');
            const chat = {
                message: this.state.message,
                user: this.props.user.displayName,
                timestamp: new Date().getTime()
            }

            chatRef.push(chat);
            this.setState({message: ''});
        }
    }

    render() {
        return (
            <div className="App">
                <div className="home--container">
                    <div className="agileits-services py-5" id="services">
                        <div className="container py-sm-5">
                            <div className="title-wthree text-center">
                                <h3 className="agile-title   text-white">our services</h3>
                            </div>
                            <div className="agileits-services-grids">
                                <p>Any structured government, organization, or entity requires a form of procedure and
                                    order; a set of
                                    rules that maintain the flow of any official session of the entity. A commonly used
                                    Rules of Order are
                                    Robert’s Rules of Order and Modern Rules of Order; some other entities will create
                                    their
                                    procedures and rules. Any Rules of Order allow the formal meetings of any entity to
                                    run smoothly,
                                    maintain fairness, and maintain the flow of their meetings. Typically, procedures
                                    are used to maintain
                                    the flow of a committee or meeting of an entity. In a meeting, there are two main
                                    actors, the chair,
                                    the person maintaining the order of the session and overseeing its flow, and the
                                    participants. At
                                    times, the chair does mistakes, forgets the proper order, or becomes biased. The
                                    goal of AI’s Rules of
                                    Order (AiRoO) is to substitute the role of the chair. AIRoO will be a web app that
                                    allows the chair to
                                    build all the possible rules using structured blocks, then allow the chair to have
                                    AiRoO maintain the
                                    order and the flow of a meeting using those rules designed into blocks earlier by
                                    the chair. AiRoO
                                    will consist of a back- end where the chair can manipulate those blocks and rules.
                                    AIRoO will also
                                    allow participants of that meeting to be authenticated and confirmed by the chair.
                                    Once in a meeting
                                    and the meeting begins, AiRoO will take over the meeting using the rules it was
                                    given by the chair to
                                    maintain the flow and order. It will maintain the flow of the meeting by saying
                                    things the chair would
                                    have said and waiting for verbal responses or typed responses from the participants
                                    via the web-app.
                                    AiRoO will utilize IBM’s Watson to allow for Speech-to-Text and Text-To-Speech
                                    processing. It is also
                                    possible AIRoO might utilize Watson’s language processing capability to improve its
                                    understanding of
                                    some terminology and allow for error-correcting when the participants do such
                                    errors. The goal is that
                                    when AIRoO is running that there should be no need for the chair to exist as AIRoO
                                    already knows all
                                    the possible rules and can make sure they are followed properly when voting, taking
                                    roll call, or even
                                    just debating or discussing any matter.</p>
                            </div>
                        </div>
                    </div>
                    <section className="wthree-row py-lg-5" id="process">
                        <div className="container py-5">
                            <div className="title-wthree text-center py-lg-5">
                                <h3 className="agile-title">How to use</h3>
                                <span></span>
                            </div>
                            <div className="row abbot-main py-lg-5 py-4 mb-sm-5">
                                <div className="col-lg-4 abbot-right">
                                    <img src={require("../../images/p1.png")} className="img-fluid rounded-circle"
                                         alt=""/>
                                </div>
                                <div className="offset-lg-2"></div>
                                <div className="col-lg-6 about-text-grid position-relative mt-lg-0 mt-5">
                                    <div className="d-flex">
                                        <span className="process-circle"></span>
                                        <h4 className="sec-title1">Register or Login</h4>
                                    </div>
                                    <p id='steps' className="mt-md-5 mb-3 mt-3">To access AIRoO online registration system,  You MUST be a chair or one of the participants of the conference.</p>
                                    <div className="process-direction"></div>
                                </div>
                            </div>
                            <div className="row abbot-main py-lg-5 py-4 my-md-5">
                                <div className="col-lg-6 about-text-grid">
                                    <div className="d-flex">
                                        <h4 className="sec-title1 flow-odd">Conference Leader</h4>
                                        <span className="process-circle"></span>
                                    </div>
                                    <ul className="list-group mt-md-3 my-3">
                                        <li className="list-group-item border-0">
                                            <i className="fas fa-check mr-3 mt-lg-0 mt-3"></i>If you are one of the Conference Leaders, Join RoO page and design and build all the possible rules for your Session using the blocks 
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="col-lg-4 abbot-right">
                                    <img src={require("../../images/p2.png")} className="img-fluid rounded-circle"
                                         alt=""/>
                                </div>
                            </div>
                            <div className="row abbot-main py-lg-5 py-4 mb-sm-5">
                                <div className="col-lg-4 abbot-right">
                                    <img src={require("../../images/p3.png")} className="img-fluid rounded-circle"
                                         alt=""/>
                                </div>
                                <div className="offset-lg-2"></div>
                                <div className="col-lg-6 about-text-grid position-relative  mt-lg-0 mt-5">
                                    <div className="d-flex">
                                        <span className="process-circle"></span>
                                        <h4 className="sec-title1">onference Participants</h4>
                                    </div>
                                    <p id='steps' className="mt-md-5 mb-3 mt-3">If you are one of the Conference participants, Join Session page and join your session </p>
                                    <div className="process-direction2"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="agileits-partners py-sm-5 py-4" id="partners">
                        <div className="container py-lg-5">
                            <div className="title-wthree text-center">
                                <h3 className="agile-title">our Team</h3>
                                <span></span>
                            </div>
                            <div className="blogls py-5 bg-light border-bottom" id="what">
                                <div className="container py-xl-5 py-lg-3">
                                    <div className="row package-grids">
<<<<<<< HEAD
                                        <div className="col-md-4 blog">
                                            <div className="blogs-top">
                                                <img src={require("../../images/a1.jpg")} alt="" className="img-fluid"/>
=======
                                        <div className="col-md-4 blog my-md-0 my-5">
                                            <div className="blogs-top">
                                                <img src={require("../../images/LP.jpg")} alt="" className="img-fluid"/>
>>>>>>> 5362cabae856af5ed7f8d36ec3fda37dd6e7c8a2
                                            </div>
                                            <div className="blogs-bottom p-4 bg-white">
                                                <p className="title-para text-center mx-auto mb-sm-5 mb-4">Long Pham</p>
                                            </div>
                                        </div>
<<<<<<< HEAD
                                        
                                        <div className="col-md-4 blog">
=======
                                        <div className="col-md-4 blog my-md-0 my-5">
>>>>>>> 5362cabae856af5ed7f8d36ec3fda37dd6e7c8a2
                                            <div className="blogs-top">
                                                <img src={require("../../images/a3.jpg")} alt="" className="img-fluid"/>
                                            </div>
                                            <div className="blogs-bottom p-4 bg-white">
                                                <p className="title-para text-center mx-auto mb-sm-5 mb-4">Ramzy Saad</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
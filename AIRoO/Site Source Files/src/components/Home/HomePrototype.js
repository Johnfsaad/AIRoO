import React from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';

import './Home.css';

import Chatbox from './Chatbox';

class Home extends React.Component{
    constructor(props){
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
        if(this.state.message !== ''){
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

    render(){
        return(
            <div className="App">
                <div className="home--container">
                    <h1>Welcome to AIRoO!</h1>
                    {this.props.user &&
                    <div className="allow-chat">
                        <form className="send-chat" onSubmit={this.handleSubmit}>
                            <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} placeholder='Leave a message...' />
                        </form>

                        <Chatbox />
                    </div>
                    }
                    {!this.props.user &&
                    <div className="disallow-chat">
                        <p><Link to="/login">Login</Link> or <Link to="/register">Register</Link> to start chatting!</p>
                    </div>
                    }
                </div>
                <div className="agileits-services py-5" id="services">
                    <div className="container py-sm-5">
                        <div className="title-wthree text-center">
                            <h3 className="agile-title   text-white">our services</h3>
                        </div>
                        <div className="agileits-services-grids">
                            <p>Any structured government, organization or entity require a form of procedure and order; a set of
                                rules that maintain the flow of any official session of the entity. A commonly used Rules of Order are
                                Robert’s Rules of Order and Modern Rules of Order; some other entities will create their own
                                procedures and rules. Any Rules of Order allow the formal meetings of any entity to run smoothly,
                                maintain fairness and maintain the flow of their meetings. Typically, procedures are used to maintain
                                the flow of a committee or meeting of an entity. In a meeting, there are two main actors, the chair,
                                the person maintaining the order of the session and overseeing its flow, and the participants. At
                                times, the chair does mistakes, forgets the proper order or becomes biased. The goal of AI’s Rules of
                                Order (AiRoO) is to substitute the role of the chair. AIRoO will be a web app that allows the chair to
                                build all the possible rules using structured blocks, then allow the chair to have AiRoO maintain the
                                order and the flow of a meeting using those rules designed into blocks earlier by the chair. AiRoO
                                will consist of a back- end where the chair can manipulate those blocks and rules. AIRoO will also
                                allow participants of that meeting to be authenticated and confirmed by the chair. Once in a meeting
                                and the meeting begins, AiRoO will takeover the meeting using the rules it was given by the chair to
                                maintain the flow and order. It will maintain the flow of the meeting by saying things the chair would
                                have said and waiting for verbal responses or typed responses from the participants via the web-app.
                                AiROo will utilize IBM’s Watson to allow for Speech-to-Text and Text-To-Speech processing. It is also
                                possible AIRoO might utilize Watson’s language processing capability to improve its understanding of
                                some terminology and allow for error correcting when the participants do such errors. The goal is that
                                when AIRoO is running that there should be no need for the chair to exist as AIRoO already knows all
                                the possible rules and can make sure they are followed properly when voting, taking roll call or even
                                just debating or discussing any matter.</p>
                        </div>
                    </div>
                </div>
                <section className="wthree-row py-lg-5" id="process">
                    <div className="container py-5">
                        <div className="title-wthree text-center py-lg-5">
                            <h3 className="agile-title">How's Work</h3>
                            <span></span>
                        </div>
                        <div className="row abbot-main py-lg-5 py-4 mb-sm-5">
                            <div className="col-lg-4 abbot-right">
                                <img src={require("./images/p1.png")} className="img-fluid rounded-circle" alt=""/>
                            </div>
                            <div className="offset-lg-2"></div>
                            <div className="col-lg-6 about-text-grid position-relative mt-lg-0 mt-5">
                                <div className="d-flex">
                                    <span className="process-circle"></span>
                                    <h4 className="sec-title1">Step 1 ?</h4>
                                </div>
                                <p className="mt-md-5 mb-3 mt-3">.................... </p>
                                <p>.............................................. </p>
                                <div className="process-direction"></div>
                            </div>
                        </div>
                        <div className="row abbot-main py-lg-5 py-4 my-md-5">
                            <div className="col-lg-6 about-text-grid">
                                <div className="d-flex">
                                    <h4 className="sec-title1 flow-odd">Step 2</h4>
                                    <span className="process-circle"></span>
                                </div>
                                <ul className="list-group mt-md-3 my-3">
                                    <li className="list-group-item border-0">
                                        <i className="fas fa-check mr-3 mt-lg-0 mt-3"></i>.............
                                    </li>
                                    <li className="list-group-item border-0">
                                        <i className="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............
                                    </li>
                                    <li className="list-group-item border-0">
                                        <i className="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............
                                    </li>
                                    <li className="list-group-item border-0">
                                        <i className="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............
                                    </li>
                                    <li className="list-group-item border-0">
                                        <i className="fas fa-check mr-3 mt-lg-0 mt-3"></i>...............
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 abbot-right">
                                <img src={require("./images/p2.png")} className="img-fluid rounded-circle" alt=""/>
                            </div>
                        </div>
                        <div className="row abbot-main py-lg-5 py-4 mb-sm-5">
                            <div className="col-lg-4 abbot-right">
                                <img src={require("./images/p3.png")} className="img-fluid rounded-circle" alt=""/>
                            </div>
                            <div className="offset-lg-2"></div>
                            <div className="col-lg-6 about-text-grid position-relative  mt-lg-0 mt-5">
                                <div className="d-flex">
                                    <span className="process-circle"></span>
                                    <h4 className="sec-title1">Step 3</h4>
                                </div>
                                <p className="mt-md-5 mb-3 mt-3">............. </p>
                                <p>................... </p>
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
                                <p className="title-para text-center mx-auto mb-sm-5 mb-4">we ...................................
                                    ........................
                                </p>
                                <div className="row package-grids">
                                    <div className="col-md-4 blog">
                                        <div className="blogs-top">
                                            <img src={require("./images/a1.jpg")} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="blogs-bottom p-4 bg-white">
                                            <h3 className="title mb-sm-5 mb-4 text-dark text-center font-weight-bold">1</h3>
                                            <p className="title-para text-center mx-auto mb-sm-5 mb-4">.......................</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 blog my-md-0 my-5">
                                        <div className="blogs-top">
                                            <img src={require("./images/a2.jpg")} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="blogs-bottom p-4 bg-white">
                                            <h3 className="title mb-sm-5 mb-4 text-dark text-center font-weight-bold">2</h3>
                                            <p className="title-para text-center mx-auto mb-sm-5 mb-4">........................</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 blog">
                                        <div className="blogs-top">
                                            <img src={require("./images/a3.jpg")} alt="" className="img-fluid"/>
                                        </div>
                                        <div className="blogs-bottom p-4 bg-white">
                                            <h3 className="title mb-sm-5 mb-4 text-dark text-center font-weight-bold">3</h3>
                                            <p className="title-para text-center mx-auto mb-sm-5 mb-4">.................</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-wthree" id="contact">
                    <div className="container py-sm-5">
                        <div className="row py-lg-5 py-4">
                            <div className="col-lg-4">
                                <div className="title-wthree">
                                    <h3 className="agile-title">contact</h3>
                                    <span></span>
                                </div>
                                <p>Just send us your questions and we will give you the help you need. </p>
                                <div className="d-sm-flex">
                                    <a className="btn btn-primary mt-lg-5 mt-3 agile-link-cnt scroll" href="#contact" role="button">email us</a>
                                    <a className="btn btn-primary mt-lg-5 mt-3 ml-4 agile-link-cnt bg-dark scroll" href="#footer">call us</a>
                                </div>
                            </div>
                            <div className="offset-2"></div>
                            <div className="col-lg-6 mt-lg-0 mt-5">
                                <div className="register-top1">
                                    <form action="#" method="get" className="register-wthree">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                                                    <label className="mb-0">
                                                        <span className="fas fa-user"></span>
                                                    </label>
                                                </div>
                                                <div className="col-md-5">
                                                    <label>First name</label>
                                                    <input className="form-control" type="text" placeholder="First name" name="email" required />
                                                </div>
                                                <div className="col-md-5">
                                                    <label>Last name</label>
                                                    <input className="form-control" type="text" placeholder="Last name" name="email" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                                                    <label className="mb-0">
                                                        <span className="fas fa-envelope-open"></span>
                                                    </label>
                                                </div>
                                                <div className="col-md-10">
                                                    <label>Email</label>
                                                    <input className="form-control" type="email" placeholder="example@email.com" name="email" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-2 d-md-flex align-items-end justify-content-end px-md-0">
                                                    <label className="mb-0">
                                                        <span className="far fa-edit"></span>
                                                    </label>
                                                </div>
                                                <div className="col-md-10">
                                                    <label>Your message</label>
                                                    <textarea placeholder="Type your message here" className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-lg-5 mt-3">
                                            <div className="offset-2"></div>
                                            <div className="col-md-10">
                                                <button type="submit" className="btn btn-agile btn-block w-100">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer id="footer" className="text-sm-left text-center">
                    <div className="container py-4 py-sm-5">
                        <h2>
                            <a className="navbar-brand text-white" href="index.html">
                                <i className="fab fa-laravel"></i> AIRoO
                            </a>
                        </h2>
                        <div className="row py-sm-5 py-3">
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <ul className="list-agileits">
                                    <li>
                                        <a href="index.html" className="nav-link">Home</a>
                                    </li>
                                    <li className="my-2">
                                        <a href="#register" className="nav-link scroll">Register</a>
                                    </li>
                                    <li>
                                        <a href="#contact" className="nav-link scroll">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6 mt-sm-5">
                                <ul className="list-agileits"></ul>
                            </div>
                            <div className="offset-lg-5"></div>
                            <div className="col-lg-3 col-md-4 footer-end-grid mt-md-0 mt-sm-5">
                                <div className="fv3-contact">
                                    <span className="fas fa-phone mr-2"></span>
                                    <p className="d-inline">111 22 3333</p>
                                </div>
                                <div className="fv3-contact">
                                    <span className="fas fa-mobile mr-2"></span>
                                    <p className="d-inline">111 22 3333</p>
                                </div>
                                <div className="fv3-contact">
                                    <span className="fas fa-envelope-open mr-2"></span>
                                    <p className="d-inline">
                                        <a href="mailto:example@email.com">info@airoo.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between pt-lg-5   footer-bottom-cpy">
                            <div className="cpy-right text-center">
                                <p>© 2020 AIRoO. All rights reserved.</p>
                            </div>
                            <div className="social-icons pb-md-0 pb-4">
                                <ul className="social-iconsv2 agileinfo text-center">
                                    <li className="ml-lg-5">
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Username</label>
                                        <input type="text" className="form-control" placeholder=" " name="Name" id="recipient-name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Password</label>
                                        <input type="password" className="form-control" placeholder=" " name="Password" id="password" required />
                                    </div>
                                    <div className="right-l">
                                        <input type="submit" className="form-control" value="Login" />
                                    </div>
                                    <div className="row sub-l my-3">
                                        <div className="col sub-agile">
                                            <input type="checkbox" id="brand1" value="" />
                                            <label htmlFor="brand1" className="text-secondary"><span></span>Remember me?</label>
                                        </div>
                                        <div className="col forgot-l text-right">
                                            <a href="#" className="text-secondary">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <p className="text-center dont-do">Don't have an account?
                                        <a href="#register" className="scroll text-dark font-weight-bold">Register Now</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
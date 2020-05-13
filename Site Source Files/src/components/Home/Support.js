import React from 'react';
import '../../css/info.css';

class Support extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="support-container">
                <div className="container-small">
                    <div className="mene">
                        <div className='mene-header'>
                            <h1>
                                Documentation
                            </h1>
                        </div>
                        <p>
				<span>
					<strong>
						<a href="https://github.com/Johnfsaad/AIRoO/tree/master/Design/Phase%200">Phase 0: Team Formation and Project Selection</a>
					</strong>
				</span>
                        </p>
                        <p>
				<span>
					<strong>
						<a href="https://github.com/Johnfsaad/AIRoO/tree/master/Design/Phase%201">Phase 1: Requirements Review</a>
					</strong>
				</span>
                        </p>
                        <p>
				<span>
					<strong>
						<a href="https://github.com/Johnfsaad/AIRoO/tree/master/Design/Phase%202">Phase 2: Preliminary Design Review and Critical Design Review</a>
					</strong>
				</span>
                        </p>
                        <p>
				<span>
					<strong>
						<a href="https://github.com/Johnfsaad/AIRoO/tree/master/Design/Phase%203">Phase 3: Project Milestones</a>
					</strong>
				</span>
                        </p>
                        <p>
				<span>
					<strong>
						<a href="https://github.com/Johnfsaad/AIRoO/tree/master/Design/Phase%205">Phase 5: Promotional Website</a>
					</strong>
				</span>
                        </p>
                        <p>
				<span>
					<strong>
						<a href="https://github.com/Johnfsaad/AIRoO"> Phase 6: Complete System</a>
					</strong>
				</span>
                        </p>
                        <div className='mene-description'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Support;
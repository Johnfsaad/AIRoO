import React from 'react';
import firebase, {auth, provider} from '../../firebase';
import {BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect} from 'react-router-dom';

import '../../css/boilerplate.css';
import '../../css/Untitled-2.css';
import '../../css/bootstrap.css';
import '../../css/style.css';
import '../../css/styles_co.css'
import '../../css/SpryAccordion.css';
import '../Home/Home.css';

class RoO extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
        const sectionRef = firebase.database().ref('RoO');

        var loadScript = function (src) {
            var tag = document.createElement('script');
            tag.type = 'text/jsx';
            tag.async = false;
            tag.src = src;
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(tag);
        }

        loadScript("../../blockly_compressed.js");
        loadScript("../../blockly_uncompressed.js");
        loadScript("../../javascript_compressed.js");
        loadScript("../../en.js");
        loadScript("../../variables.js");
        loadScript("../../lists.js");
        loadScript("../../text.js");
        loadScript("../../procedures.js");
        loadScript("../../variables_dynamic.js");
        loadScript("../../loops.js");
        loadScript("../../say.js");
        loadScript("../../print.js");
        loadScript("../../printWithTime.js");
        loadScript("../../do.js");
        loadScript("../../listen.j");
        loadScript("../../suspend.js");
        loadScript("../../dolist.js");

        const script = document.createElement("script");

        const scriptText = document.createTextNode(
            "        var workspace = Blockly.inject('blocklyDiv',\n" +
            "            {toolbox: document.getElementById('toolbox')});\n" +
            "        function runCode(){\n" +
            "            window.loopTRAP=1000;\n" +
            "            Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw \"Infinite loop.\";\\n';\n" +
            "            var code = Blockly.JavaScript.workspaceToCode(workspace);\n" +
            "            try {\n" +
            "                eval(code);\n" +
            "            } catch (e) {\n" +
            "                alert(e);\n" +
            "            }\n" +
            "        }");

        script.appendChild(scriptText);
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);
    }

    render() {
        return (
            <div className="RoO-container">
                {this.props.user ?
                    <section id="blocklyContainer">
                        <div id="blocklyDiv"></div>
                    </section>
                    : <Route
                        render={props => <Redirect to={{pathname: '/'}}/>}
                    />
                }
            </div>
        );
    }
}

export default RoO;
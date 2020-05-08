import React from 'react';
import firebase, {auth, provider} from '../../firebase';
import {BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect} from 'react-router-dom';

import BlocklyComponent, {Block, Value, Field, Shadow} from './Blockly';
import BlocklyJS from 'blockly/javascript';
import './blocks/customblocks';
import './generator/generator';

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

    generateCode = () => {
        const codeStore = firebase.database().ref('Code');
        var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
        codeStore.push(code);
    }

    componentDidMount() {
        const sectionRef = firebase.database().ref('RoO');

        // var loadScript = function (src) {
        //     var tag = document.createElement('script');
        //     tag.type = 'text/jsx';
        //     tag.async = false;
        //     tag.src = src;
        //     var body = document.getElementsByTagName('body')[0];
        //     body.appendChild(tag);
        // }

        // loadScript("../../blockly_compressed.js");
        // loadScript("../../blockly_uncompressed.js");
        // loadScript("../../javascript_compressed.js");
        // loadScript("../../en.js");
        // loadScript("../../variables.js");
        // loadScript("../../lists.js");
        // loadScript("../../text.js");
        // loadScript("../../procedures.js");
        // loadScript("../../variables_dynamic.js");
        // loadScript("../../loops.js");
        // loadScript("../../say.js");
        // loadScript("../../print.js");
        // loadScript("../../printWithTime.js");
        // loadScript("../../do.js");
        // loadScript("../../listen.j");
        // loadScript("../../suspend.js");
        // loadScript("../../dolist.js");

        // const script = document.createElement("script");
        //
        // const scriptText = document.createTextNode(
        //     "        var workspace = Blockly.inject('blocklyDiv',\n" +
        //     "            {toolbox: document.getElementById('toolbox')});\n" +
        //     "        function runCode(){\n" +
        //     "            window.loopTRAP=1000;\n" +
        //     "            Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw \"Infinite loop.\";\\n';\n" +
        //     "            var code = Blockly.JavaScript.workspaceToCode(workspace);\n" +
        //     "            try {\n" +
        //     "                eval(code);\n" +
        //     "            } catch (e) {\n" +
        //     "                alert(e);\n" +
        //     "            }\n" +
        //     "        }");
        //
        // script.appendChild(scriptText);
        // var body = document.getElementsByTagName('body')[0];
        // body.appendChild(script);
    }

    render() {
        return (
            <div className="RoO-container">
                {this.props.user ?
                    <div>
                        <button onClick={this.generateCode}>Save</button>
                        <BlocklyComponent ref={e => this.simpleWorkspace = e}
                                          readOnly={false} trashcan={true} media={'media/'}
                                          move={{
                                              scrollbars: true,
                                              drag: true,
                                              wheel: true
                                          }}
                                          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml">
                                            <block type="controls_ifelse" x="0" y="0"></block>
                                            </xml>`}>
                            <Block type="closesession"/>
                            {/*<Block type="test_react_field"/>*/}
                            {/*<Block type="test_react_date_field"/>*/}
                            {/*<Block type="controls_ifelse"/>*/}
                            {/*<Block type="logic_compare"/>*/}
                            {/*<Block type="logic_operation"/>*/}
                            {/*<Block type="controls_repeat_ext">*/}
                            {/*    <Value name="TIMES">*/}
                            {/*        <Shadow type="math_number">*/}
                            {/*            <Field name="NUM">10</Field>*/}
                            {/*        </Shadow>*/}
                            {/*    </Value>*/}
                            {/*</Block>*/}
                            {/*<Block type="logic_operation"/>*/}
                            {/*<Block type="logic_negate"/>*/}
                            {/*<Block type="logic_boolean"/>*/}
                            {/*<Block type="logic_null" disabled="true"/>*/}
                            {/*<Block type="logic_ternary"/>*/}
                            {/*<Block type="text_charAt">*/}
                            {/*    <Value name="VALUE">*/}
                            {/*        <Block type="variables_get">*/}
                            {/*            <Field name="VAR">text</Field>*/}
                            {/*        </Block>*/}
                            {/*    </Value>*/}
                            {/*</Block>*/}
                        </BlocklyComponent>
                    </div>
                    : <Route
                        render={props => <Redirect to={{pathname: '/'}}/>}
                    />
                }
            </div>
        );
    }
}

export default RoO;
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
        var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
        console.log(code);
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
                
<xml id="toolbox" style="display:none;">


    <category name="Text" colour="#5CA68D">
        <block type="text_charAt">
            <mutation at="true"></mutation>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="G1L.Z/,8={hV#-q8hx|k" variabletype="">text</field>
                </block>
            </value>
        </block>
        <block type="text">
            <field name="TEXT"></field>
        </block>
        <block type="text_append">
            <field name="VAR" id="ZZWW3YzH`I^K4Q[]7KB-" variabletype="">item</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="text_length">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_isEmpty">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="text_indexOf">
            <field name="END">FIRST</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="G1L.Z/,8={hV#-q8hx|k" variabletype="">text</field>
                </block>
            </value>
            <value name="FIND">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_join">
            <mutation items="2"></mutation>
        </block>
        <block type="text_getSubstring">
            <mutation at1="true" at2="true"></mutation>
            <field name="WHERE1">FROM_START</field>
            <field name="WHERE2">FROM_START</field>
            <value name="STRING">
                <block type="variables_get">
                    <field name="VAR" id="G1L.Z/,8={hV#-q8hx|k" variabletype="">text</field>
                </block>
            </value>
        </block>
        <block type="text_changeCase">
            <field name="CASE">UPPERCASE</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_trim">
            <field name="MODE">BOTH</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_print">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_prompt_ext">
            <mutation type="TEXT"></mutation>
            <field name="TYPE">TEXT</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
    </category>


    <category name="Loops" colour="120">
        <block type="controls_repeat_ext"></block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for">


        </block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
    </category>


    <category name="Lists" colour="260">
        <block type="lists_create_with"></block>
        <block type="lists_repeat"></block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">{listVariable}</field>
                </block>
            </value>
        </block>
        <block type="lists_getIndex">
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR">{listVariable}</field>
                </block>
            </value>
        </block>
        <block type="lists_setIndex">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">{listVariable}</field>
                </block>
            </value>
        </block>
        <block type="lists_getSublist">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR">{listVariable}</field>
                </block>
            </value>
        </block>
        <block type="lists_split">
            <value name="DELIM">
                <shadow type="text">
                    <field name="TEXT">,</field>
                </shadow>
            </value>
        </block>
        <block type="lists_sort"></block>
    </category>


  < >
  < />

  <sep></sep>
  <sep></sep>
  <sep></sep>
  <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>
  <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>
  
  <sep></sep>
  <sep></sep>
  <sep></sep>
  
  <category name="Actions" colour="#915848">
   <block type="say"></block>
    <block type="print"></block>
    <block type="printwithtime">
    <field name="M">20</field>
    <field name="T">Seconds</field>
    </block>
   <block type="suspend"></block>
   <block type="recording"></block>
  </category>
  
  <category name="Do" colour="#8f9545">
  <block type="do">
    <field name="Roll Call">Roll Call</field>
    </block>
    
    <block type="dolist">
    <field name="Roll Call">Roll Call</field>
    </block>
    
   </category>
   
   
   
  
  
 
  
   <category name="On Click" colour="#948846">
  <block type="onclick">
  </category>
  
  
  
  
</xml>
            </div>
        );
    }
}

export default RoO;
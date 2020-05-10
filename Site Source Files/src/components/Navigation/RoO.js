import React from 'react';
import firebase from '../../firebase';
import {Route, Redirect} from 'react-router-dom';
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
import '../../css/styleblockly.css';

class RoO extends React.Component {
    constructor(props) {
        super(props);
    }

    generateCode = () => {
        const codeStore = firebase.database().ref('Code');
        var code = BlocklyJS.workspaceToCode(this.simpleWorkspace.workspace);
        codeStore.set(code);
    }

    componentDidMount() {
        const sectionRef = firebase.database().ref('RoO');
    }

    render() {
        return (
            <div className="RoO-container">
                {this.props.user ?
<<<<<<< HEAD
                
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
=======
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
                                            <Block type="controls_ifelse" x="0" y="0"/>
                                            </xml>`}>
                            <category name="Text" colour="#5CA68D">
                                <Block type="text_charAt">
                                    <mutation at="true"/>
                                    <field name="WHERE">FROM_START</field>
                                    <value name="VALUE">
                                        <Block type="variables_get">
                                            <field name="VAR" id="G1L.Z/,8={hV#-q8hx|k" variabletype="">text</field>
                                        </Block>
                                    </value>
                                </Block>
                                <Block type="text">
                                    <field name="TEXT"/>
                                </Block>
                                <Block type="text_append">
                                    <field name="VAR" id="ZZWW3YzH`I^K4Q[]7KB-" variabletype="">item</field>
                                    <value name="TEXT">
                                        <shadow type="text">
                                            <field name="TEXT"/>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="text_length">
                                    <value name="VALUE">
                                        <shadow type="text">
                                            <field name="TEXT">abc</field>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="text_isEmpty">
                                    <value name="VALUE">
                                        <shadow type="text">
                                            <field name="TEXT"/>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="text_indexOf">
                                    <field name="END">FIRST</field>
                                    <value name="VALUE">
                                        <Block type="variables_get">
                                            <field name="VAR" id="G1L.Z/,8={hV#-q8hx|k" variabletype="">text</field>
                                        </Block>
                                    </value>
                                    <value name="FIND">
                                        <shadow type="text">
                                            <field name="TEXT">abc</field>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="text_join">
                                    <mutation items="2"/>
                                </Block>
                                <Block type="text_getSubstring">
                                    <mutation at1="true" at2="true"/>
                                    <field name="WHERE1">FROM_START</field>
                                    <field name="WHERE2">FROM_START</field>
                                    <value name="STRING">
                                        <Block type="variables_get">
                                            <field name="VAR" id="G1L.Z/,8={hV#-q8hx|k" variabletype="">text</field>
                                        </Block>
                                    </value>
                                </Block>
                                <Block type="text_changeCase">
                                    <field name="CASE">UPPERCASE</field>
                                    <value name="TEXT">
                                        <shadow type="text">
                                            <field name="TEXT">abc</field>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="text_trim">
                                    <field name="MODE">BOTH</field>
                                    <value name="TEXT">
                                        <shadow type="text">
                                            <field name="TEXT">abc</field>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="text_print">
                                    <value name="TEXT">
                                        <shadow type="text">
                                            <field name="TEXT">abc</field>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="text_prompt_ext">
                                    <mutation type="TEXT"/>
                                    <field name="TYPE">TEXT</field>
                                    <value name="TEXT">
                                        <shadow type="text">
                                            <field name="TEXT">abc</field>
                                        </shadow>
                                    </value>
                                </Block>
                            </category>
                            <category name="Loops" colour="120">
                                <Block type="controls_repeat_ext"/>
                                <Block type="controls_whileUntil"/>
                                <Block type="controls_for"/>
                                <Block type="controls_forEach"/>
                                <Block type="controls_flow_statements"/>
                            </category>
                            <category name="Lists" colour="260">
                                <Block type="lists_create_with"/>
                                <Block type="lists_repeat"/>
                                <Block type="lists_length"/>
                                <Block type="lists_isEmpty"/>
                                <Block type="lists_indexOf">
                                    <value name="VALUE">
                                        <Block type="variables_get">
                                            <field name="VAR">listVariable</field>
                                        </Block>
                                    </value>
                                </Block>
                                <Block type="lists_getIndex">
                                    <value name="VALUE">
                                        <Block type="variables_get">
                                            <field name="VAR">listVariable</field>
                                        </Block>
                                    </value>
                                </Block>
                                <Block type="lists_setIndex">
                                    <value name="LIST">
                                        <Block type="variables_get">
                                            <field name="VAR">listVariable</field>
                                        </Block>
                                    </value>
                                </Block>
                                <Block type="lists_getSublist">
                                    <value name="LIST">
                                        <Block type="variables_get">
                                            <field name="VAR">listVariable</field>
                                        </Block>
                                    </value>
                                </Block>
                                <Block type="lists_split">
                                    <value name="DELIM">
                                        <shadow type="text">
                                            <field name="TEXT">,</field>
                                        </shadow>
                                    </value>
                                </Block>
                                <Block type="lists_sort"/>
                            </category>
                            <sep></sep>
                            <sep></sep>
                            <sep></sep>
                            <category name="Variables" colour="#A65C81" custom="VARIABLE"/>
                            <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"/>
                            <sep></sep>
                            <sep></sep>
                            <sep></sep>
                            <category name="Actions" colour="#915848">
                                <Block type="say"/>
                                <Block type="print"/>
                                <Block type="printwithtime"/>
                                <Block type="suspend"/>
                                <Block type="recording"/>
                            </category>
                            <category name="Do" colour="#8f9545">
                                <Block type="do">
                                    <field name="Roll Call">Roll Call</field>
                                </Block>

                                <Block type="dolist">
                                    <field name="Roll Call">Roll Call</field>
                                </Block>
                            </category>
                            <category name="On Click" colour="#948846">
                                <Block type="onclick"/>
                            </category>
                        </BlocklyComponent>
                    </div>
                    : <Route
                        render={props => <Redirect to={{pathname: '/'}}/>}
                    />
                }
>>>>>>> 61a71f4d758da71bc5ecdbda00adf1afcd82b041
            </div>
        );
    }
}

export default RoO;
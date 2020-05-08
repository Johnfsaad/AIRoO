/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

Blockly.Blocks['closesession'] = {
    init: function () {
        this.appendDummyInput("close session")
            .appendField("When\"MOTION\" TO")
            .appendField(new Blockly.FieldDropdown([["CloseSession", "Close"], ["Open new Session", "Open"], ["", ""]]), "openorclose")
            .appendField("Take Vote if the majority ")
            .appendField(new Blockly.FieldDropdown([["Yes", "YES"], ["NO", "NO"], ["", ""]]), "yesorno")
            .appendField(new Blockly.FieldDropdown([["Close Session", "c"], ["Open New Session", "o"], ["", ""]]), "closeropen");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['say'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Say")
            .appendField(new Blockly.FieldTextInput("\" \""), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

function printTo(entry) {

    document.getElementById("output").innerHTML = entry;
}

Blockly.JavaScript['say'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';

    printTo(text_name);
};

Blockly.Blocks['printwithtime'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Print")
            .appendField(new Blockly.FieldTextInput("\" \""), "string")
            .appendField(" For 10 Secounds ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['print'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Print")
            .appendField(new Blockly.FieldTextInput("\" \""), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['listen'] = {
    init: function () {
        this.appendValueInput("do")
            .setCheck(null)
            .appendField("Listen");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['listen'] = function (block) {
    var value_do = Blockly.JavaScript.valueToCode(block, 'do', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['dolist'] = {
    init: function () {
        this.appendValueInput("do")
            .setCheck(null)
            .appendField("Do")
            .appendField(new Blockly.FieldDropdown([["Roll Call", "rollcall"], ["Take Vote", "takevote"]]), "option");
        this.appendValueInput("1")
            .setCheck(null);
        this.appendValueInput("2")
            .setCheck(null);
        this.appendValueInput("3")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['dolist'] = function (block) {
    var dropdown_option = block.getFieldValue('option');
    var value_do = Blockly.JavaScript.valueToCode(block, 'do', Blockly.JavaScript.ORDER_ATOMIC);
    var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['do'] = {
    init: function () {
        this.appendValueInput("do")
            .setCheck(null)
            .appendField("Do")
            .appendField(new Blockly.FieldDropdown([["Roll Call", "rollcall"], ["Take Vote", "takevote"]]), "option")
            .appendField("Options");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['do'] = function (block) {
    var dropdown_option = block.getFieldValue('option');
    var value_do = Blockly.JavaScript.valueToCode(block, 'do', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
Blockly.Blocks['suspend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Suspend")
        .appendField(new Blockly.FieldVariable("Chose Variable"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['suspend'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
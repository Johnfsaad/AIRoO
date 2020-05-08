Blockly.Blocks['listen'] = {
  init: function() {
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


Blockly.JavaScript['listen'] = function(block) {
  var value_do = Blockly.JavaScript.valueToCode(block, 'do', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
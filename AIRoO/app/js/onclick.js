Blockly.Blocks['onclick'] = {
  init: function() {
    this.appendValueInput("click")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("On Click"), "NAME");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("Do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['onclick'] = function(block) {
  var value_click = Blockly.JavaScript.valueToCode(block, 'click', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
Blockly.Blocks['dolist'] = {
  init: function() {
    this.appendValueInput("do")
        .setCheck(null)
        .appendField("Do")
        .appendField(new Blockly.FieldDropdown([["Roll Call","rollcall"], ["Take Vote","takevote"]]), "option");
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

Blockly.JavaScript['dolist'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var value_do = Blockly.JavaScript.valueToCode(block, 'do', Blockly.JavaScript.ORDER_ATOMIC);
  var value_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_3 = Blockly.JavaScript.valueToCode(block, '3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
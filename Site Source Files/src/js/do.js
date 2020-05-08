Blockly.Blocks['do'] = {
  init: function() {
    this.appendValueInput("do")
        .setCheck(null)
        .appendField("Do")
        .appendField(new Blockly.FieldDropdown([["Roll Call","rollcall"], ["Take Vote","takevote"]]), "option")
        .appendField("Options");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['do'] = function(block) {
  var dropdown_option = block.getFieldValue('option');
  var value_do = Blockly.JavaScript.valueToCode(block, 'do', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
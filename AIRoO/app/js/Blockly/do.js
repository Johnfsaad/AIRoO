Blockly.Blocks['do'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["Roll Call","Roll Call"], ["Take Vote","Take Vote"]]), "NAME")
        .appendField("Options");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};// JavaScript Document
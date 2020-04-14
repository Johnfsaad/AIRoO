Blockly.Blocks['dolist'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("do")
        .appendField(new Blockly.FieldDropdown([["Roll Call","Roll Call"], ["Take Vote","Take Vote"]]), "option");
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
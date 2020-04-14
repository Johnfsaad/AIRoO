Blockly.Blocks['suspend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Suspend")
        .appendField(new Blockly.FieldVariable("Choose Variable"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};// JavaScript Document
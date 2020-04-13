Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ptint")
        .appendField(new Blockly.FieldTextInput("\"  \""), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};// JavaScript Document
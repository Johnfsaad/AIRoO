Blockly.Blocks['say'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Say")
        .appendField(new Blockly.FieldTextInput("\"  \""), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['closesession'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When\"MOTION\" TO")
        .appendField(new Blockly.FieldDropdown([["CloseSession","Close"], ["Open new Session","Open"], ["",""]]), "openorclose")
        .appendField("Take Vote if the majority ")
        .appendField(new Blockly.FieldDropdown([["Yes","YES"], ["NO","NO"], ["",""]]), "yesorno")
        .appendField(new Blockly.FieldDropdown([["Close Session","c"], ["Open New Session","o"], ["",""]]), "closeropen");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
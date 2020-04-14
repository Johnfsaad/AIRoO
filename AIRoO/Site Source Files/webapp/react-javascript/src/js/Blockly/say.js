Blockly.Blocks['say'] = {
  init: function() {
    this.appendDummyInput("say")
        .appendField("Say")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
  
  
  
  
};
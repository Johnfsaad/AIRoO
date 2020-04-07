Blockly.Blocks['do'] = {
  init: function() {
    this.appendDummyInput("do")
        .appendField("Do")
        .appendField(new Blockly.FieldTextInput("default"), "NAME");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
  
  
  
  
};
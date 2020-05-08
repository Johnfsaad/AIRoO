Blockly.Blocks['recording'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Start Recording");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.JavaScript['recording'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
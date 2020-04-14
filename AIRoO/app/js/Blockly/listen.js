Blockly.Blocks['listen'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(" Listen");
    this.appendStatementInput("Listen")
        .setCheck(null)
        .appendField("Do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};// JavaScript Document
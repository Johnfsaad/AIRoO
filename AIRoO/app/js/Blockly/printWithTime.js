Blockly.Blocks['printwithtime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print")
        .appendField(new Blockly.FieldTextInput("\"  \""), "NAME")
        .appendField(" For ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["10","10"], ["20","20"]]), "T")
        .appendField(new Blockly.FieldDropdown([["Minute/s","Minute/s"], ["Seconds","Seconds"]]), "M");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "Number");
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
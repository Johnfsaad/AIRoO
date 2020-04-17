Blockly.Blocks['printwithtime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print")
        .appendField(new Blockly.FieldTextInput("\" \""), "NAME")
        .appendField(" For ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["20","20"], ["30","30"], ["40","40"], ["50","50"]]), "option")
        .appendField(new Blockly.FieldDropdown([["Minutes(s)","Minutes"], ["Second(s)","Second"], ["option","OPTIONNAME"]]), "option2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



Blockly.JavaScript['printwithtime'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_option = block.getFieldValue('option');
  var dropdown_option2 = block.getFieldValue('option2');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
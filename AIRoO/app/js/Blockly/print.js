Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print")
        .appendField(new Blockly.FieldTextInput("\" \""), "string");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
function printTo(entry){
	
document.getElementById("output").innerHTML=entry;
	}


Blockly.JavaScript['print'] = function(block) {
  var text_name = block.getFieldValue('string');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  printTo(text_name);
};
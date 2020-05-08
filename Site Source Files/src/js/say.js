Blockly.Blocks['say'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Say")
        .appendField(new Blockly.FieldTextInput("\" \""), "NAME");
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

Blockly.JavaScript['say'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  
  printTo(text_name);
};
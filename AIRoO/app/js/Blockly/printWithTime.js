Blockly.Blocks['printwithtime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Print")
        .appendField(new Blockly.FieldTextInput("\" \""), "string")
        .appendField(" For 10 Secounds ");
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


Blockly.JavaScript['printwithtime'] = function(block) {
  var text_name = block.getFieldValue('string');
 

  var code = '...;\n';
  printTo(text_name);
  
  
  var seconds_left = 10;
var interval = setInterval(function() {
    document.getElementById('output').innerHTML =  --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('output').innerHTML = 'Time Out';
        clearInterval(interval);
    }
}, 1000);
  
  
  
};


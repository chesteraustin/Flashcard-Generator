'use strict';

(function(){
	function partialText(text, cloze){
		var expectedPartial = "";
		if (text.indexOf(cloze) >= 0) {
			//If found, replace text
			expectedPartial = text.replace(cloze, "...");
		}
		else {
			//Not found, console not found
			console.log(`${cloze} was not found.`)
		}
		return expectedPartial
	}

	function ClozeCard(text, cloze){
		this.cloze = cloze;
		this.fullText  = text;
		this.partial = partialText(text, cloze);
	}

	module.exports = ClozeCard;
})();


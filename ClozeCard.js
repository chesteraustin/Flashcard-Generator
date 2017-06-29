'use strict';

(function(){
	function ClozeCard(text, cloze){
		this.cloze = cloze;
		this.fullText  = text;
		this.partial = function(){
			return (this.fullText).replace(this.cloze, "...");
		}
	}

	module.exports = ClozeCard;
})();
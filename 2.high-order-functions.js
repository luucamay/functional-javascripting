 function repeat(operation, num) {
	 if (num <= 0){
		 return
	 } else {
		 return repeat (operation, num-1)
	 }
}
         

module.exports = repeat

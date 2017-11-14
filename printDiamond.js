// printDiamond with recursion 
 <script>

const printDiamond = function(num, shnik) {
	
	const miacnox = function(n, char) {
		if(n <= 0) {
			return '';
		}
		return char + miacnox(n - 1, char);
	};
	
	const vertical = function(bacat, shnikNum, toxNum) {
		
		console.log(miacnox(bacat, ' ') + miacnox(shnikNum, shnik));
		if(toxNum <= num/2) {
			return vertical(bacat + -1, shnikNum + 2, toxNum + 1);
		} else {
			return vertical(bacat + 1, shnikNum - 2, toxNum + 1);
		}
	};
	vertical((num-1)/2, 1, 1);
};
  
  printDiamond(5, '@');

 
  // printDiamond with for loop
     const printDiamond = function(num, shnik) {
	
	const miacum = function(n, char) {
		let miacnoxChar = '';
		for(let i = 0; i < n; i++) {
			miacnoxChar = miacnoxChar + char;
		}
		return miacnoxChar;
	};
	let bacat = (num-1)/2;
	let shnikNum = 1;
	for(let i = 1; i <= num; i++){
		console.log(miacum(bacat, ' ') + miacum(shnikNum, shnik));
		if(i <= num/2) {
			bacat = bacat -1;
			shnikNum = shnikNum + 2;
		} else {
			bacat = bacat + 1;
			shnikNum = shnikNum - 2;
		}
	}
};
  
  printDiamond(5, '@');

  </script>
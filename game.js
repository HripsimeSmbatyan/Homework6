		const board = [
			['', '', ''],
			['', '', ''],
			['', '', '']
		];
	
	        let f1;
            let f2;
            let f3;
            let f4;
            let f5;
            let f6;
            let f7;
            let f8;
            let f9;
            let count = 0;

// make move 
		const makeMove = function() {
                let Found = false;
                while(Found != true) {
                    let Random = Math.floor(Math.random() * 9) + 1;

// find winner			
		const findWinner = function() {
			if(Random == 1 && f1 != "X" && f1 !="O") {
                        f1 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 2 && f2 != "X" && f2 !="O") {
                        f2 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 3 && f3 != "X" && f3 !="O") {
                        f3 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 4 && f4 != "X" && f4 !="O") {
                        f4 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 5 && f5 != "X" && f5 !="O") {
                        f5 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 6 && f6 != "X" && f6 !="O") {
                        f6 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 7 && f7 != "X" && f7 !="O") {
                        f7 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 8 && f8 != "X" && f8 !="O") {
                        f8 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                    if(Random == 9 && f9 != "X" && f9 !="O") {
                        f9 = "O";
                        count++;
                        checkVictory();
                        Found = true;
                    }
                }
                Found = false;

// check Victory 

 function checkVictory() {
                if(f1 == "X" && f2 == "X" && f3 == "X") {
                    victory();
                }
                if(f4 == "X" && f5 == "X" && f6 == "X") {
                    victory();
                }
                if(f7 == "X" && f8 == "X" && f9 == "X") {
                    victory();
                }
                if(f1 == "X" && f5 == "X" && f9 == "X") {
                    victory();
                }
                if(f3 == "X" && f5 == "X" && f7 == "X") {
                    victory();
                }
                if(f1 == "X" && f4 == "X" && f7 == "X") {
                    victory();
                }
                if(f2 == "X" && f5 == "X" && f8 == "X") {
                    victory();
                }
                if(f3 == "X" && f6 == "X" && f9 == "X") {
                    victory();
                }
            }
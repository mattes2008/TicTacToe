let data = {

    winning: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],

}




function checkForWinIndex(src) {

    src = src.split("")

    if (checkForInvalid(src)) {
    	//return "invalid"
    	throw new Error("invalid state")
    }

    let winsX = 0
    let winsO = 0

    for (let i=0; i<data.winning.length; i++) {

        let winningPoints1 = 0
        let winningPoints2 = 0

        for (let i2=0; i2<3; i2++) {

            if (src[data.winning[i][i2]]==="x") {
                winningPoints1++
            }

            if (src[data.winning[i][i2]]==="o") {
                winningPoints2++
            }

        }

         if (winningPoints1===3) {
            winsX++
        } else if (winningPoints2===3) {
            winsO++
        }

        if (i===data.winning.length-1) {

			if (src[0]==="x" && src[2]==="x" && src[4]==="x" && src[6]==="x" && src[8]==="x") {
				return "x"
			} else if (src[1]==="x" && src[3]==="x" && src[4]==="x" && src[5]==="x" && src[7]==="x") {
				return "x"
			}

            if (winsX>1) {
            	winsX = 1
            }

            if (winsO>1) {
            	winsO = 1
            }

            if ((winsX+winsO)>1) {
					throw new Error("invalid state")
			} else {

				if (winsX>winsO) {
					return "x"
				} else if (winsO>winsX) {
					return "o"
				} else if (checkForRemis(src)) {
						return "remis"
				} else {
					throw new Error("no winner found")
				}
			}

		}


    }

}


function checkForWin(src) {
    try {
    	let a = checkForWinIndex(src);
    	return a
    }
    catch (err) {
        console.error(err.message)
    }
}



function checkForRemis (src) {

    for (let i=0; i<src.length; i++) {

        if (src[i]==="-") {
            return false
        } else if (i===src.length-1) {
            return true
        }

    }

}




function checkForInvalid (src) {

    let x = 0
    let o = 0

    if (src.length!==9) {
    	return true
    }

    for (let i=0; i<src.length; i++) {

        if (src[i]==="x") {
            x++
        } else if (src[i]==="o") {
            o++
        } else if (src[i]==="-") {
        } else {
            return true
        }

        if (i===src.length-1) {
			if (x<o) {
				return true
			} else if (x>o+1) {
				return true
			}
        }

    }

}
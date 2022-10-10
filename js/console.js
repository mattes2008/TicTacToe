function win (src) {

    src = src.split("")

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
            return "X"
        } else if (winningPoints2===3) {
            return "O"
        } else if (i===data.winning.length-1) {
        	return false
        }

    }

}




function remis (src) {

	let a = src.split("")

	if (!win(src)) {
		for (let i=0; i<a.length; i++) {

			if (a[i]==="-") {
				return false
			} else if (i===a.length-1) {
				return true
			}

		}
    } else {
    	return false
    }

}




function invalid (src) {

	src = src.split("")

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

        	if (winsX>1) {
        		winsX = 1
        	}
        	if (winsO>1) {
        		winsO = 1
        	}

        	if ((winsX+winsO)>1) {
				if (src[0]==="x" && src[2]==="x" && src[4]==="x" && src[6]==="x" && src[8]==="x") {
					return false
				} else if (src[1]==="x" && src[3]==="x" && src[4]==="x" && src[5]==="x" && src[7]==="x") {
					return false
				} else {
					return true
				}
			}
        }
    }

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

    return false

}




function exportField () {

	let a = ""

	for (let i=0; i<9; i++) {

		let value = "-"

		if (data.elements[i].innerHTML==="X") {
			value = "x"
		} else if (data.elements[i].innerHTML==="O") {
			value = "o"
		}

		a = a + value

		if (i===8) {
			return a
		}

	}

}




function other (text) {

	if (text==="git") {
		return "<a href='https://github.com/mattes2008' target='blanc'>mattes2008</a> <a href='https://github.com/mattes2008/TicTacToe' target='blanc'>TicTacToe</a>"
	} else if (text==="question") {
		return 42
	} else if (text==="help") {
		return "<a href='https://github.com/mattes2008/TicTacToe/wiki' target='blanc'>Wiki</a>"
	}

}
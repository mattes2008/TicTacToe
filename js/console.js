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
            winsX++
        } else if (winningPoints2===3) {
            return "O"
            winsO++
        } else {
        	return false
        }

    }

}




function checkForRemis (src) {

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




function checkForInvalid (src) {

	src = src.split("")

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
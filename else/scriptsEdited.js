let data = {

    winning: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],

}




function checkForWin(src) {

    src = src.split("")

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
            return "x"
        } else if (winningPoints2===3) {
            return "o"
        } else if (i===data.winning.length-1) {
            throw new Error("invalid state")
        }

    }

}


function checkForWinWrapper(src) {
    try {
        checkForWin(src);
    }
    catch (err) {
        console.error(err.message)
    }
}



function checkForRemis (src) {

    src = src.split("")

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

    for (let i=0; i<src.length; i++) {

        if (src[i]==="x") {
            x++
        } else if (src[i]==="o") {
            o++
        } else if (src[i]==="-") {
        } else {
            return true
        }

        if ()

    }

}
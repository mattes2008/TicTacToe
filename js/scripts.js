let data = {

    winning: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    elements: document.getElementsByClassName("field"),
    activePlayer: "sp1",
    sp1: {

    	mode: "player",
    	name: "Spieler 1"

    },
    sp2: {

    	mode: "player",
    	name: "Spieler 2"

    },

}




function bodyOnLoad () {

    for (let i=0; i<data.elements.length; i++) {

        data.elements[i].setAttribute("onclick", "playerChose (this)")

    }

}




function checkForWin (src) {

    src = src.split("")
    let constal

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
            return "sp1"
            for (let i3=0; i3<3; i3++) {

                data.elements[data.winning[i][i3]].setAttribute ("style", "background-color: yellow;")

            }

        } else if (winningPoints2===3) {
            return "sp2"
            for (let i3=0; i3<3; i3++) {

                data.elements[data.winning[i][i3]].setAttribute ("style", "background-color: yellow;")

            }

        } else if (i===data.winning.length-1) {
            let remis = checkForRemis(src)
            if (remis) {
                return "remis"
            } else {
                return false
            }
        }

        for (let i3=0; i3<3; i3++) {



        }

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




function choseField (element, player) {

    if (player==="sp1") {

        element.innerHTML = "X"
        element.setAttribute ("style", "color: red;")
        data.activePlayer = "sp2"
        parseField()

    } else if (player==="sp2") {

        element.innerHTML = "O"
        element.setAttribute ("style", "color: blue;")
        data.activePlayer = "sp1"
        parseField()

    }

}




function playerChose (src) {

	if (data[data.activePlayer].mode==="player") {
		choseField(src, data.activePlayer)
	}

}




function parseField () {

	let str = ""

	for (let i=0; i<data.elements.length; i++) {

		let letter = "-"

		if (data.elements[i].innerHTML==="X") {
			letter = "x"
		}

		if (data.elements[i].innerHTML==="O") {
			letter = "o"
		}

		str = str + letter

	}

	checkForWin (str)

}
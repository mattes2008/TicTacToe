let data = {

    winning: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    elements: document.getElementsByClassName("field"),
    activePlayer: "sp1",
    sp1: {

    	mode: "player",
    	name: "player 1",

    },
    sp2: {

    	mode: "player",
    	name: "player 2",

    },

}




function checkForWin (src) {

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

            for (let i3=0; i3<3; i3++) {

                data.elements[data.winning[i][i3]].setAttribute ("style", "background-color: yellow;")

            }

            for (let i4=0; i4<data.elements.length; i4++) {

            	data.elements[i4].setAttribute("onclick", "")

            }

            document.getElementById("displayText").innerHTML = "&#x1F451;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Congratulations, " + data.sp1.name + "! You won!"
            document.getElementById("display").setAttribute ("style", "background-color: yellow; border: thin solid #DFD800;")

            return "sp1"

        } else if (winningPoints2===3) {
            for (let i3=0; i3<3; i3++) {

                data.elements[data.winning[i][i3]].setAttribute ("style", "background-color: yellow;")

            }

            for (let i4=0; i4<data.elements.length; i4++) {

            	data.elements[i4].setAttribute("onclick", "")

            }

            document.getElementById("displayText").innerHTML = "&#x1F451;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Congratulations, " + data.sp2.name + "! You won!"
			document.getElementById("display").setAttribute ("style", "background-color: yellow; border: thin solid #DFD800;")

            return "sp2"

        } else if (i===data.winning.length-1) {
            let remis = checkForRemis(src)
            if (remis) {
            	document.getElementById("displayText").innerHTML = "<b>=</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Remis, click here to restart!"
            	document.getElementById("display").setAttribute ("style", "background-color: green; border: thin solid #007F00;")
                return "remis"
            } else {
                return false
            }
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
        element.setAttribute("onclick", "")
        document.getElementById("displayText").innerHTML = "<b>O</b>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;" + data.sp2.name + ", it's your turn!"
		document.getElementById("display").setAttribute ("style", "background-color: blue; border: thin solid #00007F;")
        parseField()

    } else if (player==="sp2") {

        element.innerHTML = "O"
        element.setAttribute ("style", "color: blue;")
        data.activePlayer = "sp1"
        element.setAttribute("onclick", "")
        document.getElementById("displayText").innerHTML = "<b>X</b>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;" + data.sp1.name + ", it's your turn!"
		document.getElementById("display").setAttribute ("style", "background-color: red; border: thin solid #7F0000;")
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





function hideSettings () {

	document.getElementById("settings").classList.toggle("hidden")

}




function selectSettings () {

	if (document.getElementById("nameInput1").value==="") {
		data.sp1.name = "player 1"
	} else {
		data.sp1.name = document.getElementById("nameInput1").value
	}

	if (document.getElementById("nameInput2").value==="") {
		data.sp2.name = "player 2"
	} else {
		data.sp2.name = document.getElementById("nameInput2").value
	}

	data.sp1.mode = document.getElementById("modeInput1").value
	data.sp2.mode = document.getElementById("modeInput2").value

}




function restart () {

	data.activePlayer = "sp1"

	for (let i=0; i<data.elements.length; i++) {

		data.elements[i].innerHTML = ""
		data.elements[i].setAttribute ("style", "")
		data.elements[i].setAttribute ("onclick", "playerChose (this)")

	}

	document.getElementById("displayText").innerHTML = "<b>X</b>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;" + data.sp1.name + ", it's your turn!"
	document.getElementById("display").setAttribute ("style", "background-color: red; border: thin solid #7F0000;")

}
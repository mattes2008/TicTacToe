let data = {

    winning: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
    elements: document.getElementsByClassName("field"),
    activePlayer: "sp1",
    sp1: {

    	mode: "player",
    	name: "player 1",
    	ai: {

    		random: true,
    		offensive: false,
    		defensive: false,

    	}

    },
    sp2: {

    	mode: "player",
    	name: "player 2",
    	ai: {

    		random: true,
    		offensive: false,
    		defensive: false,

    	}

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
        let a = parseField()
        if (!a) {
        	aiMove()
        }

    } else if (player==="sp2") {

        element.innerHTML = "O"
        element.setAttribute ("style", "color: blue;")
        data.activePlayer = "sp1"
        element.setAttribute("onclick", "")
        document.getElementById("displayText").innerHTML = "<b>X</b>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;" + data.sp1.name + ", it's your turn!"
		document.getElementById("display").setAttribute ("style", "background-color: red; border: thin solid #7F0000;")
        let a = parseField()
		if (!a) {
        	aiMove()
        }
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

	let a = checkForWin (str)
	return a

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

	let a = document.getElementById("aiInput1").value
	let b = document.getElementById("aiInput2").value

	if (a==="random") {

		data.sp1.ai.random = true
		data.sp1.ai.offensive = false
		data.sp1.ai.defensive = false

	} else if (a==="off") {

		data.sp1.ai.random = true
		data.sp1.ai.offensive = true
		data.sp1.ai.defensive = false

	} else if (a==="def") {

		data.sp1.ai.random = true
		data.sp1.ai.offensive = false
		data.sp1.ai.defensive = true

	} else if (a==="med") {

		data.sp1.ai.random = true
		data.sp1.ai.offensive = true
		data.sp1.ai.defensive = true

	}

	if (b==="random") {

		data.sp2.ai.random = true
		data.sp2.ai.offensive = false
		data.sp2.ai.defensive = false

	} else if (b==="off") {

		data.sp2.ai.random = true
		data.sp2.ai.offensive = true
		data.sp2.ai.defensive = false

	} else if (b==="def") {

		data.sp2.ai.random = true
		data.sp2.ai.offensive = false
		data.sp2.ai.defensive = true

	} else if (b==="med") {

		data.sp2.ai.random = true
		data.sp2.ai.offensive = true
		data.sp2.ai.defensive = true

	}

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
	aiMove ()

}




function hideAIInputs () {

	if (document.getElementById("modeInput1").value==="player") {
		document.getElementById("aiInput1").classList.add("hidden")
	} else {
		document.getElementById("aiInput1").classList.remove("hidden")
	}

	if (document.getElementById("modeInput2").value==="player") {
		document.getElementById("aiInput2").classList.add("hidden")
	} else {
		document.getElementById("aiInput2").classList.remove("hidden")
	}

}
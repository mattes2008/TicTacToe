function aiMove () {

	let a
	let b

	if (data[data.activePlayer].mode==="ai") {

		if (data[data.activePlayer].ai.offensive) {
			a = aiOffensive ()
		} else {
			a = false
		}

		if (!a) {
			if (data[data.activePlayer].ai.defensive) {
				b = aiDefensive ()
			} else {
				b = false
			}
		} else {
			b = false
		}

		if (!b) {
			aiRandom()
		}
	}

}




function aiRandom () {

	aiRandomCheck ()

}




function aiRandomCheck () {

	let a = Math.round(Math.random()*8)

	if (data.elements[a].innerHTML==="") {
		choseField (data.elements[a], data.activePlayer)
	} else {
		aiRandomCheck ()
	}

}




function aiOffensive () {

	if (data.activePlayer==="sp1") {

		for (let i=0; i<data.winning.length; i++) {

			let winningPoints = 0

			for (let i2=0; i2<3; i2++) {

				if (data.elements[data.winning[i][i2]].innerHTML==="X") {
					winningPoints++
				}

			}

			if (winningPoints===2) {

				for (let i2=0; i2<3; i2++) {

					if (data.elements[data.winning[i][i2]].innerHTML==="") {
						choseField (data.elements[data.winning[i][i2]], data.activePlayer)
						return true
					}

				}

			} else if (i===8) {
				return false
			}

		}

	} else if (data.activePlayer==="sp2") {

		for (let i=0; i<data.winning.length; i++) {

			let winningPoints = 0

			for (let i2=0; i2<3; i2++) {

				if (data.elements[data.winning[i][i2]].innerHTML==="O") {
					winningPoints++
				}

			}

			if (winningPoints===2) {

				for (let i2=0; i2<3; i2++) {

					if (data.elements[data.winning[i][i2]].innerHTML==="") {
						choseField (data.elements[data.winning[i][i2]], data.activePlayer)
						return true
					}

				}

			} else if (i===8) {
				return false
			}

		}

	}

}




function aiDefensive () {

	if (data.activePlayer==="sp1") {

		for (let i=0; i<data.winning.length; i++) {

			let winningPoints = 0

			for (let i2=0; i2<3; i2++) {

				if (data.elements[data.winning[i][i2]].innerHTML==="O") {
					winningPoints++
				}

			}

			if (winningPoints===2) {

				for (let i2=0; i2<3; i2++) {

					if (data.elements[data.winning[i][i2]].innerHTML==="") {
						choseField (data.elements[data.winning[i][i2]], data.activePlayer)
						return true
					}

				}

			} else if (i===8) {
				return false
			}

		}

	} else if (data.activePlayer==="sp2") {

		for (let i=0; i<data.winning.length; i++) {

			let winningPoints = 0

			for (let i2=0; i2<3; i2++) {

				if (data.elements[data.winning[i][i2]].innerHTML==="X") {
					winningPoints++
				}

			}

			if (winningPoints===2) {

				for (let i2=0; i2<3; i2++) {

					if (data.elements[data.winning[i][i2]].innerHTML==="") {
						choseField (data.elements[data.winning[i][i2]], data.activePlayer)
						return true
					}

				}

			} else if (i===8) {
				return false
			}

		}

	}

}
console.log('snack 03')

const parola = 'Benvenuto' 
let parolaInvertita = ''

for (let i = 0; i < parola.length; i++) {
	const index = parola.length - 1 - i
	const char = parola.charAt(index)
	console.log(char)
	parolaInvertita += char
	console.log(parolaInvertita)
}

console.log(parolaInvertita)


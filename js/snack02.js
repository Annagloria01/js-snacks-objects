console.log('snack 02')

const zucchine = [
	{
		varieta: 'lunga',
		peso: 200,
		lunghezza: 15,
	},
	{
		varieta: 'corta',
		peso: 100,
		lunghezza: 10,
	},
	{
		varieta: 'lunga',
		peso: 250,
		lunghezza: 35,
	},
	{
		varieta: 'lunga',
		peso: 180,
		lunghezza: 25,
	},
	{
		varieta: 'corta',
		peso: 120,
		lunghezza: 14,
	},
]

const zucchineLunghe = []
const zucchineCorte = []

console.log(zucchine)

for (let i = 0; i < zucchine.length; i++) {
	const elementoCorrente = zucchine[i] 
	console.log(i, elementoCorrente.lunghezza)
	if (elementoCorrente.lunghezza >= 15) {
		zucchineLunghe.push(elementoCorrente)
	} else {
		zucchineCorte.push(elementoCorrente)
	}
}

console.log(zucchineLunghe, zucchineCorte)

let sommaLunghe = 0

for (let i = 0; i < zucchineLunghe.length; i++) {
	sommaLunghe += zucchineLunghe[i].peso
}

console.log(sommaLunghe)

let sommaCorte = 0

for (let i = 0; i < zucchineCorte.length; i++) {
	sommaCorte += zucchineCorte[i].peso
}

console.log(sommaCorte)



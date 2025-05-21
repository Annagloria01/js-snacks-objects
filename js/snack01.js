console.log('snack 01')

const zucchine = [
	{
		varieta: 'lunga',
		peso: 170,
		lunghezza: 19,
	},
	{
		varieta: 'corta',
		peso: 160,
		lunghezza: 18,
	},
	{
		varieta: 'lunga',
		peso: 200,
		lunghezza: 22,
	},
	{
		varieta: 'lunga',
		peso: 180,
		lunghezza: 20,
	},
	{
		varieta: 'corta',
		peso: 140,
		lunghezza: 15,
	},
]

console.log(zucchine)

let somma = 0

for (let i = 0; i < zucchine.length; i++) {
	somma += zucchine[i].peso
}

console.log(somma)

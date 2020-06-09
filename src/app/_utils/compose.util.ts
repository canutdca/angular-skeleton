export const compose = (...fns: any[]) => (x: any) => fns.reduceRight((y, f) => f(y), x)

/*	EXAMPLE
const users = [
	{ name: 'Pepito', surname: 'grillo' }
]

const head = x => x[0]
const getFullName = x => `${x.name} ${x.surname}`
const upperText = (x: string) => x.toUpperCase()

option 1:
const getCorrectName = (users) => {
	const user = head(users)
	const fullName = getFullName(user)
	return upperText(fullName)
} 
const x = getCorrectName(users)

option 2:
const getCorrectName = (users) => upperText(getFullName(head(users)))
const x = getCorrectName(users)

option 3:
const getCorrectName = (users) => compose(upperText, getFullName, head)(users)
const x = getCorrectName(users)

option 4: // aka point free (https://es.qwe.wiki/wiki/Tacit_programming)
const getCorrectName = compose(upperText, getFullName, head)
const x = getCorrectName(users)
*/

// La siguiente función es como compose pero nos permite indicar
// un método con el cual vayamos a encadenar nuestras funciones
const composeM = (method: string) => (...ms: any[]) =>
	ms.reduce((f, g) => (x: any) => g(x)[method](f))

// Con esto, podemos componer promesas
export const composeP = composeM('then')

// example:
// const getUser = composeP(saveInDb, validate)

// const app.post('/users', (req, res) => {
// 	getUser(req.body)
// 		.then(console.log('ok'))
// 		.catch(console.error('ko'))
// })

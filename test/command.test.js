const expectedValues = [
	'development',
	'db://username:password@localhost:3000/development'
]

if (process.env.NODE_ENV !== expectedValues[0] || process.env.DATABASE_URI !== expectedValues[1]) {
	throw new Error('ERROR: it doesn\'t look like we recieved any environment variables.')
} else {
	console.log('WOOP WOOP! All tests passed.')
}

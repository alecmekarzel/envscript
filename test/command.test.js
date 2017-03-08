const { expect } = require('chai')

describe('envscript()', function() {
	it('sets environment variable NODE_ENV', function() {
		expect(process.env.NODE_ENV).to.equal('development')
	})

	it('sets environment variable DATABASE_URI', function() {
		expect(process.env.DATABASE_URI).to.equal('db://username:password@localhost:3000/development')
	})
})

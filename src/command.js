#!/usr/bin/env node

const path = require('path')
const envscript = require('./index')
const program = require('commander')
const package = require('../package.json')

const userPackagePath = path.join(process.cwd(), 'package.json')
const userPackage = require(userPackagePath)

program
	.version(package.version)
	.description(package.description)
	.usage('<script>')

program
	.arguments('<script>')
	.action(function(scriptName) {
		if (!userPackage.scripts) return console.error('ERROR: No scripts found!')
		if (!userPackage.envscripts) return console.error('ERROR: No envscripts found!')
		if (!scriptName) return console.error('ERROR: No script name provided!')
		if (!userPackage.envscripts[scriptName]) return console.error('ERROR: No envscript with name "' + script + '" was found!')

		envscript(userPackage.envscripts[scriptName])
	})

program.parse(process.argv)

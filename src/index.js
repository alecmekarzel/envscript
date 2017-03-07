const { spawn } = require('child_process')

// in this case, script is the object passed to an envscript
// for example, you could do script.run or script.env
module.exports = function envscript(script) {
	// extract the command from the arguments
	var argv = process.argv.splice(3)

	// if the script is a string, just use that, otherwise
	// go inside the script's object, and get the run property
	var command = (typeof script === 'string' ? script : script.run) + ' ' + argv.join(' ')

	// assign the environment variables to a new variable
	var env = Object.assign({}, process.env, script.env)

	// if the operating system is unix based, use these options
	var sh = 'sh'
	var shFlag = '-c'

	// if the operating system is windows based, use these options
	if (process.platform === 'win32') {
		sh = 'cmd'
		shFlag = '/c'
		command = '"' + command.trim() + '"'
	}

	// run the new command in a shell with our options and our new environment variable
	spawn(sh, [
		shFlag, command
	], {
		env,
		stdio: 'inherit'
	}).on('close', function(code) {
		process.exit(code)
	})
}

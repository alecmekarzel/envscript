# envscript

Quickly set environment variables to be used for commands via `package.json`.

## Installation
```bash
# NPM
$ npm install envscript

# Yarn
$ yarn add envscript
```

## Getting Started

All you have to do is define your `scripts` and your `envscripts` inside your `package.json`. Every command in `scripts` should reference a field in `envscripts`.

Don't be confused by this explanation, it's really simple. Take a look at the example below.

#### Via Package.json

```json
{
	"scripts": {
		"start": "envscript start",
		"test": "envscript test"
	},
	"envscripts": {
		"start": {
			"run": "node index.js",
			"env": {
				"NODE_ENV": "production",
				"HOST": "localhost",
				"PORT": 3000
			}
		},
		"test": "mocha"
	},
}
```

As you can see, we have a few simple `scripts` which run `envscript <command>`. When `envscript <command>` executes, it will look in the `envscripts` field in your `package.json` for that `<command>` and attempt to run it. And then that's where the magic happens.

You might also notice that there's two ways of defining an `envscript`.

There's the magical one you're not used to seeing:

```json
"start": {
	"run": "node index.js",
	"env": {
		"NODE_ENV": "production",
		"HOST": "localhost",
		"PORT": 3000
	}
}
```

And then there's the traditional one that you'd use for any normal script:

```json
{
	"envscripts": {
		"test": "mocha"
	}
}
```

We think these are both pretty intuitive and readable.

## Testing

Yes, your eyes haven't fooled you: there is no tests folder. We run a pretty basic test (because that's all we need) inside of our `package.json`.

Simply run `npm test` or `yarn test` (depending on your package manager) and the tests for this package will be run.

## Issues

We don't accept issues; we accept pull requests.

## Changelog

For milestones, visit the [project's releases](https://github.com/alecmekarzel/envscript/releases).

## License

For license information, visit the [project's license](https://github.com/alecmekarzel/envscript/blob/master/LICENSE).

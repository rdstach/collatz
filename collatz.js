#!/usr/bin/env node

const print = console.log
const argv = process.argv

function algo(num) {

	while (num != 1) {
		if (num % 2 == 0) {
			num = num / 2
			print(num)
		} else {
			num = 3 * num + 1
			print(num)
		}
	}

	return process.exit()
}

if (argv.length != 3) {
	print("The program needs an argument in order to run.\nPlease read the README.")
} else {
	let result = algo(parseInt(argv[2]))
	print(result)
}

#!/usr/bin/env node

const print = console.log
const argv = process.argv[2]

function algo(num) {
	num = parseInt(num)

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

let result = algo(argv)
print(result)

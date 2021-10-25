#!/usr/bin/env node

const print = console.log
const argv = process.argv

function algo (num) {
  const totalNum = []
  totalNum.push(num)
  print(num)

  while (num != 1) {
    if (num % 2 == 0) {
      num = num / 2
      totalNum.push(num)
      print(num)
    } else {
      num = 3 * num + 1
      totalNum.push(num)
      print(num)
    }
  }

  print('\nTotal Number : ' + totalNum.length)
  return process.exit()
}

if (argv.length != 3) {
  print('The program needs an argument in order to run.\nPlease read the README.')
} else {
  const result = algo(parseInt(argv[2]))
  print(result)
}

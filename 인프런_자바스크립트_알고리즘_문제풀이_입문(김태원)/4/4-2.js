// 자연수 -> 뒤집기 -> 소수이면 소수를 출력

const isPrimeNumber = (number)=>{
  if (number===1) return false
  if (number===2) return true
  for (let i=2;i<=Math.floor(Math.sqrt(number));i++){
    if (number % i ===0) return false
  }
  return true
}

const sol = (N,arr)=>{
  const answer =[]
  const integers = arr.split(' ');
  integers.forEach(integer => {
    const reverseInteger = Number(integer.split('').reverse().join(''))
    // let tmp = integer % 10 // 1의 자리
    // reverseInteger = reverseInteger * 10 + tmp
    // integer = parseInt(integer / 10) 

    if (isPrimeNumber(reverseInteger)) answer.push(reverseInteger)
  });
  return answer.join(' ')
}
console.log(sol('9','32 55 62 20 250 370 200 30 100')) // 23 2 73 2 3
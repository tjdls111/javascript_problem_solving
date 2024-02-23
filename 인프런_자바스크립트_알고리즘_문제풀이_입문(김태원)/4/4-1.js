// 자릿수의 합이 가장 큰 자연수 찾기. 같다면 수가 큰 것을 출력.
const sol = (N,numbers)=>{
  let answer = 0
  let maxDigitSum = 0
  const numbersArr = numbers.split(' ')
  for (let number of numbersArr){
    let sum =0 
    for (let y of number){
      sum += parseInt(y)
    }
    if (sum === maxDigitSum){
        answer = Math.max(answer, number)
    }
    else if (sum > maxDigitSum){
      maxDigitSum = sum
      answer = number
    }
  }
  return answer
}
console.log(sol('7','128 460 603 40 521 137 123')) //137
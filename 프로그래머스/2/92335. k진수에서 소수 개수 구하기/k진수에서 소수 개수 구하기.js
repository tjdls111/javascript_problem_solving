const jinsu =(n,k)=>{
    let changed_number = ''
    while (n){
        changed_number = n % k + changed_number
        n = parseInt(n / k) 
    }
    return changed_number
}


// 제곱근 올림한 값까지만 하면 됨 (예 16- 1X16, 2X8, 4X4 까지 하면 됨. 8X2, 16X1은 이전에 체크했음. / m = a*b라면 a, b 중 하나는 루트 n 이하.)
function isPrime(num) {
  if (num === 1) return false
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if (num % i === 0){
      return false; 
    }
  }
  return true; 
}


function solution(n, k) {
    const candidates = jinsu(n,k).split('0').filter(val=> val!=='').map(val=>parseInt(val))
    console.log(candidates)
    let answer = 0;
    for (candidate of candidates){
        if (isPrime(candidate)) answer +=1
        
        console.log(candidate, isPrime(candidate))
    }
    return answer;
}
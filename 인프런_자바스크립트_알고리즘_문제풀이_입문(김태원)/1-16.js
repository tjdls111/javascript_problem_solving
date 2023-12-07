// 중복 문자 제거
const sol = voca => {
  const vocaList = voca.split('')
  const removeDuplicatedStringList = new Set(vocaList)
  return [...removeDuplicatedStringList].join('')
}
console.log(sol('ksekkset')) //kset

// indexOf 사용 가능(가장 처음으로 그 문자가 발견될 때 인덱스 리턴)

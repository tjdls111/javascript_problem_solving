// 9개 숫자 중 7개 숫자의 합이 특정 값(100)이 되어야 함. (여러 정답 가능)
// 조합 문제? 9C7 했을 때 합이 100 

// 9개 중 2개를 뽑아서 (전체 값의 합) - (그 두값의 합)이 100인지 확인해도 됨

const getCombinations = (numbers, selectNumber)=> {
	const result = []

	// 1개만 고를 때
	if (selectNumber === 1) return numbers.map(el=>[el])
	
	// python의 for i in array 와 비슷한 것 같다! 
	numbers.forEach((fixed, index, origin)=>{

		// 고정된 위치를 제외하고 바뀔 수 있는 부분
		const rest = origin.slice(index+1)
		
		// 고정된 걸 빼고, 나머지 조합 구하기
		const vals = getCombinations(rest, selectNumber-1)
		
		// 고정된 것과 나머지 조합 합치기
		const attached = vals.map(el=>[fixed, ...el])
		
		result.push(...attached)
		
	})
	return result
}
const sol = (heights)=>{
	const height_list = heights.split(' ').map(i=>Number(i))
	// console.log('height_list', height_list)
	const combinations = getCombinations(height_list, 7)

	combinations.forEach(seven_dwarf_heights=>{
		const seven_dwarf_heights_sum = seven_dwarf_heights.reduce((accumulator, currentValue)=>accumulator+currentValue,0)
		if (seven_dwarf_heights_sum === 100) {
			console.log(...seven_dwarf_heights)
			return false
		}
		})
	
	
}

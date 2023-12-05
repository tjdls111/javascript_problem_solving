function solution(sides) {
 	const lines=sides.sort()
	const max_line= lines.pop()
	if (max_line < lines.reduce((a, b) => a + b, 0)) return 1
    return 2
}
// M번의 테스트에서 A가 B보다 항상 등수가 앞서면 멘토가 될 수 있음.
// 멘토-멘티 관계가 될 수 있는 경우의 수 

const sol = (N,M,...grades)=>{
  // 각 학생의 등수들을 리스트에 저장
  const students = new Map()
  for (let i = 0; i<N;i++){
    students.set(i,[])
  }
  for (grade of grades){
    student_grade= grade.split(' ').map(g=>parseInt(g))
    
    for (let i = 0;i<N;i++){
      const rank = i + 1
      const student_num = student_grade[i] -1

      const origin_student_grades = students.get(student_num)
      origin_student_grades.push(rank)
    }
  }

  // 2중 for문으로 학생과 학생의 시험별 등수 비교
  let answer = 0

  for (let i = 0; i<N; i++){  // 학생 A
    for (let j = 0; j<N; j++){ // 학생 B
      let isIMentor = true
      if (i===j) continue
      
      for (let k =0;k<M;k++){ // 시험
        if (students.get(i)[k] <= students.get(j)[k]){
          isIMentor = false
          break
        }
      }
      if (isIMentor) answer+=1
  }
  }
  return answer
}

console.log(sol('4','3','3 4 1 2','4 3 2 1','3 1 4 2')) // 3
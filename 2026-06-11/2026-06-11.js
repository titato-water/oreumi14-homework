const scores = [85, 92, 58, 74, 66, 100, 43];
const names = ["민수", "지은", "도윤", "서연", "하준", "유나", "지호"]
function getGrade(score) {
  if (score >= 90 ) {
    return "A"
  }
  else if (score >= 80) {
    return "B"
  }
  else if (score >= 70) {
    return "C"
  }
  else if (score >= 60) {
    return "D"
  }
  else {
    return "F"
  }
}

console.log (getGrade(92))
console.log (getGrade(74))
console.log (getGrade(43))

console.log("-------------------------------------------")

function isPassed(score) {
  if (score >= 60) {
    return true
  }
  else {
    return false
  }
}
console.log(isPassed(85))
console.log(isPassed(43))

console.log("-------------------------------------------")

function getPassedScores(scores) {
  return scores.filter(function(score) {
    return score >= 60
  });
}
console.log(getPassedScores(scores))

console.log("-------------------------------------------")

function getScoreMessages(scores) {
  return scores.map(score => {
    const grade = getGrade(score)
    
    return  score + "점은" + grade + "등급입니다"
  })
}
console.log(getScoreMessages(scores))

console.log("-------------------------------------------")

function printScoreReport(scores) {
  scores.forEach(score => {
    const grade = getGrade(score)
    const passed = isPassed(score) ? "합격" : "불합격"
    console.log(score + "점: " + grade + "등급," + passed)
  })
}
printScoreReport(scores)

console.log("-------------------------------------------")

function printSummary(scores) {
  let sum = 0;
  scores.forEach(score => {
    sum += score
  })
  const average = sum / scores.length
  
  const passedScores = getPassedScores(scores) 
  const messages = getScoreMessages(scores)
  
  console.log("평균 점수: " + average + "점" )
  console.log("합격 점수: " + passedScores)
  console.log("점수 설명: ")
  messages.forEach(message => {
    console.log(message)
  })
  // console.log(messages)
}
printSummary(scores)

console.log("-------------------------------------------")

function printNamedScoreReport(names, scores) {
  scores.forEach((score, index) => {
    const name = names[index]
    const grade = getGrade(score)
    const passed = isPassed(score) ? "합격" : "불합격"

    console.log(name + ": " + score + "점, " + grade + "등급, " + passed)
  })
}
printNamedScoreReport(names, scores)
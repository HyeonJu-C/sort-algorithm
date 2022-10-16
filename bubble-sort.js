function bubbleSort(array) {
  let sorted = [...array]

  // 1. sorted.length 대신 sorted.length - 1을 사용한 이유
  const last = sorted.length - 1
  // => [5, 2, 1, 3]을 정렬한다고 생각해 보자.
  // => last = 3이 될 것이다.
  // => i = 0일 때 j는 0, 1, 2에 대한 loop를 실행한다.
  // => 이 때 j와 j+1을 비교하므로 마지막에 sorted[2] > sorted[3]을 비교하게 된다.
  // => 따라서 sorted.length를 사용해서 sorted[3] > sorted[4](undefined)을 비교할 필요가 없다

  // 2. 배열이 정렬되었으면 반복문 빠르게 빠져나오기
  // => 거의 정렬되어있는 배열에서는 유용하게 사용할 수 있다.
  for (let i = 0; i < last; i++) {
    let isComplete = true
    for (let j = 0; j < last - i; j++) {
      // console.log(sorted, sorted[j], sorted[j + 1])

      if (sorted[j] > sorted[j + 1]) {
        const temp = sorted[j]
        sorted[j] = sorted[j + 1]
        sorted[j + 1] = temp
        isComplete = false
      }
    }
    if (isComplete) return sorted
  }
  return sorted
}
console.log(bubbleSort([1, 4, 3, 4, 6]))

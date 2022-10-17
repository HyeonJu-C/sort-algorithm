function bubbleSort(array) {
  // 1. array.length 대신 array.length - 1을 사용한 이유
  const last = array.length - 1
  // => [5, 2, 1, 3]을 정렬한다고 생각해 보자.
  // => last = 3이 될 것이다.
  // => i = 0일 때 j는 0, 1, 2에 대한 loop를 실행한다.
  // => 이 때 j와 j+1을 비교하므로 마지막에 array[2] > array[3]을 비교하게 된다.
  // => 따라서 array.length를 사용해서 array[3] > array[4](undefined)을 비교할 필요가 없다

  // 2. 배열이 정렬되었으면 반복문 빠르게 빠져나오기
  // => 거의 정렬되어있는 배열에서는 유용하게 사용할 수 있다.
  for (let i = 0; i < last; i++) {
    let isComplete = true
    for (let j = 0; j < last - i; j++) {
      // console.log(array, array[j], array[j + 1])

      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        isComplete = false
      }
    }
    if (isComplete) return array
  }
  return array
}
console.log(bubbleSort([1, 4, 3, 4, 6]))

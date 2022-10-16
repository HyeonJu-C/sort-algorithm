/*
강의 내용)
1. bubble 정렬과 비슷하다. 
2. 차이점은, selection 정렬의 경우 최솟값을 찾아 정렬해 나아간다는 것이다.
3. ex) [5, 3, 4, 1, 2]
    => 초기 최솟값: 5
    => 5와 3을 비교한다. 최솟값: 3
    => 3과 4를 비교한다. 최솟값: 3
    => 3과 1을 비교한다. 최솟값: 1
    => 1과 2를 비교한다. 최솟값: 1
    => 첫번째 cycle이 종료되었을 때 최솟값 1이 가장 첫번째로 이동, 초기 최솟값 5는 원래 1의 자리를 채운다.
    => [1, 3, 4, 5, 2]
    => 초기 최솟값: 3... 
    => 이 과정을 반복한다. 
+) bubble sort와의 또 다른 차이점은, inner loop 밖에서 swap이 이루어진다는 것이다. 
    => 따라서, swap이 일어나지 않음 !== 정렬이 완료됨. 
    => 드물지만, swap의 수를 최소한으로 줄이고 싶을 때, bubble 대신 selection 정렬을 사용할 수 있다. 
*/

function selectionSort(array = []) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      // console.log(array, array[minIndex], array[j])
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }

    // minIndex가 초기값(i)이 아닐 때에만 swap 한다.
    if (minIndex !== i) {
      const temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
      // ES2015
      // [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
  }
  return array
}

console.log(selectionSort([1, 2, 5, 5, 3]))

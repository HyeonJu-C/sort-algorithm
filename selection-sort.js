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
    const temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
    // ES2015
    // [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}

console.log(selectionSort([1, 2, 5, 5, 3]))

/*
insertion sort)
1. 주어진 배열의 일부를 점진적으로 정렬하며, 전체를 정렬한다. 
2. ex) [5, 3, 4, 1, 2]
    => 초기 정렬된 배열: [5]
    => 3을 정렬된 배열 [5]의 올바른 위치에 삽입한다(정렬된 배열의 아이템과 크기를 비교한다). => 정렬된 배열: [3, 5]
    => 4를 [3, 5]의 올바른 위치에 삽입한다. => 정렬된 배열: [3, 4, 5]
    => 1을 [3, 4, 5]의 올바른 위치에 삽입한다. => 정렬된 배열: [1, 3, 4, 5]
    => 2를 [1, 3, 4, 5]의 올바른 위치에 삽입한다. => [1, 2, 3, 4, 5]
*/

function insertionSort(array = []) {
  let i = 0
  let sorted = [array[i]]
  for (let j = i + 1; j < array.length; j++) {
    const index = sorted.findIndex((value) => value > array[j])
    if (index === -1) {
      sorted.push(array[j])
    } else {
      sorted.splice(index, 0, array[j])
    }
  }
  return sorted
}

console.log(insertionSort([3, 1, 4, 2, 5]))

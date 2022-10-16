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

/*
pseudo code)
1. pick second element in the array. => currentValue 
2. compare the second element with the one before it. 
3. swap if necessary. 
4. continue to next element. 
5. if it is in the incorrect order, 
    iterate through the sorted portion to place the element in right place.
+) [1, 2, 9, 76, 0] => currentValue가 0일 때 
    => 0(i)과 76(j = i-1)을 비교한다. 
    => 0 < 76 이므로 76을 한칸 뒤로 옮기면, 배열은 [1, 2, 7, 76, 76]이 된다. 
    => 0(i)과 7(j = i-2)을 비교한다. => [1, 2, 7, 7, 76]
    => 0(i)과 2(j = i-3)을 비교한다. => [1, 2, 2, 7, 76]
    => 0(i)과 1(j = i-4)을 비교한다. => [1, 1, 2, 7, 76]
    => [0, 1, 2, 7, 76]
*/

function insertionSort2(array = []) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i]
    // 52번째 line에서 j에 접근하기 위해, j를 var로 선언함
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = currentValue
  }
  return array
}

console.log(insertionSort2([1, 2, 9, 76, 0]))

arr1 = [1,2,3,4,5];
delete arr1[2]; 
console.log(arr1);

// output : VM49:3 (5) [1, 2, empty, 4, 5]
// the size of the array still shows 5 eventhough a value is deleted

arr2 = [2,4,3,1,7];
arr2.splice(1,2);
console.log(arr2)
// output : (3) [2, 1, 7]
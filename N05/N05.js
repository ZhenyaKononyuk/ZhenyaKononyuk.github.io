"use strict"
function treeSum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += treeSum(elem);
		} else {
			sum += elem;
		}
	}
	return sum;
}
console.log(treeSum([ 5, 7, [ 4, [2], 8, [1,3], 2 ], [ 9, [] ], 1,8]));

// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(matrix === undefined) return [];

  return matrix.reduce((acc, arr, i) => {
		if(i % 2 === 0) {
			return acc.concat(...arr);
		} else {
			return acc.concat(...arr.reverse());
		}
	}, []);
}

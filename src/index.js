// You should implement your task here.

module.exports = function towelSort(matrix) {
    const sortedArray = [];
    if (matrix === undefined) return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i === 0 || i % 2 === 0) {
            sortedArray.push(...matrix[i]);
        } else {
            sortedArray.push(...matrix[i].reverse());
        }
    }
    return sortedArray;
};


// You should implement your task here.
// console.log("-------------------------------------------------------------")
module.exports = function towelSort (matrix) {
    let matrixNew = [];
    for (i in matrix){
    //   console.log( i%2 ===0)
      if ( i%2 ===0 ) {matrix[i].sort(function(a, b) {return a - b;})}
      else  {matrix[i].sort(function(a, b) {return b - a;})}
  
      for(x in matrix[i]){      
        matrixNew.push(matrix[i][x]);
      }    
      }
  console.log(matrixNew); // [1, 2, 3, 4, 5]
    return matrixNew;
  }

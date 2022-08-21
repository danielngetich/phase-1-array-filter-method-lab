function findMatching(array,value){
  return(array.filter(function(arr){
    return (arr.toUpperCase()===value.toUpperCase());
  }))
}

function fuzzyMatch(array,value){
  return (array.filter(function(arr){
    return(arr.slice(0,2)===value)
  }))
}
function matchName(array,value){
  return (array.filter(function(arr){
    return (arr.name===value)
  }))
}
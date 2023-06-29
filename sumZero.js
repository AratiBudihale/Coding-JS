//find out first pair whose sum is zero
//[-5,-4,-3,-2,0,2,4,6,8]
//[-4,4]
function SumZero(array){
    for(let num of array){
        for(let j=1;j<array.length;j++){
            if(num+array[j]===0){
                return[num,array[j]];
            }
        }
    }

}
const result=SumZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);

//o[n^2] quadartic time complexity
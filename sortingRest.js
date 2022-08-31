// function sortingRest(...rest){
//     let result=rest.sort();
//     return result;
// }
// //let values=[2,43,123,32,1,3,8,0,23,5];
// console.log(sortingRest(2,43,123,32,1,3,8,0,23,5));


// let fruits=["banana",'apple','citrus','beetroot','honey',]
// let sot=fruits.sort();
// console.log(sot);


// fruit sorting
function fruit(...values){ // rest parameter now not performing sorting
    let res=values.sort();
    console.log(res);

}
let lst=['grapes',"banana",'apple','citrus','beetroot','honey','orange','lemon']
fruit(lst);
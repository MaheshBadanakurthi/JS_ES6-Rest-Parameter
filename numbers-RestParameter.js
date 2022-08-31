// // without using rest parameter.
// // function restList(a,b,c){
// //     return  a*b*c;
// // }
// // let result=restList(2,3,5);
// // console.log(result);

// // arrow function
// // let listRest=(x,y,a)=>x*y*a;
// // console.log(listRest(2,3,5));

// //--------------------------------------------------------------
// // using Rest parameter

// // function restlist(...value){
// //     let total=0// to start and to store the values we use any  value.
// //     for (let i of  value){ // every time we have to take one parameter anf added to next so we have to use for loop
// //         total=total+i // total+=i also same meaning.
        
// //     }
// //     return  total;// should place after the for loop
// // }
// // console.log(restlist(12,6,12));


// //---- one parameter with rest parameter
// function SingleParameter(a,...any){ // here we can take b, c, ...... it leaves all n takes rest.
//     let result=1;
//     for (let j of any){
//         result=result*j;
//     }
//     console.log(`the answer is ${result}`);
// }
//   let cv=SingleParameter(12,5,4); // we are calling that function
//  // here first value will take a (a=12),  we are not performing any action with a so a is not executing.
//   //console.log(SingleParameter(12,5,4));// we are printing tha value.


// ///


// // wrong using rest parameter
// function anyName(...rest,a){

// }
// function anyName(...rem,a,b){
    
// }
// function anyName(x,...st,a){
    
// }
// function anyName(...rest,...remain,d){
    
// }
// function anyName(...rest,...any,...fun){
    
// }

// function num(a,...rem){
//   let result=
// }
// let arra=num[2,33,22,44]
// console.log(num(arra));




// function multiply(multiplier, ...theArgs) {
//   return theArgs.map((element) => multiplier * element);
// }

// const arr = multiply(2, 15, 25, 42);
// console.log(arr); // [30, 50, 84]






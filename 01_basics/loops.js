
// for (let i=0; i<5; i++) {
//     console.log(i);
// }

// let arr = [10, 20, 30, 40, 50];
// for (let num of arr) {
//     console.log(num);
// }

// for (let i=0; i<5; i++) {
//     console.log(arr[i]);
// }

// let i=0;
// while (i>0) {
//     console.log(i);
//     i--;
// }
// console.log("after while loop");
// i=0;
// do {
//     console.log(i);
//     i--;
// } while (i>0);

// let newarr = arr.map(neww => neww+10);


// console.log(newarr);
// function change(i){
    //     return i + 1;
    // }
    
    // let a = arr.map(change);
    // console.log(a);
    
    // let newarr2 = arr.map(function(neww) {
        //     return neww**20;
        // });
        
        // console.log(newarr2);
        
let arr = [10, 20, 30, 40, 50];
// let filteredarr = arr.filter(num => num>20);
// console.log(filteredarr);

let redarr = arr.reduce((a, current) => a + current, 0);

a=0;
for(let num of arr){
    a = a + num;
}

console.log(redarr);

var aysncAdd = (a,b) => {
    return new Promise((resolve,reject) =>{
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else {
            reject('Arguments must be numbers');
        }
    });
}

aysncAdd(1,10).then((res) => {
    console.log(res);
    return aysncAdd(res,12);
}).then((res) => {
    console.log('Chained result: ',res);
}).catch((errorMsg) => {
    console.log(errorMsg);
});

// var somePromise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve('Hey, It worked!');
//         //reject('Unable to fullfill promise');
//     }, 2500);
    
// });

// somePromise().then((msg) => {
//     console.log(msg);
// },(errorMsg) => {
//     console.log(errorMsg);
// });
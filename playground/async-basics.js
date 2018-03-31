console.log('Starting app');

setTimeout(() => {
    console.log('Inside Callback');
},2000);

setTimeout(() => {
    console.log('Second setTimeout');
},0);

console.log('Finishing up');
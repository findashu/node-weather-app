var getUser = (id,callback) => {
    var usr = {
        id:32,
        name:'Ashu'
    };
    setTimeout(() =>{
        callback(usr);
    },3000);
    
}

getUser(32, (userObj) => {
    console.log(userObj);
})
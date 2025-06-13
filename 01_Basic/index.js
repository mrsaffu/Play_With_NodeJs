console.log("node js is working ");
// node.js : node.js is a free open-source cross-plateform Java-Script runtime environment. it is used to buld bakendside applicatuion .

// core module : a module with comes with node instalation 
let os = require('os') // give the information about your operation System 
let fs=require('fs')  // use for perform file releted operatin
console.log(os. platform());
console.log(os.hostname());
let userInfo =os.userInfo()


fs.appendFile('user.text',` user operating details : ${JSON.stringify(userInfo)}\n `, (e)=>{
    if(e) throw e
    console.log("data added susseccfully ");
})

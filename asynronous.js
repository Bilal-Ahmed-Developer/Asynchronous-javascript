// let a = prompt('what is your name');
// let b = prompt('what is your age');
// let c = prompt('what is your favourite color');
// console.log(a + " is " + b + " year old has " + c + " favourite color. ");

// console.log('start');

// setTimeout(() => {
//      console.log('im good');

// }, 3000);
// console.log('end');

// call back
/*
function loadScript(src,callbacks) {
     var script = document.createElement("script");
     script.src = src;
     script.onload =function(){
          console.log('loaded script with Src: ' + src);
          callbacks(null, src);
     }
     script.onerror = function () {
          console.log('loaded script with Src: ' + src);
          callbacks(new Error("got some error"))
     }
     document.body.appendChild(script)
};
function hello(error, src) {
     if (error) {
          console.log(error);
          return
          
     }
     alert('hello world'+ src)
}
function goodMorning(error, src) {
     if (error) {
          console.log(error);
          return
          
     }
     alert('hello world'+ src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", goodMorning)*/


//   PROMISES
// let PROMISES=new Promise(function(resolve, reject){
//      alert('alert in promise')
//      resolve(64)
// })
// console.log("hello 1");
// setTimeout(() => {
//      console.log('hello in 2seconds');

// }, 2000);
// console.log("hello3");
// console.log(PROMISES);

// Promise.then() .catch()
// let p1 = new Promise((resolve, reject) => {
//      console.log("promise is pending");
//      setTimeout(() => {
//           console.log('promise is fulfiled');
//           resolve(true);
//           // reject(new Error('some error occured'))

//      }, 2000);

// })
// let p2 = new Promise((resolve, reject) => {
//      console.log("promise is pending");
//      setTimeout(() => {
//           // console.log('promise is reject');
//           // resolve(true);
//           reject(new Error('some error occured'))

//      }, 2000);

// })
// p1.then((value) => {
//      console.log(value);

// })
// console.log();

// p2.then((value) => {
//      console.log(value);

// }, (error) => {
//      console.log(error);

// })


// Promise.then() .catch() ep56

// let p1 = new Promise((resolve, reject) => {
//      setTimeout(() => {
//           console.log("p1 resolved in 2 seconds");
//           resolve(true);
//      }, 2000);
// })
// p1.then((value) => {
//      console.log(value);
//      let p2 = new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve("promise p2")
//           }, 2000);

//      })
//      return p2
// }).then((value) => {
//      console.log("we are done"); 
// })
// const loadScript = (script)=>{
//      let script = document.createElement("script");
//      script.type = 'text/javascirpt';
//      script.src = src;
//      document.body.appendChild(src);
//      script.onload = ()=>{
//           resolve(1)
//      }
//      script.onerror = ()=>{reject(0)}

// } 
// function sayHello() {
//      let you = prompt("What's your name? ");
//      console.log("Hello", you + "!");
// }    
// sayHello()
// function add(a,b){
//      return a+b
// }
// document.write(add(1,3))

// let add2 = (a,b) => a+b
// document.write(add2(1,6))

// const student = {
//      fName :"Bilal",
//      lName : "Ahmed",
//      fullName : function () {return this.fName +" "+ this.lName},

// }
// document.write(student.fullName())

// recursive function
// function grecursive(nr){
//      console.log("start function iteration",nr);
//      if (nr > -20) {    
//           grecursive(--nr)    
//      }else{
//           console.log("function completed");

//     }
//     console.log("function end ",nr);

// }
// grecursive(5)

// function factorial(nr) {
//      console.log(nr)
//       if (nr === 0) {
//            return 1
//       }
//       else{
//            return nr*factorial(--nr)
//       }
// }
// console.log(factorial(5))
// let functionVariable = function () {
//      console.log("Not so secret though.");
// }
// // functionVariable();
// function doFlexibleStuff(a) {
//      a();
//      console.log("Inside doFlexibleStuffFunction.");
// }
// let anotherfunction =() => {
//      console.log("this is another function ")
// }
// doFlexibleStuff(anotherfunction);

// let youGotThis = function () {
//      console.log("You're doing really well, keep coding!");
// };
// setTimeout(youGotThis, 1000);
// setInterval(youGotThis, 2000);

// let val = 10;
// function tester(val){
//  val += 10;
//  if(val < 100){
//  return tester(val);
//  }
//  return val;
// }
// tester(val);
// console.log(val);

// let a =10;
// function tester(a) {
//      a += 10;
//      if (a < 100) {
//           return tester(a)
//      }
//      return a 
// }
// tester(a);
// console.log(a);

// var addFive1 = function addFive1(num) {
//      return num + 2;
//      };
//      let addFive2 = (num) => num + 2;
//      console.log(addFive1(14))

// const one = ()=> console.log("this is function one");
// const two = ()=> console.log("this is function two");
// const three = ()=> {
//      console.log("this is function three");
//      one();
//      two();
// }
// const four = () => {
//      console.log("this is function four");   
//      setTimeout(one,0);
//      three();
// }
// four();

// Call back funciton
// function doFlexiblestuff(executestuff) {
//      executestuff()
//      console.log("do flexible stuff");

// }
// const func1 = ()  => {console.log("hello from function 1");}
// const func2 = ()  => {console.log("hello from function 2");}
// doFlexiblestuff(func1)
// doFlexiblestuff(func2)

// function judge(grade){
//      switch (true) {
//           case grade === "A+":
//           console.log("you got an ",grade, ":Brilliant");
//               break;
//           case grade === "A":
//           console.log("you got an ",grade, ":Exellent");
//               break;
//           case grade === "A":
//           console.log("you got a ",grade, ":Good");
//               break;
//           case grade === "A":
//           console.log("you got a ",grade, ":ok litte bit improve");
//               break;
//           case grade === "A":
//           console.log("you got a ",grade, ":poor you need to improve");
//               break;    
//           default:
//              console.log("you are failed",grade);

//      }
// }

// function getGrade(percentage,callback) {
//      let grade
//      switch (true) {
//           case percentage >= 90 :
//             grade="A+"
//                break;
//           case percentage >= 80 :
//             grade="A"
//            break;
//           case percentage >= 70 :
//              grade="B"
//              break;

//           case percentage >= 60 :
//              grade="C"
//              break;
//           case percentage >= 50 :
//              grade="D"
//                 break;   

//           default:
//              grade="F"
//                break;
//      }
// callback(grade)
// }
// getGrade(96,judge);
// setTimeout(() => {
//      console.log("this is settimeout");

// },3000);
// setInterval(() => {
//      console.log("this is settimeintervel");

// }, 5000);

// function greet(fullName) {

// };
// function secondFunction(username,callback) {
//      let name = username.split(" ");
//      callback(name);

// }
// secondFunction("BilalAhmed",greet)

// const promise = new Promise(function(resolve,reject){
//      //Execution
//      reject("javascript")

// })
// promise.then(function(result){
//      //on Success
//      console.log(result)
// },function(error){
//      //on Error
//      console.log(error);

// })

// function prom (a,b){
//      return new Promise(function(resolve,reject){
//           console.log("fetching data");
//           var c = a/b;
//           setTimeout(() => {
//                if (a,b) {
//                     resolve(`Promise Successful: ${c}`)
//                }
//                else{
//                     reject("Promise error")
//                }   
//           }, 3000);

//      })
// }
// let onFulfilment =(result)=>{
//     console.log(result);
// }
// let error = (error)=>{
//    console.log(error);
// }

// prom(9,0).then(onFulfilment).catch(error);

// console.log(prom(false))

// const promise = new Promise((resolve, reject) => {
//      reject("failed");
//     }).then(value => {
//      console.log(value);
//      return "we";
//      })
//      .then(value => {
//      console.log(value);
//      return "can";
//      })
//      .then(value => {
//      console.log(value);
//      return "chain";
//      })
//      .then(value => {
//      console.log(value);
//      return "promises";
//      })
//      .then(value => {
//      console.log(value);
//      })
//      .catch(value => {
//      console.log(value);
//      })

// function saySomething(x) {
//      return new Promise(resolve => {
//      setTimeout(() => {
//      resolve("something" + x);
//      }, 2000);
//      });
//     }
// async function talk(y) {
//      const words = await saySomething(y);
//      console.log(words);
//     }
//     talk(2);
//     talk(4);
//     talk(8);

// let p1 = new Promise(function(resolve,reject){
//      setTimeout(() => {
//           console.log("resolved after 2 seconds");

//      }, 2000);
// })
// p1.then((value)=>{
//      console.log(value);
//      let p2 = new Promise((resolve,reject)=>{
//           setTimeout(() => {
//                resolve("Promise in .then 1")

//           }, 2000);
//      })
//      return p2
// }).then((value)=>{
//      console.log('we are done')
//      return p2
// })\\

// const loadScript = (src)=>{
//      return new Promise((resolve,reject)=>{
//      let script=document.createElement("script");
//      script.type="text/javascript";
//      script.src = src;
//      document.body.appendChild(script)
//      script.onload = ()=>{
//          resolve("Script has been loaded")  
//      }
//      script.onerror = ()=>{reject(0)}
// })     
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
// p1.then((value)=>{
//      console.log(value);
//      return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
// }).then((value)=>{
//      console.log("Second script has been loaded")
// })
// .catch((error)=>{
//      console.log("our server is pagal hogia ha");

// })

//    Multiple handler in promises
// let p2 = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         resolve(1)
//         alert("iam resolve")  
//      }, 2000);
// })
// p2.then(()=>{
//      console.log("Congratulation");
//      return new Promise ((resolve,reject)=>{
//           setTimeout(() => {
//                resolve(6)

//           }, 3000);
//      })
// }).then((value)=>{
//      console.log(value)
// })
// p2.then(()=>{
//      alert("HUrray")
// })

// let pro = new Promise((resolve,reject)=>{
//      console.log('promise pending')
//    setTimeout(() => {
//         console.log("promis fulfiled");
//    }, 3000);
// })
// pro.then(())

// let name = "Bilal";
// name1 = name; 
// name = "Ahmed";
// console.log(name,name1)

// let str="name=Bilal;age=45;prof=dev;color=red";
// let str2 = str.parse([0,3]);
// console.log(str2)

// const getDatafromServer = (cb)=>{
//     console.log("getting data from server...")

//     setTimeout(() => {
//          console.log("data received from server.");
//          let data = '555';
//          cb(data) ;
//     }, 2000);

// };
// const callback = (data) => {
//      console.log(data);
// }
// getDatafromServer(callback);

// const donewithAlluParatha = (message) =>{
//      console.log(message);

// }

// const promise = new Promise((resolve,reject)=>{
//      let mood = 6;
//      setTimeout(() => {
//      if (mood > 5) {
//                resolve("please eat ")
//      }
//      else{
//           reject("too tired")
//      }    
//      }, 3000);

// })
// promise.then((Response)=>{
//      console.log(Response)
// })
// .catch((error) => {
//      console.log(error);
// });

// async function main1() {
//      try {

//      const result = await promise();
//      console.log(result)
//      }     
//       catch (error) {
//          console.log(error) 
//       }finally{
//            console.log("it was always run")
//       }
//      }   
// main1();

// Promise API
// let p1 = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//           resolve('value of p1');
//      }, 4000);
// });
// let p2 = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//           // resolve('value of p2');
//           reject("sorry error")
//      }, 2000);
// });
// let p3 = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//           resolve('value of p3');
//      }, 3000);
// });

// let p_all = Promise.all[(p1,p2,p3)]
// console.log(p_all);

// let p1 = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//           resolve("p1 resolve")
//      }, 1000);
// });
// let p2 = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//           resolve("p2 resolve")
//      }, 1000);
// });
// let p3 = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//           resolve("p3 resolve")
//      }, 1000);
// });
// let pro_all = Promise.any[(p1,p2,p3)];
// pro_all.then((value)=>{
//        console.log(value);
// })

//          async and await 
// async function wheather(){
// let karachiWheather= new Promise ((resolve,reject)=>{
//      setTimeout(() => {
//           resolve("31 deg")
//      }, 1000);
// })
// let islmabadWheather = new Promise((resolve,reject)=>{
//      setTimeout(() => {
//           resolve("21 deg")
//      }, 2000);

// })
//      // karachiWheather.then(alert);
//      // islmabadWheather.then(alert);
//      let karachiW = await karachiWheather;
//      let islmabadW = await islmabadWheather;
//      return[karachiW,islmabadW];
// }
// console.log("welcome to wheather control");

// console.log(wheather());
// async function cherry() {
//      console.log("i am cherry ")
// }
// const main = async ()=>{
//      let a = await wheather()
//      let b = await cherry()
// }
// main()

// let fs = require('fs');

// console.log('1');

// fs.readFile('test.txt', 'utf8', function(error, data) {
//     if (error) {
//          throw error;
//     }

//     console.log('2');
// });

// console.log('3');
// setTimeout(() => {

// }, timeout);
// setInterval(() => {

// }, interval);



// Error Handling: try and catch
// setTimeout(() => {
//      try { 
//           console.log(hjo)

//      } catch (error) {
//           console.log(error)
//      }
// },1000);
// setTimeout(() => {
//      console.log("Fecthing username and password..")
// }, 2000);
// setTimeout(() => {
//      console.log("Hacking Rahul facebook.. please wait")
// }, 3000);
// setTimeout(() => {
//      console.log("fetching username and password..")
// }, 4000);


// The Error Object & Custom Errors
// try {
//      let age = prompt();
//      age = Number.parseInt(age)
//      if (age>=140) {
//           throw new ReferenceError("Please insert your real age");
//      }
//      else{
//           console.log("ok you are enter an system");
//      }
// } catch (error) {
//    console.log(error.name);
//    console.log(error.message);
//    console.log(error.stack);       
// }


//    The finally Clause
// const f = () => {
//      try {
//           let a = 0;
//           console.log(program);
//           console.log("program is running");
//      } catch (error) {
//           console.log(error)
//           console.log("this is rorr");
          
//      }
//      finally {
//           console.log("I, am finally and i am always run");

//      }
// }
// f()
//  project 

//Callback Hell Or Callback pyramid
// function makeFryAnda(Callback){
//      setTimeout(() => {
//           Callback("Anda is ready to eat")
//      }, 3000);
// }
// function toastBread(cb) {
//      setTimeout(() => {
//           cb("toast Done")
//      }, 2000);
// }
// function makeTea(cb) {
//      setTimeout(() => {
//           cb("Tea is ready to drink")
//      }, 2000);
// }
// function breakFast(cb) {
//      setTimeout(() => {
//           cb("Break Fast is Done")
//      }, 2000);
// }
// function goWork(cb) {
//      setTimeout(() => {
//           cb("Going to work ")
//      }, 2000);
// }
// toastBread(function(param2){
//      console.log(param2);
//      makeFryAnda(function (param3) {
//            console.log(param3);
//             makeTea(function (param4) {
//                 console.log(param4);
//                 breakFast(function (param5) {
//                            console.log(param5)
//                           goWork(function (param6) {
//                                  console.log(param6)
//           })
//      })  
// })
// })
// })
// console.log("end")

//Promise

function getPromise(params) {
     return new Promise((resolve,reject)=>{
          let wifeMood = 9;
          setTimeout(() => {
               if (wifeMood>=5) {
                    resolve("toast is ready")
               } else {
                    reject("wife mood is bad")
                    
               }
          }, 1000);
        
     })     
}
function getPromise1(params) {
     return new Promise((resolve,reject)=>{
          let wifeMood = 27;
          setTimeout(() => {
               if (wifeMood>=5) {
                    resolve("toast is ready1")
               } else {
                    reject("wife mood is bad1")
               }
          }, 1000);
     })     
}
// getPromise().then((arg)=>{
//   console.log(arg);
//   return getPromise1();

// }).then((arg1)=>{
//    console.log(arg1)
// })
// .catch((error)=>{
//      console.log(error)
// })

//Async and Await
async function getResult() {
     try {
          let result = await getPromise1();
          console.log(result)
          let result1 = await getPromise();
          console.log(result1)
          
     } catch (error) {
          console.log(error)
     }
}
getResult()
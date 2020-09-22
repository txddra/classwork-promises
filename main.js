// 1.
// Create a promise called myFirstPromise  

let myFirstPromise = new Promise(function (resolve, reject) {
  let bool = true;
  let rand = Math.floor(Math.random() * 10) + 1;
  if (!bool) {
    setTimeout(() => {
      //i hope that this is the correct way to do this
      reject('Cannot computer random number')
      // resolve(rand)
    }, 2000)
  } else {
    setTimeout(() => {
      resolve(rand)
    },200)
  }
})

myFirstPromise.then((data) => {
  //stuck here
  console.log(`I have my random number ${data} and I will multiply it by 5.`)
  let x = data * 5;
  return x;
}).then((x) => {
    console.log(`Here is the result of my random number multiplied by 5 : ${x}`)

  }

).catch((err)=>{
console.log(err)
});


// Inside the promise
// Create a boolean variable check and set it to true
// Create a variable rand and it should calculate a random number between 1 and 10


// If the check boolean is true it should resolve with the
// result of a random number between one and ten

// if the check boolean is false, it should reject with
// a string that says: Cannot computer random number

// Both resolve and reject should only occur after 2 seconds

// Now call the promise you created and chain your thenables.
// In your first thenable
// console.log('I have my random number <the number> and I will multiply it by 5')
// Multiply your random number by 5 and pass the data to the next thenable

// In your second thenable log a String
// that says `Here is the result of my random number multiplied
// by 5: < place number result here>`




// 2.
// create a function called getDataPromise that returns a promise
// inside the function create an error variable and set it to boolean false
// create a conditional that handles the rejection if there is an error with a message 'Something went wrong'
// Create a set timeout function that after 4 seconds returns the data (we are mimicking a 3rd party API call)



// consume your promise
// take the result and log the data
// take data and output 'Hello Joe Peters' for each object
// This should be 3 separate steps
// Handle the error in case there is one
// Test by setting your error variable to false then true

let data = [{
    firstName: 'Joe',
    lastName: 'Peters'
  },
  {
    firstName: 'Doug',
    lastName: 'Lawson'
  },
  {
    firstName: 'Sandra',
    lastName: 'Mathers'
  },
];


// let getDataPromise = new Promise(function(resolve, reject){
//   let bool = false;
//   if(!bool){
//     setTimeout(() => {
//       reject('Something went wrong');
//     }, 4000)
//   }
// });



// getDataPromise(data)
// .then((data)=>{
//   data.map((person) => {
//     console.log(`Hello ${person.firstName} ${person.lastName}.`);
//   });
// })
//   // console.log()
// // }

// // )
// //   let full = Object.Values(data)
// // console.log(full)

// // }
// // ).then((person) =>{
// // console.log(`hello ${data.firstName} ${data.lastName}.);

// // })
// .catch((error) =>{
//   console.log(error);
//   console.log('Something went wrong')
// });

// console.log(data.firstName)
// console.log(getDataPromise)

//solution

const getDataPromise =(myData)=>{
let error = false;

  return new Promise((resolve, reject)=>{
    if(error) reject('Something went wrong');
    setTimeout(()=>{
      resolve(myData);
    }, 4000)
  });

};
//second part consume
getDataPromise(data)
.then((gottenData)=>{
  // console.log(gottenData)
  gottenData.forEach((item)=>{
    console.log(`Hello ${item.firstName} ${item.lastName}`);
  })
})
.catch((err)=>{
  console.log(err)
})
// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
// The function should log the message to the console after the specified delay time.
async function message(words, delay){
   await new Promise (resolve=> setTimeout(resolve, delay));
    console.log(words)

}
message ("Yekebedi", 5000)
// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data 
// when given a user ID. Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.
async function getUserData(userIds){
 for await (let userId of userIds){
  let data = await userData(userId)

  console.log(data)
 }
}

 getUserData([23,68,90])

// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error. 
//  Write a function that calls performTask() and logs a custom success message if the task is successful, 
//  and a custom error message if there's an error.

async function performTask(successMessage, errorMessage){
  let task = await performTask();
  if (task) {
    console.log (successMessage);
  }
  else {
    console .log(successMessage);
  }

}


  
// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

 // express: A popular web framework for Node.js that simplifies building web applications and APIs.
 // app: An instance of the express framework used to define routes and handle HTTP requests.

app.get("/assistant/greet",(req,res)=>{
  const name = req.query.name;
  const day = new Date().getDay();

  // app.get(): Defines a GET endpoint at /assistant/greet.
 // req: Represents the incoming HTTP request.
// req.query.name: Retrieves the value of the name query parameter (e.g., if the URL is /assistant/greet?name=John, name will be John).
// new Date().getDay(): Retrieves the current day of the week as a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday).

  if(day==1){
    let obj ={
    "welcomeMessage":`Hello, ${name}! Welcome to our assistant app!`,
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
  return res.send(obj);
  }
  
 //   If it's Monday (day == 1), a JSON object with:
 // welcomeMessage: A personalized greeting with the name.
 // dayMessage: A motivational message for Monday.
// res.send(obj): Sends the JSON response back to the client.

  else if(day==5){
    let obj ={
      "welcomeMessage":`Hello, ${name}! Welcome to our assistant app!`,
    "dayMessage": "It's Friday! The weekend is near!"
  }
  return res.send(obj);
  }

  //If it's Friday (day == 5), the API responds with:
  // welcomeMessage: The personalized greeting.
  // dayMessage: A cheerful message about the approaching weekend.
  
  else{
  let obj ={
    "welcomeMessage":`Hello, ${name}! Welcome to our assistant app!`,
    "dayMessage": "Have a wonderful day!"
  }
  return res.send(obj);
  }
})


app.get('/',function(req,res){
  return res.send('<h1>Hello world </h1>')
})


 //   This sets up a basic route at / that returns a simple HTML response (<h1>Hello world</h1>).
 // It acts as a fallback or default endpoint for the app.



/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});


// app.listen(PORT, callback): Starts the server on the specified port (3000).
// The callback function logs a message to the console indicating that the server is running.






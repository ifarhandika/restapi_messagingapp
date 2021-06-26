# restapi_messagingapp  

This is a REST API for a Messaging App  
  
//Users Routes  
http://localhost:5000/users (GET: Fetch all users, POST: Create a new user)  
http://localhost:5000/users/login (POST: User logins)  
http://localhost:5000/users/:id (DELETE: Delete a user by id)
  
//Rooms Routes  
http://localhost:5000/rooms (GET: Fetch all room conversation, POST: Create a new room conversation)  
http://localhost:5000/rooms/:roomId (GET: Fetch all messages/conversation by roomId)  
  
//Messages Routes  
http://localhost:5000/messages (POST: Send a new message)  
  
  
GUIDES:
- To create a new user, {username, password} must be filled  
- To login, {username, password} must be filled  

- To send a message to another user, first you have to create a room. To create a room, {initiator, chatWith} must be filled  
- To see the users' conversation between another user, just pass in the roomId  
  
- To send a message, you have to fill the {message, sender, idRoom}. {message} is the message you want to send, {sender} is the username of the user senders', and {idRoom} is the room conversation that you want to talk to, which is {chatWith}.  




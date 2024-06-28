Basic Microservices for Online Shopping Platform

Make sure all three services are running fine locally before doing anything. Also, here we are using RabbitMq and Reddis too so set them up locally so you would not face any issues while running the APIs locally.

-> ALso change the .env.ex to .env in all three services so it can connect to the database.

Test command for user service: curl -X POST http://localhost:3001/users/register -H "Content-Type: application/json" -d '{"name":"", "email":"@example.com", "password":""}'

Use the above command to test whether the user service is working fine. 





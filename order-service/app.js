const express = require("express")
const app = express();
const connectDB = require('./db/connect.js')
app.use(express.json());
require('dotenv').config()
const amqplib = require("amqplib");
//const isAuthenticated = require("../isAuthenticated.js");
const Order = require('./models/order.js');

var channel, connection;

 async function connect() {
   connection = await amqplib.connect('amqp://rabbitmq:5672')
   channel= await connection.createChannel();
  await channel.assertQueue("ORDER", {durable: false});

}

function createOrder(products) {
  let total = 0;
  for (let t=0;t<products.length;t++) {
    total += products[t].price;
  }
  const newOrder = new Order({
    products,
    total_price: total
  });
  newOrder.save();
  return newOrder;
}

connect().then(() => {
  channel.consume("ORDER", data => {
  console.log("Consuming ORDER queue");
  const { products } = JSON.parse(data.content);
  const newOrder = createOrder(products)
  channel.ack(data);
  channel.sendToQueue("PRODUCT",Buffer.from(JSON.stringify({ newOrder })))
})
}); 



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(3003, console.log('Server is listening on port 3003...'))
    } catch (error) {
      console.log(error)
    }
}

start()

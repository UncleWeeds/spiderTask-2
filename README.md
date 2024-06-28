# Basic Microservices for Online Shopping Platform

# Setting up the Online Shopping Platform on Your PC
Prerequisites:

Make sure you have Docker installed on your PC. If not, you can download and install Docker from the official website: https://docs.docker.com/get-docker/

Git: Install Git if you don't have it on your PC. You can download Git from here: https://git-scm.com/downloads

# Step 1: Clone the Repository
Open a terminal or command prompt and run the following command to clone the repository to your local machine:

$ git clone <repository_url>

Replace <repository_url> with the URL of your Git repository.

# Step 2: Navigate to the Project Directory
Change your current working directory to the project folder:
$ cd online-shopping-platform

# Step 3: Start the Online Shopping Platform
Run Docker Compose to start all the services:
$ docker-compose up -d

This command will build and start the containers defined in the docker-compose.yml file. The -d flag runs the containers in the background.

Verify that all the containers are running:
$ docker-compose ps

You should see a list of running containers for the user service, product service, order service, Nginx, RabbitMQ, and Redis.

# Step 4: Access the Online Shopping Platform
The Online Shopping Platform is now up and running on your PC. You can access it through your web browser:
Online Shopping Platform: http://localhost/
or also using Nginx

# Step 5: Scaling the Microservices with Docker Swarm (If you want to scale the services!!!)
Docker Swarm is a native clustering and orchestration tool provided by Docker for managing a swarm of Docker nodes. It allows you to deploy and manage services across multiple nodes in a cluster.

Here's how you can scale a specific microservice using Docker Swarm:

Initialize Docker Swarm (if you haven't already):
$ docker swarm init

Open a terminal or command prompt.

Navigate to the project directory (if you're not already there):
$ cd online-shopping-platform

Deploy the services defined in the docker-compose.yml file as a stack in Docker Swarm:
$ docker stack deploy -c docker-compose.yml spider

This command deploys the services defined in docker-compose.yml and creates a stack named "spider" in Docker Swarm.

# Step 6: Stopping the Online Shopping Platform
To stop the Online Shopping Platform and remove the swarm of containers, run the following command:

$ docker swarm rm spider

This will stop and remove the containers.

That's it! Now you've successfully scaled the microservices using Docker Swarm. Docker Swarm will manage the distribution of replicas across the nodes in the swarm to handle more traffic and increase the availability of your application.

# Setting up Environment Variables
Before running the Online Shopping Platform, you must configure the necessary environment variables using the .env file. Here's how you can set it up:

Copy .env.sample File:

Start by copying the provided .env.sample file in the root directory of all three services.
Rename the copied file to .env. The filename must be exactly .env for Docker Compose to pick up the environment variables automatically.
Edit the .env File:

Open the .env file in a text editor of your choice.
Locate the placeholder value for MONGO_URI, and replace it with your actual MongoDB URI.
Example:

MONGO_URI=mongodb+srv://your_username:your_password@your_cluster_url/your_database_name?retryWrites=true&w=majority
Replace your_username, your_password, your_cluster_url, and your_database_name with your MongoDB credentials and cluster information.

#FlowChart

![user interface](https://github.com/UncleWeeds/Task/assets/122569256/20cbb28b-95c7-409c-bb50-783c77125fe6)









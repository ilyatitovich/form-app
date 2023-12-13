# React + Node.js Form App

This repository contains a simple React and Node.js application Dockerized for easy development and deployment. User can send a request to the server and receive the result in the form of found records in a file or a message that nothing was found.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git`

2. **Navigate to the project directory:**

    ```bash
    cd your-repo`

3. **Build the Docker images:**
    `docker-compose build`

4. **Start the Docker containers:**
    `docker-compose up`

    This will start the client and server containers. You can add the `-d` flag to run them in the background:
    `docker-compose up -d`

5. **Access the App:**

    - The client app is available at [http://localhost:3000](http://localhost:5173/).
    - The server is running at [http://localhost:5000](http://localhost:5000/).

## Stopping the App

To stop the running containers, use the following command:
`docker-compose down`

This will stop and remove the containers. If you used the `-d` flag during startup, you can also stop the containers individually:
`docker-compose stop client server`

## Troubleshooting

- If you encounter issues or need to troubleshoot, check the Docker Compose logs:
    `docker-compose logs -f`

    This will show the real-time logs from all containers.
- Make sure the necessary ports (3000 for the client, 5000 for the server) are not in use by other applications.
- Ensure your firewall allows traffic on the specified ports.

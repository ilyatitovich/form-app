# React + Node.js Form App

This repository contains a simple React and Node.js application Dockerized for easy development and deployment. User can send a request to the server and receive the result in the form of found records in a file or a message that nothing was found.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ilyatitovich/form-app.git

2. **Navigate to the project directory:**

    ```bash
    cd form-app

3. **Build the Docker images:**

    ```bash
    docker-compose build

4. **Start the Docker containers:**

    ```bash
    docker-compose up

5. **Access the App:**

    - The client app is available at [http://localhost:3000](http://localhost:3000/).
    - The server is running at [http://localhost:5000](http://localhost:5000/).

## Stopping the App

To stop the running containers, use the following command:

```bash
  docker-compose down
  ```

## Troubleshooting

- If you encounter issues or need to troubleshoot, check the Docker Compose logs:

    ```bash
    docker-compose logs -f
    ```

    This will show the real-time logs from all containers.
- Make sure the necessary ports (3000 for the client, 5000 for the server) are not in use by other applications.
- Ensure your firewall allows traffic on the specified ports.

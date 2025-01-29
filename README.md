# README.md

# Minimal Frontend Project

## Description
This project is a minimalistic frontend application designed for testing purposes with NGINX. 

## Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or later)
- [Docker](https://www.docker.com/)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Oluwademiladeogo/minimalisticapp.git
    cd minimalisticapp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Application
### Locally
1. Start the server:
    ```sh
    node server.js
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Using Docker
1. Build the Docker image:
    ```sh
    docker build -t minimalisticapp .
    ```

2. Run the Docker container:
    ```sh
    docker run -p 3000:3000 minimalisticapp
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or inquiries, please contact us at [contact@thebickersteth.com](mailto:contact@bickerstethdemilade.com).

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Docker](https://www.docker.com/)
# Food_Del

Food_Del is a comprehensive food delivery application that allows users to browse, order, and track their favorite meals from local restaurants. The project is built using modern web technologies and follows a microservices architecture to ensure scalability and maintainability.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User Authentication: Sign up, log in, and manage user profiles.
- Restaurant Management: Add, update, and delete restaurant details.
- Menu Management: Add, update, and delete menu items.
- Order Management: Place, track, and manage orders.
- Payment Integration: Secure payment processing.
- Real-time Notifications: Order status updates and notifications.
- Responsive Design: Mobile-friendly user interface.

## Architecture

The project follows a microservices architecture with the following components:

- **Frontend**: Built with React and Vite, the frontend provides a responsive user interface for customers and restaurant managers.
- **Admin Panel**: A separate admin panel for managing restaurants, menus, and orders.
- **Backend**: Node.js and Express-based API server to handle business logic and database operations.
- **Database**: MongoDB for storing user, restaurant, menu, and order data.
- **Authentication**: JWT-based authentication and authorization.
- **Payment Gateway**: Integration with a third-party payment processor (e.g., Stripe).

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT
- **Payment Integration**: Stripe API
- **State Management**: Redux
- **Real-time**: Socket.IO

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Stripe Account (for payment integration)

### Clone the Repository

```bash
git clone https://github.com/Shivam8299/Food_Del.git
cd Food_Del
```

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

#### Admin Panel

```bash
cd admin
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```env
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
```

## Usage

### Running the Backend Server

```bash
cd backend
npm start
```

### Running the Frontend

```bash
cd frontend
npm run dev
```

### Running the Admin Panel

```bash
cd admin
npm run dev
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or questions, please contact:

- **Shivam8299** - [GitHub Profile](https://github.com/Shivam8299)

Feel free to explore, contribute, and provide feedback to improve this project. Happy coding!

# My Favorite Place

## Overview

**My Favorite Place** is a React-based travel application designed to help users explore famous destinations across India. The app offers a smooth and interactive experience, allowing users to discover iconic places in a specific state or district. The app integrates **MUI (Material UI)** for a clean and user-friendly interface.

The website also supports authentication, allowing authenticated users to explore additional features and content. A carousel on the homepage presents places with their theme slogans, and users can click to view more details about these places. There’s also an activity section showing what users can do in these places.

## Key Features

- **Homepage Carousel**: A carousel with images and slogans for different famous places.
- **Authentication**: Users must sign up or log in to access specific routes or features.
- **Search Functionality**: Search for places by name, and view detailed descriptions.
- **User-Friendly UI**: Designed with Material UI (MUI) to ensure a clean, responsive, and intuitive interface.
- **Light & Dark Mode**: Toggle between light mode and dark mode based on user preference.
- **Short Notifications**: Notifications to display user authentication status or other important information using **React-Toastify**.
- **Local Storage for User Data**: Authentication data is stored in local storage to maintain the user's session.

## Technologies Used

- **React**: Frontend framework to build the dynamic user interface.
- **Material UI (MUI)**: For stylish, responsive, and modern UI components.
- **React-Router**: For navigation and routing between different parts of the app.
- **React-Toastify**: For smooth, user-friendly notifications (e.g., login/logout notifications).
- **Local Storage**: To store authentication data for maintaining user sessions.
- **CSS/Styled Components**: For custom styling and ensuring a responsive design.

## Features Breakdown

### 1. **Authentication & Routing**:

- Home route and basic pages are accessible to all users.
- Certain routes (like exploring more places) require user authentication.
- Users can register, log in, and log out.
- User data is stored in **localStorage** for session persistence.

### 2. **Homepage**:

- A dynamic carousel displaying famous places with slogans.
- Brief descriptions of selected places, including activities that can be done.
- Non-authenticated users can explore the homepage, but they are restricted from viewing more places without logging in.

### 3. **Explore Places**:

- Authenticated users can search for places by name.
- Detailed information about each place can be viewed by clicking on it.
- Users can explore a list of famous places and learn more about them.

### 4. **Dark & Light Mode**:

- Users can toggle between dark and light themes to suit their preference.

### 5. **Responsive Design**:

- The application is fully responsive, providing a seamless experience across desktop and mobile devices.

## Demo

You can try the live demo of the application here:

[Live Demo](https://favoriteplace01.netlify.app/)

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/favoriteplace.git
   cd favoriteplace
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/favoriteplace.git
   ```

2. **Install the necessary dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000` to view the application in your local environment.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to fork, modify, or contribute to the project! Enjoy exploring India's famous places! 🌍

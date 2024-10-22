Todo App

This project is a simple Todo application built with React, TypeScript, and Vite. It includes state management with Redux Toolkit, routing with React Router, and UI components from Material-UI (MUI). The project also uses ESLint and Prettier for code linting and formatting.
Getting Started
Prerequisites

Make sure you have the following installed:

    Node.js (version 16 or higher)
    npm

Installation

    Clone the repository:

bash

git clone https://github.com/yourusername/todo-app.git

    Navigate to the project directory:

bash

cd todo-app

    Install the dependencies:

bash

npm install

Running the Application

To start the development server with Vite:

bash

npm run dev

The app will be available at http://localhost:5173.
Building for Production

To build the app for production:

bash

npm run build

The production build will be output to the dist/ folder.
Running the Preview Server

To preview the production build:

bash

npm run preview

Project Structure

    src/: Contains the application source code.
        components/: Reusable UI components.
        store/: Redux store and slices.
        pages/: Pages used in the app for routing.
        models/: TypeScript interfaces and Zod schemas for validation.
    public/: Static assets.
    eslint.config.js: ESLint configuration.
    tailwind.config.js: Tailwind CSS configuration.
    tsconfig.json: TypeScript configuration.

Linting and Formatting

To check for linting errors, run:

bash

npm run lint

This project uses ESLint for linting and Prettier for code formatting.
Available Scripts

    npm run dev: Starts the development server.
    npm run build: Builds the app for production.
    npm run preview: Previews the production build.
    npm run lint: Runs ESLint to check for linting errors.

Dependencies

The app uses the following major libraries:

    React (18.3.1): Frontend framework
    Vite (5.4.8): Fast build tool for modern web apps
    Redux Toolkit (2.3.0): State management
    React Router (6.27.0): Client-side routing
    MUI (6.1.4): Material-UI for design components
    Date-fns (2.29.3): Date manipulation library
    Zod (3.23.8): TypeScript-friendly schema validation
    Lucide React (0.453.0): Icon library

Dev Dependencies

    ESLint (9.11.1): Linter for identifying code errors
    Prettier (3.3.3): Code formatter
    TypeScript (5.5.3): Typed JavaScript
    Tailwind CSS (3.4.14): Utility-first CSS framework

# Management App

A full-stack application for creating, editing, and deleting notes with a React Native mobile frontend and NestJS backend.

## Project Overview

This application consists of two main components:
- **Backend**: NestJS API with PostgreSQL database
- **Frontend**: React Native mobile application with Expo

## Features

- ✅ CRUD operations for notes
- ✅ RESTful API with 5 endpoints
- ✅ PostgreSQL database with Docker
- ✅ React Native mobile UI
- ✅ State management
- ✅ Internationalization (i18n) - English and Ukrainian
- ✅ E2E testing with Detox
- ✅ Docker containerization

## Tech Stack

### Backend
- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Containerization**: Docker & Docker Compose
- **Language**: TypeScript

### Frontend
- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **State Management**: React hooks
- **Internationalization**: i18next
- **HTTP Client**: Axios
- **Testing**: Detox for E2E tests
- **Language**: TypeScript

## Project Structure

```
managementApp/
├── backend/                 # NestJS API server
│   ├── src/
│   │   ├── modules/
│   │   │   └── notes/      # Notes module with CRUD operations
│   │   └── main.ts
│   ├── docker-compose.yml  # Database configuration
│   └── package.json
├── mobile/                 # React Native mobile app
│   ├── app/               # Expo Router pages
│   ├── components/        # Reusable UI components
│   ├── services/          # API services
│   ├── i18n/             # Internationalization
│   ├── e2e/              # E2E tests
│   └── package.json
└── README.md
```

## API Endpoints

The backend provides the following REST endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/{id}` | Get specific note by ID |
| POST | `/notes` | Create a new note |
| PUT | `/notes/{id}` | Update existing note |
| DELETE | `/notes/{id}` | Delete note by ID |

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd managementApp
```

### 2. Backend Setup

#### Start the Database

```bash
cd backend
docker-compose up -d
```

This will start a PostgreSQL database on port 5433.

#### Install Dependencies

```bash
npm install
```

#### Environment Configuration

Create a `.env` file in the backend directory:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=management_app
PORT=5000
```

#### Run the Backend

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:5000`

### 3. Frontend Setup

#### Install Dependencies

```bash
cd mobile
npm install
```

#### Run the Mobile App

```bash
# Start Expo development server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run on web
npm run web
```

## Testing

### Frontend E2E Tests

```bash
cd mobile

# Build for E2E testing
npm run e2e:build

# Run E2E tests
npm run e2e:test

# Run specific E2E test
npm run test:working
```

## Features in Detail

### State Management
The application uses React hooks for state management:
- `useState` for local component state
- Custom hooks for API calls and data fetching
- AsyncStorage for persistent data

### Internationalization (i18n)
The app supports multiple languages:
- **English** (default)
- **Ukrainian**

Language switching is available through the settings screen.

### Database Schema

The notes table includes:
- `id` (Primary Key)
- `title` (String)
- `content` (Text)
- `createdAt` (Timestamp)
- `updatedAt` (Timestamp)

## Development

### Code Quality

Both backend and frontend use ESLint and Prettier for code formatting:

```bash
# Backend
cd backend
npm run lint
npm run format

# Frontend
cd mobile
npm run lint
```

### Database Migrations

The backend uses TypeORM for database management. Entity changes are automatically synchronized in development mode.

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure Docker is running
   - Check if PostgreSQL container is started: `docker ps`
   - Verify database credentials in `.env` file

2. **Mobile App Won't Start**
   - Clear Expo cache: `expo start -c`
   - Check if backend API is running
   - Verify network connectivity

3. **E2E Tests Fail**
   - Ensure Android emulator is running
   - Check Detox configuration
   - Verify app is built for testing

### Ports Used

- **Backend API**: 5000
- **PostgreSQL**: 5433
- **Expo Dev Server**: 8081



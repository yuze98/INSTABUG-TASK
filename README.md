 <h1>INSTABUG TASK</h1><img src="https://github.com/yuze98/INSTABUG-TASK/assets/65419885/23d65a06-dece-4fd3-992f-4285d9786ac2" alt="image" width="100" height="auto">
 
# Brief

## Instabug 
[Instabug](https://www.instabug.com/) is a technology company that provides software tools for mobile app developers to facilitate bug reporting, performance monitoring, and user feedback collection. Their solutions are designed to enhance the quality and reliability of mobile applications by enabling developers to identify and fix issues more efficiently.

## Task
Build a mobile app using **React Native** ✔️ or **Flutter** that displays a list of movies fetched from an API. Implement the network call functions as native modules for React Native or platform-specific code for Flutter, with the calls initiated from the respective framework.

# Features 📱
- Scroll through a list of movies.
- Press on a movie to show its details.

# Network API Implementation 🌐
I implemented the network API call functions with native code in **Kotlin** for Android and **Swift** for iOS.

# Getting Started

## Step 1: Start the Metro Server
First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the root of your React Native project:

```bash
# using npm
npm start
```

## Step 2: Install Dependencies

Before running your application on Android or iOS, you need to install dependencies.

### For Android

- navigate to the root of your React Native project and run:

```bash
# using npm
npm install
```

### For iOS

- navigate to the ios directory of your React Native project and run:


## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

```

### For iOS

```bash
# using npm
npm run ios

```

If everything is set up _correctly_, you should see the Cinema app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Running Unit Tests for MovieService Native API Calls 🧪
This guide explains how to run the unit tests for the `MovieService` using Jest.

### Setup
1- Ensure Dependencies are Installed: Make sure all project dependencies are installed by running:

```bash
npm install
```

2- Navigate to the Test Directory: If not already there, navigate to the test directory:

```bash
cd __tests__
```
## Run the Test
Run the Jest test runner for the specific test file:

```bash
npx jest MoviesApi.test.tsx
```
## Understanding the Tests

### MoviesApi Test Suite

#### The MoviesApi test suite contains two main tests:

- Successful Data Fetch: This test verifies that the getMovieListNative function resolves with the expected data when the request is successful.

- Failed Data Fetch: This test ensures that the getMovieListNative function correctly throws an error when the request fails.

## Test Structure

- Mocking Dependencies: The tests mock external dependencies such as NativeModules and react-native-config to isolate the functionality being tested.
 
- Mock Data: Sample movie data is used to simulate API responses.
 
- Assertions: The tests use expect and toEqual statements to verify that the results match the expected values.

## Congratulations! :tada:

You've successfully ran the Movies React Native App. :partying_face:



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).



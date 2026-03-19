# React Native User Directory

A clean, responsive, and robust React Native application that fetches user data from an external API and displays it in a searchable, scrollable list. Users can tap on any profile to view detailed contact and company information.

## Download APK

You can download the Android APK directly to evaluate the application.

**Download Link:**
[Download APK from Expo](https://expo.dev/accounts/devendra.mi/projects/GraphketingAssignment/builds/a8b68c3c-8935-4171-bc45-f3a68d0c465a)

**Scan to Download:**
<p align="left">
  <img src="./qr-code.png" width="200" alt="QR Code for APK" />
</p>

## Overview

This project is built to demonstrate core React Native development skills, including API integration, state management, component reusability, and clean UI/UX design. It utilizes a modern tech stack centered around Expo and JavaScript.

## Features

- **API Integration:** Fetches user profiles from `jsonplaceholder.typicode.com/users`.
- **Search Functionality:** Real-time filtering of the list by checking the Name and Email fields.
- **Detailed Views:** Navigating to a specific user shows comprehensive data, including nested JSON fields like address and company details.
- **Pull-to-Refresh:** Users can swipe down on the list to refetch data from the API.
- **Graceful Error Handling:** Displays clean fallback UI during loading states or when API requests fail. Actions like opening email clients or phone dialers are handled safely even on simulators.

## Tech Stack

- **Framework:** React Native (Expo)
- **Language:** JavaScript
- **Navigation:** React Navigation (Stack Navigator)
- **Network Requests:** Axios
- **Icons:** Lucide React Native

## Folder Structure

The application follows a modular and clean folder structure to ensure maintainability:

- `src/components/`: Reusable UI elements (`ProfileSnippet`, `SearchHeader`, `LoadingView`).
- `src/logic/`: Core logic files (`api.js`).
- `src/navigation/`: App routing and stack navigation setup (`AppNavigator.js`).
- `src/screens/`: Main screen configurations (`PeoplesList`, `PersonDetails`).

## Running Locally

To run this project on your local machine:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npm start
   ```
4. Press `a` to open in an Android emulator, `i` to open in an iOS simulator, or scan the terminal QR code using the Expo Go app on a physical device.

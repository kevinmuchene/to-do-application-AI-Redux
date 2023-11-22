# Todo Application(OpenAI) - React with useContext and Redux

## Overview

This repository contains a simple todo application built using React, TypeScript, and Material UI. The primary objective of this application is to demonstrate two different state management strategies: React's useContext hook and Redux. By comparing these strategies, developers can understand the trade-offs and decide which approach suits their project's needs.

## Features

1. State Management: Implements useContext hook and Redux for state management across components.
2. TypeScript Integration: Utilizes TypeScript for static type checking in both state management approaches.
3. Reusable Components: Leverages custom hooks and reusable components to adhere to the Single Responsibility Principle.

## Branches

1. useContext-branch: Contains the implementation using React's useContext hook for state management.
2. redux-branch: Features Redux for more complex state management scenarios.

# Getting Started

## Prerequistes

1. Node.js
2. npm or yarn package manager

## Installation
1. Clone the repositiory:

   git clone https://github.com/kevinmuchene/to-do-application-useContext-or-redux.git

2. Switch to the desired branch

   For useContext hook implementation: git checkout useContext-branch
   
   For Redux implmentation: git checkout redux-branch

3. Install the dependencies

   npm install

4. Start the development server

   npm run dev

## Comparison

The useContext-branch is simpler and best suited for applications with a less complex state or for those who prefer a minimalistic approach. The redux-branch, while initially requiring more setup code, offers a robust solution for larger applications with more complex state management needs.

Both branches demonstrate the usage of TypeScript for type safety and how it integrates seamlessly with different state management strategies.


### React + TypeScript + Vite

# Tone Analyzer

The Tone Analyzer is a simple React application that allows users to analyze the tone of their text inputs using the Groq chat API. This project serves as a demonstration of how to integrate a third-party API into a React application for natural language processing.

## Features

- Text area for user input
- Button to analyze the tone of the entered text
- Displays the analysis result below the input area

## Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A superset of JavaScript that adds static typing.
- Vite: A fast build tool and development server for modern web projects.
- Groq SDK: A JavaScript SDK to interact with the Groq chat API.
- CSS: For basic styling of the components.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

  ```zsh
   git clone https://github.com/roshidoniy/ToneAnalyzer.git
   cd tone-analyzer
  ```
 2. Install the dependencies:

```zsh
npm install
```
 3. Set up environment variables:
Create a .env file in the root of the project and add your Groq API key:

```VITE_GROQ_API_KEY=your_api_key_here```

Running the Application

Once the setup is complete, you can start the application using:

```zsh
npm run dev
```

The app will be available at http://localhost:5173 in your web browser (default Vite port).


Usage

 1. Enter your text in the provided textarea.
 2. Click the “Check” button to analyze the tone of your input.
 3. The result will be displayed below the input area.

Code Overview

Components

 • App.tsx: The main application component that renders the ToneAnalyzer component.
 • ToneAnalyzer.tsx: Contains the logic for text input and tone analysis. It manages user input and displays the analysis result.
 • groqChat.ts: Utility file for interacting with the Groq API to analyze the tone of the input text.

ToneAnalyzer Component

This component utilizes React hooks to manage state and references:

 • useRef: For accessing the textarea DOM element.
 • useState: For managing message state and the disabled state of the button during analysis.

Groq API Integration

The getMessage function in groqChat.ts sends a request to the Groq API and receives a response with the tone analysis based on the user input.
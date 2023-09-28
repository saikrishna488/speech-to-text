# Speech to Text Converter

## Introduction

This is a Speech to Text Converter project built using ReactJS and the Speech Recognition library. This web application allows users to convert spoken language into written text in real-time. It can be a useful tool for transcription, note-taking, and accessibility purposes.

## Features

- Real-time speech-to-text conversion.
- Easy-to-use interface.
- Supports multiple languages.
- Responsive design for various screen sizes.
- Cross-browser compatibility.

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/speech-to-text.git
   ```

2. Navigate to the project directory:

   ```bash
   cd speech-to-text-converter
   ```

3. Install the project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Usage

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

3. Click the "Start" button to begin speech recognition. Speak into your microphone, and the text will appear on the screen in real-time.

4. Click the "Stop" button to end speech recognition.

## Configuration

You can configure the speech recognition settings in the `config.js` file located in the `src` directory. You can change the language, recognition continuous mode, and other parameters there.

```javascript
// src/config.js
export const recognitionOptions = {
  continuous: true, // Set to true for continuous recognition
  language: 'en-US', // Change the language code as needed
};
```

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository's `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was built using the [ReactJS](https://reactjs.org/) library.
- Speech recognition is powered by the [Speech Recognition API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) available in modern web browsers.

## Contact

If you have any questions or suggestions, feel free to contact us at [oltvez@gmail.com](mailto:oltvez@gmail.com).

Happy converting speech to text!

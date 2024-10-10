import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-node'; // Use this if running on Node.js
import * as speech from '@tensorflow-models/speech-commands';

// Load the speech command recognizer model
let recognizer;

async function loadModel() {
  recognizer = speech.create('BROWSER_FFT');
  await recognizer.ensureModelLoaded();
  console.log('Model loaded');
}

// Load the model when the module is imported
loadModel();

export async function transcribeAudio(audioData) {
  if (!recognizer) {
    console.log('Model not loaded yet. Please wait.');
    return;
  }

  // Ensure audioData is in the correct format (Float32Array)
  if (!(audioData instanceof Float32Array)) {
    console.error('Audio data must be a Float32Array');
    return;
  }

  // Perform transcription
  const result = await recognizer.recognize(audioData);

  // Get the most likely transcription
  const { scores, spectrogram, words } = result;
  const maxScore = Math.max(...scores);
  const maxIndex = scores.indexOf(maxScore);
  const transcribedText = words[maxIndex];

  return transcribedText;
}

// Function to convert audio file to Float32Array
export async function audioFileToFloat32Array(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();

      try {
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const float32Array = audioBuffer.getChannelData(0); // Get the first channel
        resolve(float32Array);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
}

// Usage example:
// async function handleAudioUpload(file) {
//   try {
//     const audioData = await audioFileToFloat32Array(file);
//     const transcription = await transcribeAudio(audioData);
//     console.log('Transcription:', transcription);
//   } catch (error) {
//     console.error('Error processing audio:', error);
//   }
// }
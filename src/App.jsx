import { useState } from 'react'
import 'tailwindcss/tailwind.css';
import './App.css'
import openai from 'openai';

function App() {
  const [originalText, setOriginalText] = useState('');
  const [paraphrase, setParaphrase] = useState('');

  const handleParaphrase = async (event) => {
    event.preventDefault();
    const newParaphrase = await paraphraseText(originalText);
    setParaphrase(newParaphrase);
  };

  const paraphraseText = async (originalText) => {
    const prompt = `Paraphrase the following text: ${originalText}\nParaphrase:`;
    const completions = await openai.complete('text-davinci-002', {
      prompt,
      max_tokens: 60,
      n: 1,
      stop: ['\n'],
    });
    const paraphrase = completions.choices[0].text.trim();
    return paraphrase;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleParaphrase} className="mb-4">
        <label>
          Enter text to paraphrase:
          <textarea
            value={originalText}
            onChange={(event) => setOriginalText(event.target.value)}
            className="border border-gray-300 rounded p-2 mt-2"
            rows={4}
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
          Paraphrase
        </button>
      </form>
      {paraphrase && (
        <p className="bg-gray-100 rounded p-4 mt-2">
          Paraphrase: {paraphrase}
        </p>
      )}
    </div>
  );
}

export default App;
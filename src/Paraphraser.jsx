import { useState } from 'react';
import './index.css';
import axios from 'axios';

function Paraphraser() {
  const [originalText, setOriginalText] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleParaphrase = async (event) => {
    event.preventDefault();
    
    try {
      setLoading(true);

      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        messages: [{ role: 'system', content: `Help me paraphrase this: ${originalText}` }, { role: 'user', content: originalText }],
        model: 'gpt-3.5-turbo',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
      });

      const paraphrase = response.data.choices[0].message.content;
      setParaphrasedText(paraphrase);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Paraphraser App</h2>
        <form onSubmit={handleParaphrase} className="space-y-4">
          <textarea
            className="border border-gray-300 rounded p-2 w-full"
            rows={4}
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder="Enter text to paraphrase"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Paraphrasing...' : 'Paraphrase'}
          </button>
        </form>
        {paraphrasedText && (
          <div className="mt-4 p-4 bg-gray-200 rounded">
            <strong>Paraphrased Text:</strong>
            <p>{paraphrasedText}</p>
          </div>
        )}

        <div className="mt-4 text-xs text-gray-500">
          Powered by <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://openai.com" target="_blank" rel="noopener noreferrer">OpenAI</a>, and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>.
        </div>
      </div>
    </div>
  );
}

export default Paraphraser;
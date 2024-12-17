import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: 'Message is required' });
  }

  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT; // Ensure this is https://<your-resource-name>.openai.azure.com
  const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;

  try {
    const url = `${endpoint}/openai/deployments/${deploymentName}/chat/completions?api-version=2023-05-15`;

    const response = await axios.post(
      url,
      {
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
      }
    );

    const reply = response.data.choices[0]?.message?.content?.trim();
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Azure OpenAI API Error:', error.response?.data || error.message);
    res.status(500).json({
      message: 'Error communicating with Azure OpenAI',
      error: error.response?.data || error.message,
    });
  }
}

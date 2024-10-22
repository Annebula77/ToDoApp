const axios = require('axios');

exports.handler = async function (event) {
  const apiUrl = `http://api.calmplete.net${event.path.replace('/.netlify/functions/proxy', '')}`;

  try {
    const token = process.env.VITE_API_TOKEN;

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching data from API' }),
    };
  }
};

const axios = require('axios');

exports.handler = async function (event) {
  const apiUrl = `http://api.calmplete.net${event.path.replace('/.netlify/functions/proxy', '')}`;

  try {
    const response = await axios.get(apiUrl);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching data from API' }),
    };
  }
};

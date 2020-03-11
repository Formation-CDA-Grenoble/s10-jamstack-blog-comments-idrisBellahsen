import Axios from "axios";
require('dotenv').config();

export async function handler(event, context, callback) {
  const { body, httpMethod } = event;

  if (httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({error: `Method ${httpMethod} not allowed`}),
    };
  }

  const result = await Axios.post(
    // GraphQL endpoint
    'https://graphql.datocms.com/',
    // Requête GraphQL
    { query: body },
    // Options pour authentifier notre requête
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_KEY}`,
      }
    },
  );

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(result.data),
  };
}

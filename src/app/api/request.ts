import axios from 'axios';
import { da } from 'date-fns/locale';

//const apiUrl = 'https://jsonplaceholder.typicode.com';
// const makeRequest = async (method, endpoint, data = null, headers = {}) => {

//   console.log('makeRequest', method, endpoint, data, headers);
//   if (data) {
//     headers={
//       'Accept': '*/*',
//       'Content-Type': 'application/json',
//       'Content-Length': '256',
//     }
//     data = JSON.stringify(data);
//   }else{
//     headers['Content-Type'] = 'text/plain';
//   }
//   console.log(typeof data, headers)
//   try {
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//     const response = await axios({
//       method,
//       url: `${apiUrl}/${endpoint}`,
//       data,
//     });
// axios.post(,{}).then
//     return response.data;
//   } catch (error) {
//     console.error('Error making request:', error.message);
//     throw new Error('Hubo un error en la solicitud a la API.');
//   }
// };

const makeRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default makeRequest;

//Por ser uma url que não vai ser modificada, ela é escrita em SNAKE CASE
const API_URL = 'http://localhost:5000';

export default {
  getCountries: async function getCountries() {

    const response = await fetch(`${API_URL}/countries`);
    const responseJson = response.json();
    return responseJson;
  },
  getCities: async function getCities() {

    const response = await fetch(`${API_URL}/cities`);
    const responseJson = response.json();
    return responseJson;
  }
}
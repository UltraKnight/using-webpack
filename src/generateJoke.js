import axios from 'axios';

export const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  const res = await axios.get('https://icanhazdadjoke.com', config);
  document.getElementById('joke').innerHTML = res.data.joke;
}

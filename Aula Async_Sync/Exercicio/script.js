const axios = require('axios');

const apiKey = '6cf7fc09439a49598bf164111232706';

async function getWeatherAsync() {
  const city = 'London'; // Defina o nome da cidade que deseja obter a previsão do tempo
  const url = `https://api.weatherapi.com/v1/weather.json?key=6cf7fc09439a49598bf164111232706&q=London`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data.current;

    // Exibir os dados da previsão do tempo
    console.log(`Cidade: ${city}`);
    console.log(`Temperatura: ${weatherData.temp_c}°C`);
    console.log(`Condições climáticas: ${weatherData.condition.text}`);
    console.log(`Umidade: ${weatherData.humidity}%`);
  } catch (error) {
    console.error('Erro ao obter dados:', error.message);
  }
}

getWeatherAsync();
var axios = require("axios");

const getPics = () => {
  const config = {
    method: "get",
    url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`,
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getMarsRover = () => {
  const config = {
    method: "get",
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_KEY}`,
  };

  return axios(config)
    .then(function (response) {
      return response.data.photos;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getPreviousPhoto = (searchDate) => {
    console.log(searchDate)
  const config = {
    method: "get",
    url: `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}&date=${searchDate}`,
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
    //   console.log(error);
    });
};

module.exports = { getPics, getMarsRover, getPreviousPhoto };

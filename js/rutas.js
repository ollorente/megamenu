const axios = require('axios')

axios.get('https://ciudadbusca-v1.herokuapp.com/api/v1/pages?limit=10&page=1')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
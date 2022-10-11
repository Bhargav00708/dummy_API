var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://192.168.1.221:3000/thanos',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

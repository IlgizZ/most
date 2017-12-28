import axios from 'axios'

export const login = (eventId) => {
  return axios.post('https://us-central1-meteor-764bf.cloudfunctions.net/helloWorld', {
    eventId
  })
  // .then(function (response) {
  //   console.log(response);
  //   return response
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   return new Promise((resolve, reject) => {
  //     resolve(error)
  //   })
  // });
}

// template string - using backtick
// this returns promise object in which callback function is invoked when data is fetched
// .then(function(arr){
//   return { repos: arr[0].data, bio: arr[1].data }
// });

import axios from 'axios';

function  getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function  getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}
var helpers = {
  getGithubInfo(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => ({ repos: arr[0].data, bio: arr[1].data }));
  }
};
export default helpers;








//axios.all([]) takes in array of promises and returns promise object which when resolved returns data of both of the requests

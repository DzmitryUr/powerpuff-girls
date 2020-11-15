import axios from 'axios';

export default class ApiClient {
  constructor() {
    this.URL = 'https://api.tvmaze.com';
    this.SHOW_ID = 6771;
  }

  fetchShow() {
    return this.execRequest('get', `/shows/${this.SHOW_ID}`);
  }

  fetchEpisode(id) {
    return this.execRequest('get', `/episodes/${id}`);
  }

  fetchEpisodes() {
    return this.execRequest('get', `/shows/${this.SHOW_ID}/episodes`);
  }

  async execRequest(method, uri) {
    return axios({
      method,
      url: this.URL + uri,
    })
      .then((resData) => {
        return Promise.resolve([null, resData]);
      })
      .catch((error) => {
        return Promise.resolve([error]);
      });
  }
}

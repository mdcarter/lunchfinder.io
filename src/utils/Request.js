class Request {
  fetch(url, options = { method: 'GET' }) {
    return new Promise((resolve, reject) => {
      fetch(url, options)
        .then(res => {
          resolve(res.json());
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}

export default new Request();

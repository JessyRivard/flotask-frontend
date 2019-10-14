var encodedURI = window.encodeURI(process.env.REACT_APP_BACKEND_URL + "api/");

module.exports = {
  fetchLists: function() {
    return window.axios(encodedURI + "lists/", { method: "GET" })
    .then(response => {
      console.log(response);
      return response.data;
    });
  }
};

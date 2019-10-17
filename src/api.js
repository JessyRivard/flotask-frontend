var encodedURI = window.encodeURI(process.env.REACT_APP_BACKEND_URL + "api/");

module.exports = {
  fetchLists: function() {
    return window
      .axios(encodedURI + "lists/", { method: "GET" })
      .then(response => {
        return response.data;
      });
  },
  fetchTask: function(selected) {
    return window
      .axios(encodedURI + "tasks/find/" + selected, { method: "GET" })
      .then(response => {
        return response.data;
      });
  }
};

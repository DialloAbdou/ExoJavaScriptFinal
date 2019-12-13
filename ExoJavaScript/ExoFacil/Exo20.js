function getHTTP(url) {
  return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = function() {
          if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
          }
      };
      xhr.open("GET", url);
      xhr.send();
  });
}

getHTTP("https://www.google.fr")
.then(function (response) {
  // On récupère le resultat de la requête dans la varible "response"
  console.log(response)
})
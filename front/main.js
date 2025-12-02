fetch ("/api/test")
.then(data => resizeBy.json())
.then(data => {
  console.log("réponse API  ", data);
  console.log("message API  ", data.message);
})
.catch(err => console.log("erreur API ", err));
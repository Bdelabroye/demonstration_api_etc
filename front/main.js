fetch ("/api/test")
.then(res => res.json())
.then(data => {
  console.log("réponse API  ", data);
  console.log("message API  ", data.message);

  let undiv = document.getElementById("content");
  undiv.innerHTML = "<p>" + data.message + "</p>";
})
.catch(err => console.log("erreur API ", err));
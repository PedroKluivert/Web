let SERVER_URL = "https://cadastro-ifpb-prod.herokuapp.com";
let AUTH_URL = "/auth";
let LOGIN_URL = "/login"


var login = (login, password) => {
    if (login=="" || password==""){
        alert("Campos Vazios");
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", SERVER_URL + AUTH_URL + LOGIN_URL, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function (response) {
            if (xhr.responseText && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.login + ", " + json.password);
                window.location.href = "entrar.html";
            }
        };
        var data = JSON.stringify({"login": login, "password": password});
        xhr.send(data);
    }
}

var exit = () => {
    window.location.href = "index.html";
}

var ChangeToDiv = (pageId) => {
    let divs = document.getElementsByClassName("content");
    for (let i = 0; i < divs.length; i++){
      let divAtual = divs[i];
      if (divAtual.id==pageId){
        divs[i].style.display ="block";
      } else{
        divs[i].style.display ="none";
      }
    }
  }
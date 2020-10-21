
function joke() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if ((this.readyState == 4 && this.status == 200) || this.status == 304) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.setup + "<br>" + myObj.punchline;
      }
    };
    xmlhttp.open("GET", "https://official-joke-api.appspot.com/random_joke", true);
    xmlhttp.setRequestHeader('Content-Type', 'text/plain');
    xmlhttp.send();
  }
  
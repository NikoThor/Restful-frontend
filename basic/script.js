function dog() {
    var xmlhttp = new XMLHttpRequest(); 
        xmlhttp.onreadystatechange = function (){
            if((this.readyState == 4 && this.status == 200)|| this.status == 304) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById("animal").innerHTML = myObj.value;
            }
        };
    xmlhttp.open("GET", "https://dog.ceo/api/breeds/image/random");
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send();
}
function ajax() {
    //Creating an XHR object
    var xhttp = new XMLHttpRequest();
    //Eventlistener
    xhttp.onreadystatechange = function () {
        //condition
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = "";
            for (i = 0; i < response.length; i++) {
                output += "<hr>"+"<li>"+response[i].title +"</li>";
            }
            document.getElementById("list").innerHTML = output;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}

function redirect() {
    alert("Logout Successful!!");
    setTimeout(e => {
        // window.location.href = "logInForm.html";
        location.replace("logInForm.html");
    },
        0000);
}


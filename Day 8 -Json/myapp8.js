function loadData(){
    const div = document.getElementById("usernameList");
    var request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/users");

    request.onload = function(){
        if (request.status == 200 && request.readyState ==4){
            // console.log(this.responseText);
            var data = JSON.parse(this.responseText);
            //console.log(data);
            data.forEach(element => {
                // console.log(element.name);
                div.innerHTML += element.username + "<br>";   
            });
        }
    }

    request.send();
}
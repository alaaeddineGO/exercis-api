function getposts(userId){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+userId);
    request.responseType="json"; 
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status <300) {
            let posts = request.response;
            document.getElementById('posts').innerHTML = ""
            for (post of posts){
                let content = 
                `
                <div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                </div>
                `
                document.getElementById("posts").innerHTML+=content

            }

        }else{
            alert("error")
        }
    }
}
function getusers(){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.responseType="json"; 
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status <300) {
            let users = request.response;
            document.getElementById('posts').innerHTML = ""
            for (user of users){
                let content = 
                `
                <div id="btn" onclick="userClicked(${user.id}, this)">
                <h2>${user.name}</h2>
                <h3>${user.email}</h3>
                </div>
                `
                document.getElementById("users").innerHTML+=content
                
            }
            
        }else{
            alert("error")
        }
    }
}
getusers()
getposts()
function userClicked(id, el){
    getposts(id);
    let selectedElement = document.getElementsByClassName("selected");
    for (element of selectedElement){
        element.classList.remove("selected")
    }
    el.classList.add("selected")
}
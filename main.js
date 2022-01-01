function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=> displayPost(data))
}
const postContainer=document.getElementById('postContainer');

function displayPost(posts){
  for(const post of posts){
    const div=document.createElement('div');
      console.log(post);
    div.innerHTML=`
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
    div.classList.add('post-div');

      
      
  }
}
loadPost()
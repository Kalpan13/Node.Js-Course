const posts = [
    {title : 'Post 1', body:'Body of Post 1' },
    {title : 'Post 2', body:'Body of Post 2' },
]

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },3000);
}
function createPost(post) {
    setTimeout(()=> {
        posts.push(post);
    },10000);
}
createPost({title : 'Post 3', body : 'Body of Post 3' });
getPost();

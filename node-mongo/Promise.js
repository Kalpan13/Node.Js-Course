const posts1 = [
    {title : 'Post 1', body:'Body of Post 1' },
    {title : 'Post 2', body:'Body of Post 2' },
]

function getPost1() {
    setTimeout(() => {
        let output = '';
        posts1.forEach((post,index) => {
            output +=`<li>${post.title}</li>`;
        });
        document.getElementById("example1").innerHTML = output;
    },1000);
}
function createPost1(post) {
    setTimeout(()=> {
        posts1.push(post);
    },2000);
}

createPost1({title : 'Post 3', body : 'Body of Post 3' });       
getPost1();                              // Will display only Post1 and Post2 not Post3. 


/*
    In the above functions, if createPost() function takes more time to execute,
    then getPost() will be executed first due to Aynschronous behaviour. 

    One solution of this problem is to use callback function and call the getPost() 
    after createPost() completes its execution as shown below.

*/
const posts2 = [
    {title : 'Post 1', body:'Body of Post 1' },
    {title : 'Post 2', body:'Body of Post 2' },
]

function getPost2() {
    setTimeout(() => {
        let output = '';
        posts2.forEach((post,index) => {
            output +=`<li>${post.title}</li>`;
        });
        document.getElementById("example2").innerHTML = output;
    },1000);
}
function createPost2(post,callback) {
    setTimeout(()=> {
        posts2.push(post);
        callback();                             //This will call callback function once the execution is over.
    },2000);
}

createPost2({title : 'Post 3', body : 'Body of Post 3' },getPost2);     // Will display 3 posts. 


/* 
    If multiple functions depend on eachother, all the fuctions should be chained
    using this callback() idea. This reduces the readability of the code.

    Hence, Promises can be used for the same. If the first function is executed properly, 
    Promise will be 'Resolved' else it will be 'Rejected'. If the promise is resolved, next 
    function will be executed after that.
*/
const posts3 = [
    {title : 'Post 1', body:'Body of Post 1' },
    {title : 'Post 2', body:'Body of Post 2' },
]

function getPost3() {
    setTimeout(() => {
        let output = '';
        posts3.forEach((post,index) => {
            output +=`<li>${post.title}</li>`;
        });
        document.getElementById("example3").innerHTML = output;
    },1000);
}

function createPost3(post) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
        posts3.push(post);
        const err = false;                  // If any error occurs, err will be true.
        if(!err)
            resolve();
        else
            reject("Error : Something went wrong while adding");
        },2000);
    });
}

createPost3({title : 'Post 3', body : 'Body of Post 3' })
.then(getPost3)                              // If promise is resolved, then only getPost will be called
.catch(err => console.log(err));    
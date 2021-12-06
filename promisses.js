This is the code fro javascrip promiss
const posts = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'},
    {title: 'Post 3', body: 'This is post 3'},
];

function getPosts(){
    setTimeout(()=>{


        let output = "";
        posts.forEach((post, index) =>{
             output += `<li>${post.title}</li>`;
        });
        
        document.body.innerHTML = output;
    }, 1000);
}


function createPost(post){
    
    return new Promise((resulve, reject)=>{
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error){
                resulve();
            }
            else{
                reject('Error Creating post');
            }

        }, 2000);
    });


}


createPost({title: 'Post 4', body: 'This is post 4'}, getPosts).then(getPosts);

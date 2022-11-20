let form = document.getElementById('form');
let input = document.getElementById('input');
let posts = document.getElementById('posts');


form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log('Submitted');
    formValid();
})

let formValid = ()=> {
    if(input.value === "")
    {
        console.log('Failure');
    }else{
        console.log('Success');
        acceptData();
    }
} 

let data = {};

let acceptData = ()=>{
    data['text'] = input.value;
    createPost();
}

let createPost = ()=>{
    posts.innerHTML += 
    `
    <div class="post">
        <p>${data.text}</p>
        <span class="option">
            <i class="fa-solid fa-pen-to-square"></i>
            <i onClick='delPost(this)' class="fa-solid fa-xmark"></i>
        </span>
    </div>
    `;
    input.value = '';
}

let delPost = (e)=> {
    e.parentElement.parentElement.remove();
}
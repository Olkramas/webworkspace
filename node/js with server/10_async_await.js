//10_async_await.js

async function getPostInfo() {
    let postList = await fetch('https://jsonplaceholder.typicode.com/posts')    //게시글 리스트 배열 리턴받음
                    .then(res => res.json())
                    .catch(err => console.log(err));

    let postId = postList[0].id;
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)  //게시글 가져옴
                     .then(res => res.json());

    let commentList = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)  //답글 리스트 받기
                        .then(res => res.json());

    post.comments = commentList;
    console.log(post);
}

getPostInfo();
console.log("출력");

//함수 내부에서는 순차적으로 실행됨. 그러나 기본적으로 비동기 작업`````
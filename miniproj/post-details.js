
let url = new URL(location.href);
let postId = JSON.parse(url.searchParams.get('data'));

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => response.json())
        .then(result => {
            let div = document.createElement('div');
            div.innerText = `Userid :${result.userId}
            id: ${result.id}
            title: ${result.title}
            body: ${result.body}
            `;
            document.body.appendChild(div).className +='postDetails';
        });

        let button = document.createElement('button');
                button.innerText = 'comments';
                document.body.appendChild(button);
                button.onclick = function () {
                        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

                        .then((response) => response.json())
                        .then(result => {console.log(result);
                                let divWrapComments = document.createElement('div');
                                document.body.appendChild(divWrapComments).className +='divWrapComments';

                            for (const com of result) {
                                    let div = document.createElement('div');
                                    div.innerText = `Post Id:${com.postId}
                                    Id:${com.id}
                                    Name:${com.name}
                                    Email:${com.email}
                                    Body:${com.body}  `;
                                    divWrapComments.appendChild(div).className +='divComments';
                            }


        });

        };

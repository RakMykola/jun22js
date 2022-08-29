
fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(users => {


            for (const user of users) {

                let divWrap = document.createElement('div');
                document.body.appendChild(divWrap).className +='divwrap';
                let div = document.createElement('div');
                div.innerText = `${user.id} ${user.name}`;
                divWrap.appendChild(div).className +='user-index';
                let button = document.createElement('button');
                button.innerHTML = `<a href="./user-details.html?data=${user.id}">Details</a>`;
                divWrap.appendChild(button);

            }
        });

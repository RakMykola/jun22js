let url = new URL(location.href);
let userId = JSON.parse(url.searchParams.get('data'));

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then(result => {
                let div = document.createElement('div');
                div.innerText = `id :${result.id}
                name : ${result.name}
                username : ${result.username}
                email : ${result.email}
                street : ${result.address.street}
                suite :  ${result.address.suite}
               city :  ${result.address.city}
                zipcode :   ${result.address.zipcode}
                geoLat :   ${result.address.geo.lat}
                geoLng :   ${result.address.geo.lng}
                phone :  ${result.phone}
                website :  ${result.website}
                companyName :  ${result.company.name}
                companycatchPhrase :  ${result.company.catchPhrase}
                companyBs :  ${result.company.bs}`;
                document.body.appendChild(div);

        });
                let divButtonDetails = document.createElement('div');
                document.body.appendChild(divButtonDetails).className +='divButtonDetails';
                let button = document.createElement('button');
                button.innerText = 'post of current user';
                divButtonDetails.appendChild(button);
                button.onclick = function () {
                        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)

                        .then((response) => response.json())
                        .then(result => {

                                let divWrapDetailsAll = document.createElement('div');
                                document.body.appendChild(divWrapDetailsAll).className +='divWrapDetailsAll';
                                for (const post of result) {
                                        let divWrapDetails = document.createElement('div');
                                        divWrapDetailsAll.appendChild(divWrapDetails).className +='divWrapDetails';
                                        let div = document.createElement('div');
                                        div.innerText = `${post.title} ${post.id}`;
                                        divWrapDetails.appendChild(div).className +='postsDetails';

                                        let button = document.createElement('button');
                                        button.innerHTML = `<a href="./post-details.html?data=${post.id}">Post details</a>`;
                                        divWrapDetails.appendChild(button);
                                }


        });

        };

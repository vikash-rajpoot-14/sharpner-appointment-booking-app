const username = document.getElementById('username');
const phonenumber = document.getElementById('phonenumber');
const email = document.getElementById('Email');
const submit = document.getElementById('submit');
const ul = document.getElementById('list');

showData();

submit.addEventListener('click', ShowHandler)

function ShowHandler(e) {
    e.preventDefault();
    const user = {
        username: username.value,
        phonenumber: phonenumber.value,
        email: email.value
    }
    axios.post('http://localhost:3000/user', user).then(() => {
        console.log("data created successfully")
        showData();
        username.value = "";
        phonenumber.value = "";
        email.value = "";
    }).catch((err) => {
        console.log(err)
    });
}

async function showData() {
    const users = await axios.get('http://localhost:3000/user');
    let listData = "";
    users.data.data.map(user => {
        listData += '<li class="list-item">';
        listData += `${user.username} ${user.phonenumber} ${user.email}`;
        listData += "<button class='btn-delete' onclick='deleteData(`" + user.id + "`)'>delete</button>";
        listData += "</li>";
        ul.innerHTML = listData;
    })
}

async function deleteData(id) {
    await axios.delete(`http://localhost:3000/user/${id}`).then(() => {
        console.log("vikash delete data")
        showData();
    })
}
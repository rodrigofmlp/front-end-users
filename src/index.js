const axios = require('axios').default;

class User{
    constructor(){
        this.name = document.getElementById('txtName');
        this.age = document.getElementById('txtAge');
        this.email = document.getElementById('txtEmail');
        this.phone = document.getElementById('txtPhone');
        this.btnRegisterUser = document.getElementById('btnRegister');
    }

    getUsers(){
        axios.get('http://localhost:3000/users')
        .then((result) =>{
            this.recoveryUser(result.data.users);

        })
        .catch((error)=>{
            console.log(error);
        })
    }

    recoveryUser(data){
        for(user of data){
            const html = this.userLayout(user.name, user.age, user.email, user.phone, user.id);
            this.innerHTML(html);
        }
    }

    userLayout(name, age, phone, email, id){
        const html = `
        <div class = "users">
            <h5>${name}</h5>
            <h5>${age}</h5>
            <h5>${phone}</h5>
            <h5>${email}</h5>
            <h5>${id}</h5>
        </div>
        <br>
        `

        return html;

    }

    insertHtml(html){
        document.getElementById('usersBoard').innerHTML += html;
    }

}

new User();
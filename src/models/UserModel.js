const fs = require('fs');
const path = require('path');

const userFilePath = path.join(__dirname, '../data/users.json')

const User = {
    filename: ('./data/users.json'),
    
    
    getData: function () {

    return JSON.parse (fs.readFileSync(userFilePath, 'utf-8'));
    },

    generateId: function () {
        let allUser = this.findAll();
        let lastuser = allUser.pop();
        if(lastuser){
            return lastuser.id + 1;
        }
        return 1;
    },
    findAll: function () {
        return this.getData();
    },

    findByPk: function (id){
        let allUser = this.findAll();
        let userFound = allUser.find(oneUser=> oneUser.id ===id);
        return userFound;

    },
    findByField: function (field, text){
        let allUser = this.findAll();
        let userFound = allUser.find(oneUser=> oneUser[field] ===text);
        return userFound;

    },

    create: function (userData) {
        let allUser = this.findAll();
        allUser.push(userData);
        fs.writeFileSync(userFilePath, JSON.stringify(allUser, null, ''));
        return true;
    }
}

console.log (User.getData());
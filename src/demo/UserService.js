class UserService {
    login(username, password){
        console.log("User login: username: " + username + ", password: " + password);
        return true;
    }
}

module.exports = new UserService();
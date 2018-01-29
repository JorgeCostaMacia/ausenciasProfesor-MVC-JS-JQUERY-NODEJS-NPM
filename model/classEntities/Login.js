class Login{
    constructor(loginJSON) {
        var id = loginJSON["id"];
        var pass = loginJSON["pass"];
        var token = loginJSON["token"];

        this.getId = function(){ return id; };
        this.setId = function (_id) { id = _id; };

        this.getPass = function () { return pass; };
        this.setPass = function (_pass) { pass = _pass; };

        this.getToken = function () { return token; };
        this.setToken = function (_token) { token = _token; };
    }
}
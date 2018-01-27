class Login{
    constructor(_id,_pass, _token){
        var id = _id;
        var pass = _pass;
        var token = _token

        this.getId = function(){ return id; };
        this.setId = function (_id) { id = _id; };

        this.getPass = function () { return pass; };
        this.setPass = function (_pass) { pass = _pass; };

        this.getToken = function () { return token; };
        this.setToken = function (_token) { token = _token; };
    }
}
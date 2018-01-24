class Login{
    constructor(id,pass, token){
        var _id =id;
        var _pass = pass;
        var _token = token

        this.getId = function(){ return _id; };
        this.setId = function (id) { _id = id; };

        this.getPass = function () { return _pass; };
        this.setPass = function (pass) { _pass = pass; };

        this.getToken = function () { return _token; };
        this.setToken = function (token) { _token = token; };
    }
}
class Login{
    constructor(id,nick,pass){
        var _id =id;
        var _pass = pass;

        this.getId = function(){
            return _id;
        };
        this.getPass = function () {
            return _pass;
        };

        this.setId = function (id) {
            _id = id;
        };
        this.setPass = function (pass) {
            _pass = pass;
        };
    }


}
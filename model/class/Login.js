class Login{
    constructor(id,nick,pass){
        var _id =id;
        var _nick = nick;
        var _pass = pass;

        this.getId = function(){
            return _id;
        };
        this.getNick = function () {
            return _nick;
        };
        this.getPass = function () {
            return _pass;
        };

        this.setId = function (id) {
            _id = id;
        };
        this.setNick = function (nick) {
          _nick = nick
        };
        this.setPass = function (pass) {
            _pass = pass;
        };
    }


}
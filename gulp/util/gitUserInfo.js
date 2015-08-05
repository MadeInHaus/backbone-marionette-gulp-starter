
var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

module.exports = function(callback){
    execute("git config --global user.name", function(name){
        execute("git config --global user.email", function(email){
            callback({ name: name.replace("\n", ""), email: email.replace("\n", "") });
        });
    });
};

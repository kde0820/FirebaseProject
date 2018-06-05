function signup(){
    firebase.auth().createUserWithEmailAndPassword(getEmail(), getPass())
    .then(
        function(success){
            console.log("success");
        },
        function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if(error.code == "auth/email-already-in-use"){
                signin();
            }else if(error.code == "auth/invalid-email"){
                $("#error-message").text("이메일 형식이 잘못되었습니다.");
            }else if(error.code == "auth/weak-password"){
                $("#error-message").text("비밀번호가 너무 짧거나 깁니다.");
            }
          }
    );
}

function signin(){
    firebase.auth().signInWithEmailAndPassword(getEmail(), getPassword())
    .then(
        function(success) {
            console.log(success);
        },
        function(error){
            console.log("error");
            console.log(error);
        }
    );
}

function getEmail(){
    return $("#usr-email")[0].value;
}

function getPass(){
    return $("#usr-pw")[0].value;
}

$("#login-btn").click(
    function(){
        signup();
    }
)
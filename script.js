document.getElementById('form-submit').addEventListener('click', function(){
    let name = document.getElementById('exampleInputName').value;
    let email = document.getElementById('exampleInputEmail1').value;
    let message = document.getElementById('messages').value;
    if (name == '') {
        document.getElementById('name-error').innerText = "Name is required";
    } else if (email == '') {
        document.getElementById('email-error').innerText = "Email is required";
    } else if (message == '') {
        document.getElementById('message-error').innerText = "Message required";
    } else{
        var myModal = new bootstrap.Modal(document.getElementById('examplemodal'));
        myModal.show();
    }
})

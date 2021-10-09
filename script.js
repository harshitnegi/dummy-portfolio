document.getElementById("form-submit").addEventListener("click", function () {
  let name = document.getElementById("exampleInputName").value;
  let email = document.getElementById("exampleInputEmail1").value;
  let message = document.getElementById("messages").value;
  if (name == "") {
    document.getElementById("name-error").innerText = "Name is required";
  } else if (email == "") {
    document.getElementById("email-error").innerText = "Email is required";
  } else if (message == "") {
    document.getElementById("message-error").innerText = "Message required";
  } else {
    var myModal = new bootstrap.Modal(document.getElementById("examplemodal"));
    myModal.show();
  }
});

var scrollBtn = document.getElementById("scroll-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn.addEventListener("click", function () {
  topFunction();
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

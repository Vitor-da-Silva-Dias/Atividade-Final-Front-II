const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
const myModal = new bootstrap.Modal("#register-modal");

document.getElementById("save").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("e-mail").value;
  const password = document.getElementById("senha").value;
  const password_confirm = document.getElementById("c-senha").value;


  if (email.length < 6) {
    alert('Preencha o campo com um e-mail válido.');
    return;
  }

  const checkUser = allUsers.find((user) => user.email == email);
  if (checkUser) {
    alert("Email ja cadastrado");
    return;
  }

  if (password.length < 5) {
    alert('Crie uma senha com no mímino 5 dígitos.');
    return;
  }

  if (password != password_confirm) {
    alert("As senhas digitadas são diferentes.");
    return;
  }

  const newUser = {
    email: email,
    password: password,
    errands: [],
  };

  allUsers.push(newUser);

  myModal.hide();

  alert('Conta criada com sucesso.');

  saveAccount();


})

function saveAccount() {
  localStorage.setItem("allUsers", JSON.stringify(allUsers));
}



document.getElementById("login").addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("Senha");

  const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

  console.log(allUsers);

  function login() {
    const checkUser = allUsers.find(
      (user) =>
        user.email === email.value && user.password === password.value
    );

    const findUserIndex = allUsers.findIndex(
      (user) => user.email === email.value
    );

    if (!checkUser) {
      alert("Email ou senha incorreta");
      return;
    }

    alert('Login realizado com sucesso.')

    sessionStorage.setItem("logged", JSON.stringify(checkUser));
    window.location.href = "Recados.html";
  }

  login();
})



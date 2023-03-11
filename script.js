//Função que unifica os dois modos verificando se é verdadeiro ou falso a afirmação, através do botão
function mode() {
    console.log(document.getElementById("bodyy").style.backgroundColor);
    if (
      document.getElementById("bodyy").style.backgroundColor ==
        "rgb(252, 249, 249)" ||
      document.getElementById("bodyy").style.backgroundColor == ""
    ) {
      darkMode();
    } else {
      lightMode();
    }
  }

  //Função para definir o modo escuro e setar a mudança nos elementos em estilização CSS
  function darkMode() {
    var element = document.body;
    var content = document.getElementById("darkModeText");

    document.getElementById("bodyy").style.backgroundColor = "#36404d";
    document.getElementById("modoclaro").innerHTML =
      '<img src=\'img/lua2.png\' width="100px" height="100px">';
    document.getElementById("formulario").style.backgroundColor = "white";
    document.getElementById("formulario").style.boxShadow = "2px 2px 6px #ffffff60";
    document.getElementById("btn-night").innerHTML =
      '<img src=\'img/night-att.png\' width="320px" height="130px">';
    document.getElementById("texto").style.color = "white";
    document.getElementById("enviar").style.backgroundColor = " #c48ae6";
  }

  //Função para definir o modo claro default e setar a mudança nos elementos em estilização CSS
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("darkModeText");
    document.getElementById("bodyy").style.backgroundColor = "#fcf9f9";
    document.getElementById("modoclaro").innerHTML =
      '<img src=\'img/sol.png\' width="100px" height="100px">';
    document.getElementById("formulario").style.backgroundColor = "#ebebeb";
    document.getElementById("formulario").style.boxShadow = "box-shadow: 2px 4px 6px #1a191936";
    document.getElementById("btn-night").innerHTML =
      '<img src=\'img/day-att.png\' width="320px" height="130px">';
    document.getElementById("texto").style.color = "#0b0b0b";
    document.getElementById("enviar").style.backgroundColor = "#eca31b";
  }

  //Criando a função do form e criando as variáveis para validação
  const form = document.querySelector("#form");
  const nameInput = document.querySelector("#name");
  const lastNameInput = document.querySelector("#last-name");
  const yearsInput = document.querySelector("#years");
  const genderSelect = document.querySelector("#genero");


  //Verificando se os inputs estão validos
  console.log(form, nameInput, lastNameInput, yearsInput);

  //Criando o evento de envio de formulário
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Criando condições para preenchimento de campo. Se vazio, não enviar.
    //Verifica se o nome está vazio
    if (nameInput.value === "") {
      swal("É necessário preencher esse campo!");
      return;
    }

    //Verifica se o sobrenome está vazio
    if (lastNameInput.value === "") {
      swal("É necessário preencher esse campo!");
      return;
    }

    if (yearsInput.value === "") {
      swal("É necessário preencher esse campo!");
      return;
    }

    //Verifica se alguma das opções estão preenchidas
    if(genderSelect.value === ""){
      swal("É necessário selecionar esse campo!");
      return;
    }


    //Envio do formulário
    alert("Dados enviados com sucesso!");
    form.submit();
  });
const myImage = document.querySelector("img");


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/gato-preto-curioso.png") {
        myImage.setAttribute("src", "imagens/Fundo-teste.png");
    } else {
        myImage.setAttribute("src", "imagens/gato-preto-curioso.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Já se hidratou hoje?, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
};
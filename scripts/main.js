const myImage = document.querySelector("img");


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/Gato-Preto-Curioso.jpg") {
        myImage.setAttribute("src", "imagens/Gato-Escondido.jpg");
    } else {
        myImage.setAttribute("src", "imagens/Gato-Preto-Curioso.jpg");
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
        myHeading.textContent = `Já se hidratou hoje ${myName}?`;
    }
}

myButton.onclick = () => {
    setUserName();
};

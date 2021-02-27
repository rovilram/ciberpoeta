"use Strict";
import createNode from "./myLib/createNode.js";
const d = document;


const randomPoem = (poemObject, stanzasNum) => {
    const stanzasArray = [];
    let randomNum;
    do {
        randomNum = Math.round(poemObject.content.length * Math.random());
        if (!stanzasArray.includes(randomNum)) {
            stanzasArray.push(poemObject.content[randomNum]);
        }
    }
    while (stanzasArray.length < stanzasNum)

    return stanzasArray;

};

const writePoem = (stanzasArray, poemDiv) => {
    const newPoemDiv = createNode("div", {
        className: poemDiv.className
    });
    stanzasArray.forEach(stanza => {
        const stanzaDiv = createNode("div", {
            className: "stanza"
        });
        stanza.forEach(verse => {
            createNode("div", {
                className: "verse",
                innerText: verse
            }, newPoemDiv);
        });
        poemDiv.replaceWith(newPoemDiv);
    })
}


//EVENTOS
d.querySelector(".generatorBtn")
    .addEventListener("click", (e) => {
        e.preventDefault();

        const stanzasNum = d.querySelector("#stanzaSelect").value;
        const titleNum = d.querySelector("#stanzaTitle").value;
        const poemDiv = d.querySelector(".poemWrapper");
        let poemObject;

        switch (titleNum) {
            case "1":
                poemObject = romanceroGitano;
                console.log(titleNum, poemObject);
                break;
            case "2":
                poemObject = poetaEnNuevaYork;
                break;

        }

        const stanzasArray = randomPoem(poemObject, stanzasNum);


        writePoem(stanzasArray, poemDiv);




    })
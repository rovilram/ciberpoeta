"use Strict";
import createNode from "./myLib/createNode.js";
const d = document;

const getVerseNumber = (verseNum) => {
    let verseNumber;

    switch (verseNum) {
        case "2":
            verseNumber = 2;
            break;
        case "3":
            verseNumber = 3;
            break;
        case "4":
            verseNumber = 4;
            break;
        case "random":
            verseNumber = Math.round(Math.random() * 2) + 2;
            break;
    }
    return verseNumber;
}

const getRandomStanza = (books, verseNum) => {
    const verseArray = [];
    do {
        const bookSelector = Math.round(Math.random() * (books.length-1));
        const stanzaSelector = Math.round(Math.random() * (books[bookSelector].content.length-1));
        const verseSelector =
            Math.round(Math.random() * (books[bookSelector].content[stanzaSelector].length-1));
        if (!verseArray.includes(books[bookSelector].content[stanzaSelector][verseSelector])) {
            verseArray.push(books[bookSelector].content[stanzaSelector][verseSelector]);

        }
    }
    while (verseArray.length < verseNum);
    return verseArray;
}



const randomPoem = (books, stanzasNum, verseNum) => {
    const stanzasArray = [];

    for (let i = 0; i < stanzasNum; i++) {
        const randomStanza = getRandomStanza(books, getVerseNumber(verseNum));
        stanzasArray.push(randomStanza);
    }
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
        //        const titleNum = d.querySelector("#stanzaTitle").value;
        const verseNum = d.querySelector("#versoSelect").value;

        const poemDiv = d.querySelector(".poemWrapper");
        let poemObject;

        /*         switch (titleNum) {
                    case "1":
                        poemObject = romanceroGitano;
                        console.log(titleNum, poemObject);
                        break;
                    case "2":
                        poemObject = poetaEnNuevaYork;
                        break;
        
                } */



        const stanzasArray = randomPoem(books, stanzasNum, verseNum);


        writePoem(stanzasArray, poemDiv);




    })
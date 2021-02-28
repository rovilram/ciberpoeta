"use Strict";
import createNode from "./myLib/createNode.js";

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
        const bookSelector = Math.round(Math.random() * (books.length - 1));
        const stanzaSelector = Math.round(Math.random() * (books[bookSelector].content.length - 1));
        const verseSelector =
            Math.round(Math.random() * (books[bookSelector].content[stanzaSelector].length - 1));
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
            }, stanzaDiv);
        });
        newPoemDiv.appendChild(stanzaDiv);
    })
    poemDiv.replaceWith(newPoemDiv);
}


//---------------------------------FORM FUCTIONS-------------------------------
const createSelectBooks = (booksArray) => {
    //SELECT OBRA
    const bookDiv = createNode("div", {
        className: "bookWrapper"
    });//empieza desvinculado del HTML    

    createNode("label", {
        htmlFor: "bookSelect",
        innerText: "Obra:"
    }, bookDiv);

    const bookSelect = createNode("select", {
        name: "bookNum",
        id: "bookSelect"
    }, bookDiv);

    booksArray.forEach(book => {
        createNode("option", {
            value: book.value,
            innerText: book.title
        }, bookSelect);
    })

    return bookDiv;
}



const printForm = (formWrapper, d) => {
    let bookDiv; //guardará el nodo de obras para ponerlo y quitarlo con el evento del selector de autores
    const form = createNode("form", {
        action: "#",
        className: "selectForm"
    }, formWrapper)

    //SELECT AUTOR
    const authorDiv = createNode("div", {
        className: "authorWrapper"
    }, formWrapper);

    createNode("label", {
        htmlFor: "authorSelect",
        innerText: "Autor/a:"
    }, authorDiv);

    const authorSelect = createNode("select", {
        name: "authorNum",
        id: "authorSelect"
    }, authorDiv);

    createNode("option", {
        value: "lorca",
        innerText: "Federico García Lorca"
    }, authorSelect);

    createNode("option", {
        value: "castro",
        innerText: "Rosalía de Castro"
    }, authorSelect);

    createNode("option", {
        selected: true,
        value: "ambos",
        innerText: "Ambos"
    }, authorSelect);



    //SELECT ESTROFAS
    const stanzaDiv = createNode("div", {
        className: "stanzaWrapper"
    }, formWrapper);

    createNode("label", {
        htmlFor: "stanzaSelect",
        innerText: "Número de estrofas:"
    }, stanzaDiv);

    const stanzaSelect = createNode("select", {
        name: "stanzasNum",
        id: "stanzaSelect"
    }, stanzaDiv);

    createNode("option", {
        value: "1",
        innerText: "1"
    }, stanzaSelect);

    createNode("option", {
        value: "2",
        innerText: "2"
    }, stanzaSelect);

    createNode("option", {
        value: "3",
        innerText: "3"
    }, stanzaSelect);


    //SELECT VERSO
    const verseDiv = createNode("div", {
        className: "versoWrapper"
    }, formWrapper);

    createNode("label", {
        htmlFor: "versoSelect",
        innerText: "Número de versos por estrofa:"
    }, verseDiv);

    const versoSelect = createNode("select", {
        name: "verseNum",
        id: "versoSelect"
    }, verseDiv);

    createNode("option", {
        value: "2",
        innerText: "2"
    }, versoSelect);

    createNode("option", {
        value: "3",
        innerText: "3"
    }, versoSelect);

    createNode("option", {
        value: "4",
        innerText: "4"
    }, versoSelect);

    createNode("option", {
        value: "random",
        innerText: "aleatorio"
    }, versoSelect);


    //BOTÓN

    const generatorBtn = createNode("button", {
        className: "generatorBtn",
        innerText: "Generar poema"
    }, formWrapper)

    //EVENTO BOTÓN
    generatorBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const stanzasNum = d.querySelector("#stanzaSelect").value;
        const verseNum = d.querySelector("#versoSelect").value;
        const authorNum = d.querySelector("#authorSelect").value;
        let booksSelected;
        if (authorNum != "ambos") {
            const bookNum=bookDiv.querySelector("#bookSelect").value;
            console.log(`book.authorValue === ${authorNum} &&
            book.titleValue===${bookNum})`)
            booksSelected = books.filter(book => book.authorValue === authorNum &&
                                            book.titleValue===bookNum);
        }
        else {
            booksSelected = [...books];
        }
        console.log(booksSelected)



                const poemDiv = d.querySelector(".poemWrapper");
       
               const stanzasArray = randomPoem(books, stanzasNum, verseNum);
       
               writePoem(stanzasArray, poemDiv); 


    })

    authorSelect.addEventListener("change", () => {
        console.log(bookDiv);
        if (authorSelect.value === "lorca") {
            const booksArray = [
                {
                    title: "Romancero gitano",
                    value: "romancero"
                },
                {
                    title: "Poeta en Nueva York",
                    value: "poeta"
                }
            ]
            if (bookDiv) bookDiv.remove();
            bookDiv = createSelectBooks(booksArray);
            authorSelect.after(bookDiv);
        }
        else if (authorSelect.value === "castro") {
            const booksArray = [
                {
                    title: "Cantares gallegos",
                    value: "cantares"
                },
                {
                    title: "Follas novas",
                    value: "follas"
                }
            ]
            if (bookDiv) bookDiv.remove();
            bookDiv = createSelectBooks(booksArray);
            authorSelect.after(bookDiv);
        }
        else if (authorSelect.value === "ambos") {
            bookDiv.remove();
        }
        console.log(bookDiv);

    })


}





//---------------------------------MAIN-------------------------------
const main = (d) => {
    const formWrapper = d.querySelector(".formWrapper");

    printForm(formWrapper, d);

}









//---------------------------------EVENTO DE CARGA-------------------------------

window.addEventListener("load", () => {
    const d = document;
    console.log("INIT")
    main(d);
})


/* //EVENTOS
d.querySelector(".generatorBtn")
    .addEventListener("click", (e) => {
        e.preventDefault();

        const stanzasNum = d.querySelector("#stanzaSelect").value;
        const verseNum = d.querySelector("#versoSelect").value;

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



        const stanzasArray = randomPoem(books, stanzasNum, verseNum);


        writePoem(stanzasArray, poemDiv);




    })

 */
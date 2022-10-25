/*
    PROJETO CHURRASCÔMETRO

*objetivo:
    Calcular a quantidade de carne, dôces, bebidas e mesas/cadeiras referente ao número total de pessoas e tempo de duração do evento

#base por pessoa:
    >Adultos
        300g de carne - 450g por mais de 6 horas
        900ml de bebida tipo "A" - 1300ml por mais de 6 horas
        200ml de bebida tipo "B" - 300ml por mais de 6 horas
        1 pacotes de docês com 6 unidades - 1,5 pacotes por mais de 6 horas
    >Crianças
        175g de carne - 275g por mais de 6 horas
        crianças não podem ingerir bebida tipo "A" 
        300ml de bebida tipo "B" - 450ml por mais de 6 horas
        2 pacotes com 6 unidades - 3,5 por mais de 6 horas

*/

//Variáveis
let li1 = document.getElementById("li1"); //
let li2 = document.getElementById("li2"); //
let li3 = document.getElementById("li3"); //
let h1 = document.getElementsByTagName("h1")[0]; //
let result = document.getElementById("result");
let warning = document.getElementById("warning"); //
let p1 = document.getElementById("people1");
let p2 = document.getElementById("people2");
let d0 = document.getElementById("duration");
let main = document.getElementsByTagName("main")[0];
let statics = document.getElementById("statics");
let authorPage = document.getElementById("authorPage");
let authorText0 = document.getElementsByClassName("authorTexts")[0];
let authorText1 = document.getElementsByClassName("authorTexts")[1];
let foot = document.getElementsByTagName("footer")[0]; //idioma
let modeIco = document.getElementById("modeIco"); //
let credit = document.getElementById("footCredit"); //
let gitIco = document.getElementById("gitIco"); //
let mode = false; //
//Variáveis de calculo
let meat;
let soda;
let beer;
let pack;
let candy;
let chairs;
let tables;


//Funções
function menu1() {
    li1.style.backgroundColor = "rgba(0, 0, 0, 0.164)";
    li2.style.backgroundColor = "rgba(0, 0, 0, 0.000)";
    li3.style.backgroundColor = "rgba(0, 0, 0, 0.000)";

    main.style.display = "block";
}
function menu2() {
    li1.style.backgroundColor = "rgba(0, 0, 0, 0.000)";
    li2.style.backgroundColor = "rgba(0, 0, 0, 0.164)";
    li3.style.backgroundColor = "rgba(0, 0, 0, 0.000)";

    main.style.display = "none";
}
function menu3() {
    li1.style.backgroundColor = "rgba(0, 0, 0, 0.000)";
    li2.style.backgroundColor = "rgba(0, 0, 0, 0.000)";
    li3.style.backgroundColor = "rgba(0, 0, 0, 0.164)";

    main.style.display = "none";
}
function lights() {
    setInterval(lightOn, 600);
    setInterval(lightHigh, 1490);
    setInterval(lightBlink, 2080);
    function lightOn() {
        h1.style.color = "var(--color05)";
        setTimeout(lightOff, 300);
    }
    function lightOff() {
        h1.style.color = "var(--color04)";
    }
    function lightHigh() {
        h1.style.color = "rgb(247, 165, 65)";
    }
    function lightBlink() {
        h1.style.color = "rgb(247, 165, 65)";
    }
}
function modeSwitch() {
    switch (mode) {
        case true:
            mode = false;
            darkMode();
            break;
        case false:
            mode = true;
            whiteMode();
            break;
    }
    function whiteMode() {
        let resultText0 = document.getElementById("resultText0");
        let resultText1 = document.getElementById("resultText1");
        let resultText2 = document.getElementById("resultText2");
        let h3a = document.getElementsByTagName("h3")[0];
        let h3b = document.getElementsByTagName("h3")[1];
        let h3c = document.getElementsByTagName("h3")[2];
        let frameImg = document.getElementById("frameImg");
        let staticsP0 = document.getElementsByClassName("staticsP")[0];
        let staticsP1 = document.getElementsByClassName("staticsP")[1];

        main.style.backgroundImage = "linear-gradient(to bottom , var(--color08) 90% , var(--color10))";
        main.style.color = "var(--color09)";
        result.style.backgroundImage = "linear-gradient(to top , var(--color08) 90% , var(--color10))";
        result.style.fontWeight = "bold";
        resultText0.style.color = "var(--color09)";
        resultText1.style.color = "var(--color09)";
        resultText2.style.color = "var(--color09)";
        h3a.style.color = "var(--color09)";
        h3b.style.color = "var(--color09)";
        h3b.style.fontWeight = "bold";
        h3c.style.color = "var(--color09)";
        h3c.style.fontWeight = "bold";
        foot.style.backgroundColor = "var(--color08)";
        modeIco.src = "content/modeicon1.png";
        gitIco.src = "content/githubicon1.png";
        credit.style.color = "var(--color09)";
        authorPage.style.backgroundImage = "linear-gradient(to top , var(--color08) 90% , var(--color10))";
        authorText0.style.color = "var(--color09)";
        authorText1.style.color = "var(--color09)";
        frameImg.style.border = "3px solid var(--color09)";
        staticsP0.style.color = "var(--color09)";
        staticsP1.style.color = "var(--color09)";
        statics.style.backgroundImage = "linear-gradient(to top , var(--color08) 90% , var(--color10))";
    }
    function darkMode() {
        let resultText0 = document.getElementById("resultText0");
        let resultText1 = document.getElementById("resultText1");
        let resultText2 = document.getElementById("resultText2");
        let h3a = document.getElementsByTagName("h3")[0];
        let h3b = document.getElementsByTagName("h3")[1];
        let h3c = document.getElementsByTagName("h3")[2];
        let staticsP0 = document.getElementsByClassName("staticsP")[0];
        let staticsP1 = document.getElementsByClassName("staticsP")[1];

        main.style.backgroundImage = "linear-gradient(to bottom , var(--color09) 90% , var(--color06))";
        main.style.color = "var(--color08)";
        result.style.backgroundImage = "linear-gradient(to top , var(--color09) 90% , var(--color06))";
        result.style.fontWeight = "normal";
        resultText0.style.color = "var(--color08)";
        resultText1.style.color = "var(--color08)";
        resultText2.style.color = "var(--color08)";
        h3a.style.color = "var(--color08)";
        h3b.style.color = "var(--color08)";
        h3b.style.fontWeight = "normal"
        h3c.style.color = "var(--color08)";
        h3c.style.fontWeight = "normal";
        foot.style.backgroundColor = "var(--color09)";
        modeIco.src = "content/modeicon0.png";
        gitIco.src = "content/githubicon0.png";
        credit.style.color = "var(--color08)";
        authorPage.style.backgroundImage = "linear-gradient(to top , var(--color09) 90% , var(--color06))";
        authorText0.style.color = "var(--color08)";
        authorText1.style.color = "var(--color08)";
        frameImg.style.border = "3px solid var(--color08)";
        staticsP0.style.color = "var(--color08)";
        staticsP1.style.color = "var(--color08)";
        statics.style.backgroundImage = "linear-gradient(to top , var(--color09) 90% , var(--color06))";
    }
}
function calc() {


    if (p1.value == "" || p2.value == "" || d0.value == "") {
        warning.style.display = "block";
    }
    else {
        warning.style.display = "none";

        if (d0.value <= 6) {
            //Até 6h de duração
            meat = (p1.value * 0.300) * d0.value + (p2.value * 0.175) * d0.value;
            beer = (p1.value * 0.900) * d0.value;
            soda = (p1.value * 0.200) * d0.value + (p2.value * 0.300) * d0.value;
            candy = (p1.value * 1) * d0.value + (p2.value * 2) * d0.value;
        }
        else {
            //Mais de 6h de duração
            meat = (p1.value * 0.450) * d0.value + (p2.value * 0.275) * d0.value;
            beer = (p1.value * 1.300) * d0.value;
            soda = (p1.value * 0.300) * d0.value + (p2.value * 0.450) * d0.value;
            candy = (p1.value * 1, 5) * d0.value + (p2.value * 3.5) * d0.value;
        }

        pack = beer / 6.3;

        chairs = p1.value * 1 + p2.value * 1;
        chairs = chairs + chairs / 20;
        tables = Math.ceil((p1.value * 1 + p2.value * 1) / 4) + 2;

        if (meat >= 3) {
            console.log("Carne: %sKG\nCerveja: %sL\nRefrigerante: %sL\nDôces: %s Pacotes", Math.round(meat), beer, Math.ceil(pack), soda, candy);
        }

        else {
            console.log("Carne: %sKG\nCerveja: %sL\nRefrigerante: %sL\nDôces: %s Pacotes", meat, beer, Math.ceil(pack), soda, candy);
        }

        result.innerHTML = '<h3>Para o seu churrasco, será necessário:</h3><p id="resultText0">Recomendamos que no minímo para o seu evento não faltar nada será necessário <strong> ' + meat.toFixed(2) + 'KG de Carne </strong> para consumo principal, caso decida adoçar a festa, <strong> ' + Math.round(candy) + ' Pacotes de docês</strong> (com 6 unidades ou 90g dependedo do docê) seria uma boa pedida. </p><p id="resultText1">Para bebida, temos duas opções, as para adultos e as sem faixa etária, que se aproximam de <strong> ' + Math.round(beer) + 'L de Cerveja</strong> (ou aproximadamente ' + Math.ceil(pack) + ' packs, ou qualquer outra bebida alcólica, dependendo do consumo) e como outra opção <strong> ' + Math.round(soda) + 'L de Refrigerante ou Suco </strong> (qualquer bebida leve). </p><p id="resultText2">Para questões de administração de espaço, tendo em consideração que seria necessario em média <strong> ' + Math.ceil(chairs) + ' Cadeiras</strong> e <strong>' + tables + ' Mesas</strong> (de quatro lugares).</p>';
        result.style.display = "block";

        if (mode == true) {
            let h3 = document.getElementsByTagName("h3")[0];

            resultText0.style.color = "var(--color09)";
            resultText1.style.color = "var(--color09)";
            h3.style.color = "var(--color09)";
        }
    }
}

//Tabela #statics
let tr0X = document.getElementById("tr0X");
let tr1X = document.getElementById("tr1X");
let tr2X = document.getElementById("tr2X");
let tr0Y = document.getElementById("tr0Y");
let tr1Y = document.getElementById("tr1Y");
let tr2Y = document.getElementById("tr2Y");

let th0X = document.getElementById("th0X");
let th1X = document.getElementById("th1X");
let th2X = document.getElementById("th2X");
let th3X = document.getElementById("th3X");
let th4X = document.getElementById("th4X");
let th0Y = document.getElementById("th0Y");
let th1Y = document.getElementById("th1Y");
let th2Y = document.getElementById("th2Y");
let th3Y = document.getElementById("th3Y");
let th4Y = document.getElementById("th4Y");

let td00X = document.getElementById("td00X");
let td01X = document.getElementById("td01X");
let td02X = document.getElementById("td02X");
let td03X = document.getElementById("td03X");
let td04X = document.getElementById("td04X");
let td10X = document.getElementById("td10X");
let td11X = document.getElementById("td11X");
let td12X = document.getElementById("td12X");
let td13X = document.getElementById("td13X");
let td14X = document.getElementById("td14X");
let td00Y = document.getElementById("td00Y");
let td01Y = document.getElementById("td01Y");
let td02Y = document.getElementById("td02Y");
let td03Y = document.getElementById("td03Y");
let td04Y = document.getElementById("td04Y");
let td10Y = document.getElementById("td10Y");
let td11Y = document.getElementById("td11Y");
let td12Y = document.getElementById("td12Y");
let td13Y = document.getElementById("td13Y");
let td14Y = document.getElementById("td14Y");

function resetTable() {
    th0X.style.backgroundColor = "var(--color07)";
    th1X.style.backgroundColor = "var(--color07)";
    th2X.style.backgroundColor = "var(--color07)";
    th3X.style.backgroundColor = "var(--color07)";
    th4X.style.backgroundColor = "var(--color07)";
    th0Y.style.backgroundColor = "var(--color07)";
    th1Y.style.backgroundColor = "var(--color07)";
    th2Y.style.backgroundColor = "var(--color07)";
    th3Y.style.backgroundColor = "var(--color07)";
    th4Y.style.backgroundColor = "var(--color07)";

    td00X.style.backgroundColor = "var(--color07)";
    td01X.style.backgroundColor = "var(--color08)";
    td02X.style.backgroundColor = "var(--color08)";
    td03X.style.backgroundColor = "var(--color08)";
    td04X.style.backgroundColor = "var(--color08)";
    td10X.style.backgroundColor = "var(--color07)";
    td11X.style.backgroundColor = "var(--color08)";
    td12X.style.backgroundColor = "var(--color08)";
    td13X.style.backgroundColor = "var(--color08)";
    td14X.style.backgroundColor = "var(--color08)";
    td00Y.style.backgroundColor = "var(--color07)";
    td01Y.style.backgroundColor = "var(--color08)";
    td02Y.style.backgroundColor = "var(--color08)";
    td03Y.style.backgroundColor = "var(--color08)";
    td04Y.style.backgroundColor = "var(--color08)";
    td10Y.style.backgroundColor = "var(--color07)";
    td11Y.style.backgroundColor = "var(--color08)";
    td12Y.style.backgroundColor = "var(--color08)";
    td13Y.style.backgroundColor = "var(--color08)";
    td14Y.style.backgroundColor = "var(--color08)";
}
function agesX() {
    th0X.style.backgroundColor = "var(--color11)";
    td00X.style.backgroundColor = "var(--color12)";
    td10X.style.backgroundColor = "var(--color12)";
}
function agesY() {
    th0Y.style.backgroundColor = "var(--color11)";
    td00Y.style.backgroundColor = "var(--color12)";
    td10Y.style.backgroundColor = "var(--color12)";
}
function meatX(){
    th1X.style.backgroundColor = "var(--color11)";
    td01X.style.backgroundColor = "var(--color12)";
    td11X.style.backgroundColor = "var(--color12)";
}
function meatY(){
    th1Y.style.backgroundColor = "var(--color11)";
    td01Y.style.backgroundColor = "var(--color12)";
    td11Y.style.backgroundColor = "var(--color12)";
}
function drinkaX(){
    th2X.style.backgroundColor = "var(--color11)";
    td02X.style.backgroundColor = "var(--color12)";
    td12X.style.backgroundColor = "var(--color12)";
}
function drinkaY(){
    th2Y.style.backgroundColor = "var(--color11)";
    td02Y.style.backgroundColor = "var(--color12)";
    td12Y.style.backgroundColor = "var(--color12)";
}
function drinkbX(){
    th3X.style.backgroundColor = "var(--color11)";
    td03X.style.backgroundColor = "var(--color12)";
    td13X.style.backgroundColor = "var(--color12)";
}
function drinkbY(){
    th3Y.style.backgroundColor = "var(--color11)";
    td03Y.style.backgroundColor = "var(--color12)";
    td13Y.style.backgroundColor = "var(--color12)";
}
function candyX(){
    th4X.style.backgroundColor = "var(--color11)";
    td04X.style.backgroundColor = "var(--color12)";
    td14X.style.backgroundColor = "var(--color12)";
}
function candyY(){
    th4Y.style.backgroundColor = "var(--color11)";
    td04Y.style.backgroundColor = "var(--color12)";
    td14Y.style.backgroundColor = "var(--color12)";
}
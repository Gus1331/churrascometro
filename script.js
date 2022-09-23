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
}
function menu2() {
    li2.style.backgroundColor = "rgba(0, 0, 0, 0.164)";
}
function menu3() {
    li3.style.backgroundColor = "rgba(0, 0, 0, 0.164)";
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
        let h3 = document.getElementsByTagName("h3")[0];

        main.style.backgroundImage = "linear-gradient(to bottom , var(--color08) 90% , var(--color10))";
        main.style.color = "var(--color09)";
        result.style.backgroundImage = "linear-gradient(to top , var(--color08) 90% , var(--color10))";
        result.style.fontWeight = "bold";
        resultText0.style.color = "var(--color09)";
        resultText1.style.color = "var(--color09)";
        resultText2.style.color = "var(--color09)";
        h3.style.color = "var(--color09)";
        foot.style.backgroundColor = "var(--color08)";
        modeIco.src = "content/modeicon1.png";
        gitIco.src = "content/githubicon1.png";
        credit.style.color = "var(--color09)";
    }
    function darkMode() {
        let resultText0 = document.getElementById("resultText0");
        let resultText1 = document.getElementById("resultText1");
        let resultText2 = document.getElementById("resultText2");
        let h3 = document.getElementsByTagName("h3")[0];

        main.style.backgroundImage = "linear-gradient(to bottom , var(--color09) 90% , var(--color06))";
        main.style.color = "var(--color08)";
        result.style.backgroundImage = "linear-gradient(to top , var(--color09) 90% , var(--color06))";
        result.style.fontWeight = "normal";
        resultText0.style.color = "var(--color08)";
        resultText1.style.color = "var(--color08)";
        resultText2.style.color = "var(--color08)";
        h3.style.color = "var(--color08)";
        foot.style.backgroundColor = "var(--color09)";
        modeIco.src = "content/modeicon0.png";
        gitIco.src = "content/githubicon0.png";
        credit.style.color = "var(--color08)";
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
            resultText0.style.color = "var(--color09)";
            resultText1.style.color = "var(--color09)";
            h3.style.color = "var(--color09)";
        }
    }
}


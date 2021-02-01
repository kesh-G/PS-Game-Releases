// ************************* Script som byter stilmall *************************

// En fuktion skapas som hittar elementet med ID "pagestyle" och sätter attributet "href" till innehållet
// som tas emot i argumentet "stylesheet".
function setHref(stylesheet) {
    document.getElementById("pagestyle").setAttribute("href", stylesheet);  
}

function switchStyle() {
    // Informationen i elementen med ID "stylesheet1" och "stylesheet2" sparas i varsin variabel.
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");
    var style1sm = document.getElementById("stylesheet1_small");
    var style2sm = document.getElementById("stylesheet2_small");
    
    // När man klickar (onclick) på elementen tillgörande "style1" eller "style2" skickas respektive sökväg till
    // olika css-filer som ett argument (sheet) till fuktionen "swapStyleSheet".
    style1.onclick = function () { setHref("/_css/style.css") };
    style2.onclick = function () { setHref("/_css/styleLight.css"); };
    style1sm.onclick = function () { setHref("/_css/style.css") };
    style2sm.onclick = function () { setHref("/_css/styleLight.css"); };

}



// ************************* Script som hämtar dagens datum *************************

// Ett date-objekt med värdet av dagens datum skapas och sparas i variabeln "day".
var day = new Date().getDate();
// Värdet i variabeln "day" skrivs ut i elementet med ID "dateDay".
document.getElementById("dateDay").innerHTML = day;

// Ett date-objekt med värdet av månadens siffra (0-11) skapas och sparas i variabeln "month".
var month = new Date().getMonth();
// Eftersom värdet i month-variabeln är en siffra behöver den omvandlas till en mer läsbar textsträng.
// En array bestående av årets månader skapas och sparas i "monthNames".
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// "monthNames" skrivs ut till elementet med ID "dateMonth". Värdet av "month" ersätts av textsträngen med
// samma nummer i arrayen, vilket gör att rätt månad skrivs ut. Sist skrivs ett mellanrum ut i elementet.
document.getElementById("dateMonth").innerHTML = monthNames[month] + ' ';



// ************************* Script som gör att mobilmenyn fungerar *************************

// Förklarar inte närmre eftersom jag inte har gjort den själv!
// Hämtad från w3schools (https://www.w3schools.com/howto/howto_js_mobile_navbar.asp)
function toggleSmallMenu() {
    var x = document.getElementById("smallerNav_links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
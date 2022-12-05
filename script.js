/* Viited:
    https://stackoverflow.com/a/18305980
    https://www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/
    Henrik Innos 2022
*/
/*javascript muudab kataloogi lehel "osta" nupu teksti vajutusel tekstiks "lisatud ostukorvi"*/
function initialize()
{
    let btns = document.querySelectorAll('button'); //valib iga button elemendi lehel

    
    btns.forEach(function (i) {
        i.addEventListener('click', function() {    //nupu vajutusel muudab nupu teksti 2.5 sekundiks
            i.textContent = 'Lisatud ostukorvi'
            setTimeout(function() {                 
                i.textContent = 'Osta'
            }, 2500)
        });
    });
}

document.addEventListener("DOMContentLoaded",initialize,false);

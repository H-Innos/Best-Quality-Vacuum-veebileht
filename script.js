// Henrik Innos 2022
function initialize()
{
    let btns = document.querySelectorAll('button');

    btns.forEach(function (i) {
        i.addEventListener('click', function() {
            i.textContent = 'Lisatud ostukorvi'
            setTimeout(function() {
                i.textContent = 'Osta'
            }, 2500)
        });
    });
}

document.addEventListener("DOMContentLoaded",initialize,false);



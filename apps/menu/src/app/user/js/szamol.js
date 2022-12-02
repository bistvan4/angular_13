"use strict";
function Szamol() {
    const uzemanyagAr = 480;
    const tavolsagMezo = document.getElementById('tavolsag').value;
    const motorterfogatMezo = document.getElementById('motorterfogat').value;
    let kiindulas = document.getElementById('kiindulas').value;
    let uticel = document.getElementById('uticel').value;
    let tovabbiuticel = document.getElementById('tovabbiuticel').value;
    let tavolsag = tavolsagMezo === "" ? Number.NaN : Number(tavolsagMezo);
    let motorterfogat = motorterfogatMezo === "" ? Number.NaN : Number(motorterfogatMezo);
    if (kiindulas === "" || uticel === "" || tovabbiuticel === "" || isNaN(tavolsag) || isNaN(motorterfogat)) {
        alert("Hiba: Nincs minden mező kitöltve!");
    }
    else {
        let fogyasztasiNorma = motorterfogat <= 1000 ? 7.6 :
            1000 < motorterfogat && motorterfogat <= 1500 ? 8.6 :
                1500 < motorterfogat && motorterfogat <= 2000 ? 9.5 :
                    2000 < motorterfogat && motorterfogat <= 3000 ? 11.4 :
                        13.3;
        let utikoltseg = fogyasztasiNorma * uzemanyagAr * tavolsag / 100;
        let amortizacio = utikoltseg * 0.3781;
        let vegosszeg = utikoltseg + amortizacio;
        document.getElementById('utikoltseg').innerHTML = `${Math.round(utikoltseg)} Ft`;
        document.getElementById('amortizacio').innerHTML = `${Math.round(amortizacio)} Ft`;
        document.getElementById('vegosszeg').innerHTML = `${Math.round(vegosszeg)} Ft`;
    }
}

let venituri = [];
let cheltuieli = [];
const rataConversieEUR = 0.20;
const rataConversieUSD = 0.24;

function adaugaVenit() {
    const nume = document.getElementById('venitNume').value;
    let valoare = parseFloat(document.getElementById('venitValoare').value);

    if (nume && !isNaN(valoare)) {
        venituri.push(valoare);
        actualizeazaLista('listaVenituri', nume, valoare, 'RON');
        calculeazaTotal();
        document.getElementById('venitNume').value = '';
        document.getElementById('venitValoare').value = '';
    }
}

function adaugaCheltuiala() {
    const nume = document.getElementById('cheltuieliNume').value;
    let valoare = parseFloat(document.getElementById('cheltuieliValoare').value);

    if (nume && !isNaN(valoare)) {
        cheltuieli.push(valoare);
        actualizeazaLista('listaCheltuieli', nume, valoare, 'RON');
        calculeazaTotal();
        document.getElementById('cheltuieliNume').value = '';
        document.getElementById('cheltuieliValoare').value = '';
    }
}

function actualizeazaLista(idLista, nume, valoare, moneda) {
    const lista = document.getElementById(idLista);
    const element = document.createElement('li');
    element.textContent = `${nume}: ${valoare.toFixed(2)} ${moneda}`;
    lista.appendChild(element);
}

function calculeazaTotal() {
    const totalVenituri = venituri.reduce((acc, val) => acc + val, 0);
    const totalCheltuieli = cheltuieli.reduce((acc, val) => acc + val, 0);
    const totalRON = totalVenituri - totalCheltuieli;
    
    const monedaSelectata = document.getElementById('monedaSelectata').value;
    
    let totalConvertit;
    if (monedaSelectata === 'EUR') {
        totalConvertit = totalRON * rataConversieEUR;
    } else if (monedaSelectata === 'USD') {
        totalConvertit = totalRON * rataConversieUSD;
    }

    document.getElementById('total').textContent = totalConvertit.toFixed(2) + ' ' + monedaSelectata;
}

function isPrimeNumber(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}
let count = 0;
for (let i = 0; i < 17; i++) {
    let containerList = document.querySelectorAll(".container");
    let row = document.createElement('div');
    containerList[1].appendChild(row);
    row.setAttribute('class', 'row');

    for (let j = 0; j < 6; j++) {
        let para = document.createElement('p');
        row.appendChild(para);
        para.innerHTML = count;
        if (isPrimeNumber(count)) para.style.backgroundColor = '#ff5c53';
        else if(count % 2 == 0)  para.style.backgroundColor = '#21bf74';
        else para.style.backgroundColor = '#fddb3b';
        count++;
    }
    
}

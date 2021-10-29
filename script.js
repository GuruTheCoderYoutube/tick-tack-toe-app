const allBoxes = document.querySelectorAll('.row div');
const ttt = document.querySelector('.ttt');

const row1 = document.querySelectorAll('.row1');
const row2 = document.querySelectorAll('.row2');
const row3 = document.querySelectorAll('.row3');

const row = document.querySelector('.row');

const box1 = document.querySelector('.box1');
const box3 = document.querySelector('.box3');
const box5 = document.querySelector('.box5');
const box7 = document.querySelector('.box7');
const box9 = document.querySelector('.box9');

let chance;

function checkIfWon() {
    let elems = [];
    if (addAndCheck(elems, row1)) {
        return true;
    }

    elems = [];

    if (addAndCheck(elems, row2)) {
        return true;
    }

    elems = [];
    if (addAndCheck(elems, row3)) {
        return true;
    }

    // console.log(`








    // RETURNING FALSE!!!









    // `)
    console.log('EOF false');
}

function checkIfAllSame(elems) {
    console.log('In checkifallsame', elems)
    console.log(elems == ['XXX'])
    console.log(elems)
    console.log(checkHorizontal());
    if (JSON.stringify(elems) === JSON.stringify(['XXX']) || JSON.stringify(elems) == JSON.stringify(['YYY']) || checkDiagonals() || checkHorizontal()) {

        // row.innerHTML = 'there is a winner';

        return true;
    }

    else {

        return false;
    }
}


function addToElems(elems, row) {
    for (let elem of row) {
        console.log(elem.innerText);
        elems.push(elem.innerText.replaceAll('\n', ''));
        // console.log(elems);
    }
}

function addAndCheck(elems, row) {

    addToElems(elems, row)
    return checkIfAllSame(elems);
}

function checkDiagonals() {
    if (box1.innerText == box5.innerText) {
        if (box5.innerText == box9.innerText) {
            return true;
        }
    }
    if (box3.innerText == box5.innerText) {
        if (box5.innerText == box7.innerText) {
            return true;
        }
    }
}
function checkHorizontal() {
    // TODO :- DO SAME FOR OTHERS.
    let full = 0;
    if (ttt.childNodes[1].childNodes[1].innerText == 'X') {
        full += 1;
    }
    if (ttt.childNodes[3].childNodes[1].innerText == 'X') {
        full += 1;
    }
    if (ttt.childNodes[5].childNodes[1].innerText == 'X') {
        full += 1;
    }
    if (full == 3) {
        console.log(full);
        full = 0;
        return true;
    }
    full = 0;
    if (ttt.childNodes[1].childNodes[1].innerText == 'Y') {
        full += 1;
    }
    if (ttt.childNodes[3].childNodes[1].innerText == 'Y') {
        full += 1;
    }
    if (ttt.childNodes[5].childNodes[1].innerText == 'Y') {
        full += 1;
    }
    if (full == 3) {
        console.log(full);
        full = 0;
        return true;
    }
    full = 0;

    if (ttt.childNodes[1].childNodes[3].innerText == 'X') {
        full += 1;
    }
    if (ttt.childNodes[3].childNodes[3].innerText == 'X') {
        full += 1;
    }
    if (ttt.childNodes[5].childNodes[3].innerText == 'X') {
        full += 1;
    }
    if (full == 3) {
        document.querySelector('img').style.display = "block";
        console.log(full);
        full = 0;
        return true;
    }
    full = 0;

    if (ttt.childNodes[1].childNodes[3].innerText == 'Y') {
        full += 1;
    }
    if (ttt.childNodes[3].childNodes[3].innerText == 'Y') {
        full += 1;
    }
    if (ttt.childNodes[5].childNodes[3].innerText == 'Y') {
        full += 1;
    }
    if (full == 3) {
        console.log(full);
        full = 0;
        return true;
    }
    full = 0;

    if (ttt.childNodes[1].childNodes[5].innerText == 'X') {
        full += 1;
    }
    if (ttt.childNodes[3].childNodes[5].innerText == 'X') {
        full += 1;
    }
    if (ttt.childNodes[5].childNodes[5].innerText == 'X') {
        full += 1;
    }
    if (full == 3) {
        console.log(full);
        full = 0;
        return true;
    }
    full = 0;

    if (ttt.childNodes[1].childNodes[5].innerText == 'Y') {
        full += 1;
    }
    if (ttt.childNodes[3].childNodes[5].innerText == 'Y') {
        full += 1;
    }
    if (ttt.childNodes[5].childNodes[5].innerText == 'Y') {
        full += 1;
    }
    if (full == 3) {
        console.log(full);
        full = 0;
        return true;
    }


    return false;

}

/* 

0: text
1: div.row1.row
2: text
3: div.row2.row
4: text
5: div.row3.row
6: text


*/
// checkVertical();
for (let box of allBoxes) {
    // console.log(box);
    box.addEventListener('click', () => {
        console.log(box.innerText);
        if (box.innerText != 'X' && box.innerText != 'Y') {
            if (chance == 'x') {
                box.innerText = 'x';
                chance = 'y'
                checkIfWon()
            }
            else if (chance == 'y') {
                box.innerText = 'y';
                chance = 'x';
                checkIfWon()
            }
            else {
                box.innerText = 'x';
                chance = 'y';
                checkIfWon()
            }
        }


    })
}


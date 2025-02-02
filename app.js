let no = document.querySelector('#no');
let yes = document.querySelector('#yes');
let gif = document.querySelector('img');
let captions = document.querySelector('h1');
let text = document.querySelector('.text');
let newh2 = document.createElement('h2');
let container = document.querySelector('.container');
noclickcount = 0;

no.addEventListener('click',async function () {
    noclickcount++;

    if (noclickcount == 1) {
        gif.src = 'shocked.webp';
        captions.innerHTML = "WHAT?? <br> YOU SAID NO ?? <br>";
        newh2.innerHTML = "Okay, will give you another chance ￣へ￣";
        text.appendChild(newh2);
    } else if (noclickcount == 2) {
        gif.src = 'teary.webp';
        captions.innerHTML = "Again..<br> Hope you will say YES now :(";
        newh2.innerHTML = "*You are breaking my heart btw*";
    } else if (noclickcount == 3) {
        gif.src = 'angry.webp';
        captions.innerHTML = "NOW TRY SAYING NO!";
        newh2.innerHTML = "You got me angry now *humpf!*";
    } else {
        moveButton();
    }

});

function moveButton() {

    let maxX = container.clientWidth - no.clientWidth;
    let maxY = container.clientHeight - no.clientHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    no.style.left = `${randomX}px`;
    no.style.top = `${randomY}px`;
}





yes.addEventListener('click', async function () {
    gif.src = 'heart.gif';
    captions.innerHTML = "YAYY! <br> YOU SAID YES!!";
    
    if(text.contains(newh2)){
        newh2.innerHTML = "I knew you would say YES! <br>ヾ(≧ ▽ ≦)ゝ";
    } else{
        newh2.innerHTML = "I knew you would say YES! <br>ヾ(≧ ▽ ≦)ゝ";
        text.appendChild(newh2);
    }
    yes.style.display = 'none';
    no.style.display = 'none';



});

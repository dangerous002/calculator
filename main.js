//declaring some variables
let expression = document.getElementById('expression');
const countBtn = document.getElementById('count');
const btnClear = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const btn = document.getElementsByClassName('btn');
const btns = btn.length;

//removing spaces in values of buttons
for(let i = 0; i < btns; i++){
    btn[i].text = btn[i].text.trim();
    console.log(btn[i].text);
}

//button click listeners
for(let i = 0; i < btns; i++){
    btn[i].addEventListener('click', () => {
        document.getElementById('expression').value += btn[i].text;
    });
}

//clearing button click listener
btnClear.addEventListener('click', () => {
    let exprValue = document.getElementById('expression').value.slice(0, -1);
    document.getElementById('expression').value = exprValue;
});

//counting button click listener
countBtn.addEventListener('click', calc);

//deleting button click listener
deleteBtn.addEventListener('click', () => {
    document.getElementById('expression').value = '';
});

//calc function
function calc(){
    //declaring some variables
    let str = document.getElementById('expression').value;
    let replacedString;
    let answer;

    //cheking for emptiness of string and do actions
    if(str == ''){
        document.getElementById('expression').value = '';
    } else {
        //remove '^' and add '**'
        replacedString = str.replace('^', '**');

        //counting an answer
        answer = eval(replacedString);

        //adding an answer to expression string
        document.getElementById('expression').value = answer;
    }
}
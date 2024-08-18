let boxes = document.querySelectorAll('.boxes')

let trunO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        console.log('click');
        if(trunO){
            btn.innerHTML = "O"
            trunO = false
        }else {
            btn.innerHTML = "X"
            trunO = true
        }
        btn.disabled = true;
    })
})
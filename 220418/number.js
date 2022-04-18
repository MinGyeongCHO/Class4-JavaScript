// 숫자형
/* 
    10진수
    255
    2진수 (0b11111111) ,
            128 64 32 16  8 4 2 1
    179 51 19 3
    2진수 (0b10110011)

    255 -192 63 - 56 - 7
    8진수 (0o377)
            64 8 1

    255
    , 16진수 (0x00ff)
                256 16 1
*/
// let num = 255;
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));

// prompt("정답을 입력하세요.", 10);

let inputNum = prompt();

let randomNum = Math.random() * 10;  // 0.0 ~ 1.0 사이의 랜덤한 값(난수)
console.log(randomNum);

console.log(Math.floor(randomNum));  // 버림.
console.log(Math.ceil(randomNum));   // 올림.
console.log(Math.round(randomNum));  // 반올림.

/*
    실습.
    프로그램이 3 ~ 10 사이의 랜덤한 값을 지정한다.
    값을 하나 입력 받아서 정답인지 아닌지 출력해준다.
*/
let correctNum = Math.floor((Math.random() * 10)) % 8 + 3; // 3 + 0 ~ 3 + 7
console.log(correctNum);

if (inputNum == correctNum)
{
        alert("정답입니다.");
} 
else
{
        alert("틀렸습니다");
}

let num = Number(2);
// let result = prompt("정답을 입력하세요.", num);
// document.write(result);
console.log("정답"+ num);
let ranNum = Math.random() * 10;
console.log(Math.floor(ranNum));  
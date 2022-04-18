// alert("start javaScript!!");



// let randomNum2 = Math.random() 

// 변수명 이름 규칙
/*
    1. 알파벳, _, -, 숫자 (한글, 특수문자, 일본어 권장 X)
     1_1. 숫자가 제일 앞에 올 수 없다.
    2. camel 표기법
     let myVeryLongLongName;
    3. 대소문자를 구분한다. -> 이름은 같아도 다른 변수가 됨.
     let myVeryLongLongName;
     let MyVeryLongLongName;
*/

// console.log(varName);   // 호이스팅
// var varName = '김진황';        // 가장 오래된 버전에서 사용하는 변수 타입. 전역변수
// console.log(varName);

// if (true)
// {
//     // 다른 영역
//     var varName = 'kimjinhwang';
// }
// console.log(varName);

let letName = 'kjh';
console.log("1) 전역변수 LET", letName);  // kjh

if (true)
{
    let letName = 'jinwang2';  // jinwang2
    console.log("2) IF 안에", letName);
}
//  ★ {} : 블록 or scope 라고 불러 => 마을

// let letMane = '김진황';
console.log(letName); // kjh

const constName = "jinwang";  // 상수 값이 수정될 일이 없는 변수. 선언과 동시에 초기화해야.
// 게임에서 1스테이지 맵의 크기
// 1스테이지 보스 이름 
// document를 변수로 선언 할 때
// constName = 'kjh';
console.log(constName);
// 사람이 알고있는 언어를 컴퓨터가 아는 언어로 바꿔주는 것(컴파일) 
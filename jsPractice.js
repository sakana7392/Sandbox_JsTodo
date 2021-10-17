/*
const letなどの変数宣言
*/

// var val1="var変数";
// console.log(val1);

// //var変数は上書き可能
// val1="var変数を上書き";
// console.log(val1);

// // var変数を再宣言
// var val1="var変数を再宣言"
// console.log(val1);

// let val2="let変数"
// console.log(val2);

// //letは上書きが可能
// val2="let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2="let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3="const変数を上書き";

// //const変数を再宣言
// const val3="const変数を再宣言";

// const val4= {
//   name: "hello",
//   age: 23,
// };
// console.log(val4);

// //constでもオブジェクトはプロパティを変更可能
// val4.name ="goodabye";
// //constは新しい要素を追加可能
// val4.addres="Hiroshima";
// console.log(val4)

// // //constで定義した配列はプロパティを変更可能
// const val5=['dog','cat'];
// val5[0]="bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name="hiro";
//  const age=23;
//  //　私の名前はnameです、年齢はage歳です

//  //従来の方法

//  const message1="私の名前は"+name+"です。年齢は"+age+"です";

//  console.log(message1);

//  //テンプレート文字列を用いた方法
//  const message2=`テンプレート:私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str){
//    return str;
//  }
//変数に関数を渡す
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// //アロー関数
// /**
//  * 変数 = (引数)=>{
//  *  処理
//  * }
//  */
// const func2 = (str) => {
//  //この中に処理を書く
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1,num2) =>{
//   return `${num1}+${num2}= ${num1+num2}`;
// };
// console.log(func3(1,5));
// console.log(func3(2,4));

/**
 * 分割代入
 */

//  const myProfile ={
//    name: "hiro",
//    age:23,
//  };

//  const message1=`名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//  console.log(message1);

//  const {name,age} = myProfile;
//  const message2=`分割代入：名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

// const myProfile=['fish',23];

// const message3=`配列:名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// //分割代入
// const [name,age]=myProfile;

// const message4=`分割代入2:名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値
 */

//  const sayHello = (name)=>console.log(`こんにちは${name}さん`);
//  sayHello("hiromichi");
//  sayHello()//undefinedが代入される

//  //デフォルト値の設定
//  //デフォルト値=渡した引数がundefinedだったときに渡す値
//  const sayHello2 = (name="ゲスト")=>console.log(`こんにちは${name}さん`);
// sayHello2() //こんにちはゲストさん
// sayHello2("おさかな")　//こんにちはおさかなさん

/**
 * スプレッド構文
 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// // ...の後に配列をかくと配列の中身をバラしてくれる
// console.log(...arr1);//console.log(1, 2);と同じ

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// //普通に渡す
// sumFunc(arr1[0], arr1[1]);
// //スプレッド構文
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4=[10,20];
// const arr5=[30,40];

// //スプレッド構文でコピー
// const arr6=[...arr4];
// arr6[0]=100;
// console.log('arr6 : '+arr6);
// //arr4の値は変化しない
// console.log('arr4 : '+arr4);
// //二次元配列
// const arr7=[arr4,arr5];
// //arr5[0]を-1に変更
// arr7[1][0]=-1;

// //参照元を書き換えるので,
// //arr7とarr5の両方の値が変わる
// console.log('arr7 : '+arr7);
// console.log('arr5 : '+arr5);

// const arr8=arr4;
// //参照先がarr4なので、arr4の値も書き換えられる
// arr8[0]=100;
// console.log('arr8 : '+arr8);
// console.log('arr4 : '+arr4);

//const nameArr =["田中","山田","佐藤"];
// for (let index=0;index<nameArr.length;index++){
//   console.log(`${index　+ 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//配列の中身を順番に処理していく
//アロー関数で処理内容を記述
//一番目の引数は値,二番目の引数はindex
//nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です。`));

// const numArr=[1,2,3,4,5];
// const newNumArr =numArr.filter((num)=>{
//   //配列に対してある条件を満たすものだけを抽出
//   return num%2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "佐藤"){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */

//ある条件 ? 条件がtrueのとき :条件がfalseのとき
//  const val1 = 1 >0 ? '1>0です' : 'falseです';
//  console.log(val1);

//  const num=1300;
//  console.log(num.toLocaleString());

//  // numが数値であればformat、そうでなければメッセージ返す
//  const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
//  console.log(formattedNum);

// const checkSum = (num1,num2)=>{
//   return num1 +num2 >100 ? '100より大きいです' : '許容範囲内です';
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子の意味
 */

//  const flag1=true;
//  const flag2=true;

//  if (flag1 || flag2){
//    console.log("1か2はtrueになります");
//  }
//  if (flag1 && flag2){
//   console.log("1も2はtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num =-1;
// const fee =num || "金額未設定です";
// console.log(fee);
// //num<0でtrueになる
// if(num){
//   console.log('num is true');
// }

//左側がtrueなら右側を返す
// const num2 = 100;
// const fee2  = num2 && "何か設定されました";
// console.log(fee2);

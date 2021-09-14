//! נתון מספר:

// var number = 10;

//! אם המספר הוא 2  הדפס המספר כפול 2
//! אם המספר הוא 5  הדפס המספר כפול 5
//! אם המספר הוא 7  הדפס המספר כפול 7
//! אם המספר הוא 10  הדפס המספר כפול 10
//! אחרת הדפס את המספר עצמו

// if (number == 2 || number == 5 || number == 7 || number == 10){
//     console.log(number * number);
// }
// else{
//     console.log(number);
// }

//! בצע את תרגיל 1 בעזרת switch case

// switch (number) {
//     case 2:
//         console.log(number * 2);
//         break;
//     case 5:
//         console.log(number * 5);
//         break;
//     case 7:
//         console.log(number * 7);
//         break;
//     case 10:
//         console.log(number * 10);
//         break;
//     default:
//         console.log(number);
//         break;
// };

//? ----------------------------------------------------------------------


//! בדוק מקרים בהם המספר הוא מ 1-7 בכל מקרה הדפס את היום המתאים לו

// var day = 5;

// switch (day) {
//     case 1:
//         console.log("יום ראשון");
//         break;
//     case 2:
//         console.log("יום שני");

//         break;
//     case 3:
//         console.log("יום שלישי");

//         break;
//     case 4:
//         console.log("יום רביעי");

//         break;
//     case 5:
//         console.log("יום חמישי");

//         break;
//     case 6:
//         console.log("יום שישי");
//         break;
//     case 7:
//         console.log("יום שבת");
//         break;
//     default:
//         console.log(day);
// };

//? ----------------------------------------------------------------------

//! נתון אובייקט של משתמש: שם, אימייל וסוג משתמש(admin, super admin, client)
//! במקרה והוא מנהל הדפס "you are admin"
//! במקרה והוא סופר מנהל הדפס "you are a super admin"
//! אחרת הדפס "you are our loyal client"

// var myObject = {
//     name: "Ruti",
//     email: "ruti@gmail.com",
//     type: "super admin"
// };

// switch(myObject.type){
//     case "admin":
//         console.log("you are admin");
//         break;
//     case "super admin":
//         console.log("you are a super admin");
//         break;
//     default:
//         console.log("you are our loyal client");
//         break;
// };

//? ----------------------------------------------------------------------

//! צור 5 כפתורים עם שמות של פירות:
//! בלחיצה על כל אחד מהם הפעל את אותה הפונקציה(שאתם יוצרים) שמדפיסה איזה פרי נלחץ

// var fruitsArray = document.getElementsByClassName("fruits");

// function printChosenFruit(fruit) {
//     switch (fruit) {
//         case fruit:
//             console.log(fruit);
//             break;
//     }
// };

// for (var i = 0; i < fruitsArray.length; i++) {
//     fruitsArray[i].addEventListener("click", (event) => {printChosenFruit(event.target.innerText)});
// }

//? ----------------------------------------------------------------------

//! נתון מערך של 5 רכבים: דגם, שנתון, מחיר, הנחה(כמה אחוז), תמונה(קישור)
//! הצג את כל הרכבים על המסך כולל מחיר רגיל ומחיר אחרי הנחה
//! במידה וההנחה הוא 25 אחוז הקפץ הודעה "crazy sell"
//! במידה וההנחה הוא 10 אחוז הקפץ הודעה "  good deal for you" 
//! במידה וההנחה הוא 7 אחוז הקפץ הודעה "not bad" 
//! במידה וההנחה הוא 3 אחוז הקפץ הודעה "this is joke" 

// var carsArray = [
//     {
//         price: 23000,
//         year: 2015,
//         model: "Abarth",
//         discount: 10,
//         img: "https://cdn.pixabay.com/photo/2017/08/31/16/08/fiat-124-spider-abarth-2701219__340.jpg"
//     },
//     {
//         price: 29000,
//         year: 2017,
//         model: "Aston Martin",
//         discount: 7,
//         img: "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857__480.jpg"
//     },
//     {
//         price: 410000,
//         year: 2020,
//         model: "Bentley",
//         discount: 7,
//         img: "https://cdn.pixabay.com/photo/2017/02/16/18/54/bentley-2072125__340.jpg"
//     },
//     {
//         price: 212000,
//         year: 2019,
//         model: "BMW",
//         discount: 10,
//         img: "https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg"
//     },
//     {
//         price: 20000,
//         year: 2005,
//         model: "Acura",
//         discount: 3,
//         img: "https://cdn.pixabay.com/photo/2017/06/01/08/29/acura-2362817__480.jpg"
//     },
// ];


// function checkDiscount(number) {
//     switch (number) {
//         case 3:
//             return "this is joke";
//         case 7:
//             return "not bad";
//         case 10:
//             return "good deal for you";
//         case 25:
//             return "crazy sell";
//     }
// };

// mySection = document.getElementById("myContainer");

// for (var i = 0; i < carsArray.length; i++){
//     mySection.innerHTML += `<article>
//     <h1>Model: ${carsArray[i].model}</h1>
//     <h3>Year: ${carsArray[i].year}</h3>
//     <h4>Before discount: ${carsArray[i].price}</h4>
//     <h2>${checkDiscount(carsArray[i].discount)}</h2>
//     <h3>After discount: ${carsArray[i].price - carsArray[i].price * carsArray[i].discount / 100}</h3>
//     <img class="picture" src=${carsArray[i].img}>
//     </article>`
    
// }
const products = [
{ id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
{ id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
{ id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
{ id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
{ id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
{ id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 },
];


const students = [
{ id: 1, name: "Ali", age: 18, score: 85 },
{ id: 2, name: "Vali", age: 17, score: 52 },
{ id: 3, name: "Madina", age: 19, score: 95 },
{ id: 4, name: "Sardor", age: 18, score: 67 },
{ id: 5, name: "Aziza", age: 17, score: 43 },
{ id: 6, name: "Jasur", age: 20, score: 76 },
];

// =================================================================================

// 1-masala. Qimmat mahsulotlar
// Qiyinlik: 2/10
// products massivida narxi 800 dollardan yuqori bo‘lgan mahsulotlarni ajratib, yangi massiv qaytaring.
// filter() metodidan foydalaning. Asl massiv o‘zgarmasligi kerak.

// let filtered=products.filter((item)=> item.price>800)
// console.log(filtered);

// ==============================================================================

// 2-masala. Talabalar ro‘yxati
// Qiyinlik: 2/10
// students massividagi barcha talabalarni forEach() yordamida konsolga quyidagi ko‘rinishda chiqaring: Ali —
// 85 ball; Vali — 52 ball; Madina — 95 ball. Har bir talaba uchun ism va ball ko‘rsatilishi kerak.

// let foreached=students.forEach((item)=>{ console.log(`${item.name} - ${item.score} ball`);})

// ===================================================================================

// 3-masala. Chegirmali narxlar
// Qiyinlik: 3/10
// products massiviga asoslanib, har bir mahsulotning chegirmadan keyingi narxini hisoblang va yangi massiv
// yarating. Yangi obyektlarda name, price, discount va finalPrice maydonlari bo‘lsin. Formula: finalPrice =
// price - (price × discount / 100).

// products.map((item)=>item.finalPrice = item.price-item.price*item.discount/100)
// console.log(products);

// ====================================================================================

// 4-masala. Talabani ID orqali topish
// Qiyinlik: 3/10
// students massivida id qiymati 4 ga teng bo‘lgan talabani toping. Topilgan talabaning ismi va ballini konsolga
// chiqaring. Agar talaba topilmasa, “Talaba topilmadi” xabarini chiqaring.
// find() metodidan foydalaning.

// let qidiruv=students.find((item)=> item.id===4)
// let talaba=qidiruv ? `${qidiruv.name} - ${qidiruv.score}` : "Talaba topilmadi"
// console.log(talaba);

// ===================================================================================

// 5-masala. Omborda mahsulot bormi?
// Qiyinlik: 4/10
// products massividagi kamida bitta mahsulotning stock qiymati 0 ga tengmi? Natija true yoki false bo‘lsin.
// Natijaga qarab “Omborda tugagan mahsulot bor” yoki “Barcha mahsulotlar mavjud” xabarini chiqaring.
// some() metodidan foydalaning.

// let ombordaBormi=products.some((item)=>item.stock===0) 
// let natija=ombordaBormi ? "Omborda tugagan mahsulot bor" : "Barcha mahsulotlar mavjud"
// console.log(natija);

// ========================================================================================

// 6-masala. Barcha talabalar imtihondan o‘tganmi?
// Qiyinlik: 4/10
// Imtihondan o‘tish uchun talaba kamida 60 ball olishi kerak. Barcha talabalar 60 yoki undan yuqori ball
// olganini tekshiring. Natija true yoki false bo‘lsin va mos xabar chiqaring.
// every() metodidan foydalaning.

// let barchaTalaba=students.every((item)=> item.score>=60)
// let natija=barchaTalaba ? "Barcha talaba 60 dan yuqori olgan" : "Barcha talaba 60 dan yuqori olmagan"
// console.log(natija);

// ===============================================================================================

// 7-masala. Mahsulotlarni narx bo‘yicha saralash
// Qiyinlik: 5/10
// products massivini narxi bo‘yicha eng arzondan eng qimmatga qarab saralang. Mahsulot nomi va narxini
// chiqaring.
// sort() metodidan foydalaning. Eslatma: sort() massivni o‘z joyida o‘zgartiradi.

// let saralash = products.sort((a,b)=>a.price-b.price)
// saralash.forEach((item)=>{
//     console.log(`${item.name} - ${item.price}`);
    
// })

// ===========================================================================================

// 8-masala. Yuqori ball olgan talabalar
// Qiyinlik: 5/10
// students massivida 70 va undan yuqori ball olgan talabalarni ajrating. Ularni ballari bo‘yicha kamayish
// tartibida saralang. Natijada faqat talabalarning ismi va balli bo‘lgan yangi massiv hosil qiling.
// filter(), sort() va map() metodlaridan foydalaning.

// let saralash=students.filter((item)=>item.score>=70)
// let kamayish=saralash.sort((a,b)=>b.score-a.score)
// let natija= saralash.map((item)=>`${item.name} - ${item.score} ball`)

// console.log(natija);

// ============================================================================================

// 9-masala. Chegirmali mahsulotlarni tekshirish
// Qiyinlik: 7/10
// products massividan chegirmasi 10% yoki undan yuqori bo‘lgan mahsulotlarni ajrating. Ularning
// chegirmadan keyingi narxini hisoblang. So‘ng chegirmadan keyingi narxi 800 dollardan yuqori bo‘lgan
// mahsulot bor-yo‘qligini tekshiring. Mahsulotlar ro‘yxati va tekshiruv natijasini chiqaring.
// filter(), map() va some() metodlaridan foydalaning.

// let chegirmali = products.filter((item) => item.discount >= 10);
// let hisoblangan = chegirmali.map((item) => ({
//   ...item,
//   keyinginarx: item.price - (item.price * item.discount) / 100,
// }));
// let bor = hisoblangan.some((item) => item.keyinginarx > 800);
// let natija = bor
//   ? "800 dollardan yuqori narxli mahsulot bor"
//   : "birorta mahsulot 800 dollardan yuqori emas";
// console.log(hisoblangan);
// console.log(natija);

// =======================================================================================

// 10-masala. Talabalar natijasi bo‘yicha tahlil
// Qiyinlik: 8/10
// students massivi bilan quyidagi ishlarni bajaring: 1) 60 yoki undan yuqori ball olgan talabalarni ajrating; 2)
// ularni ballari bo‘yicha kamayish tartibida saralang; 3) map() orqali ism va ballni yangi massivga o‘tkazing; 4)
// find() bilan 90 dan yuqori ball olgan birinchi talabani toping; 5) some() bilan kamida bitta talaba 90 dan
// yuqori ball olganini tekshiring; 6) every() bilan barcha talabalar 40 yoki undan yuqori ball olganini
// tekshiring; 7) forEach() yordamida har bir talabaning ismi va ballini alohida chiqaring.
// Qo‘shimcha shart: har bir metodning vazifasini tushuntirib bera olish kerak.

// let filtered=students.filter((item)=>item.score>=60)
// console.log(filtered);
// console.log("============================================");


// let kamayish=filtered.sort((a,b)=>b.score-a.score)
// console.log(kamayish);
// console.log("============================================");

// let yangi_massiv=kamayish.map((item)=> `${item.name} - ${item.score}`)
// console.log(yangi_massiv);
// console.log("============================================");

// let yuqorimi=kamayish.find((item)=>item.score>90)
// console.log(yuqorimi);
// console.log("============================================");

// let tekshirishSome=students.some((item)=>item.score>90)
// let bormiSome=tekshirishSome ? "90 dan yuqori balli bola bor" : "90 dan yuqori balli bola yo'q"
// console.log(bormiSome);
// console.log("============================================");

// let tekshirishEvery=students.every((item)=>item.score>=40)
// let bormiEvery=tekshirishEvery ? "Barcha bola 40 dan yuqori olgan" : "40 dan past olgan bola ham bor"
// console.log(bormiEvery);
// console.log("============================================");

// let chiqarish=students.forEach((item)=>{console.log(`${item.name} - ${item.score} ball`);
// })
// console.log("============================================");


// =========================================================================================================





















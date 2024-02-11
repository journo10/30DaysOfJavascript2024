console.log("Hello, World!");
console.log("Hello", "World", "!");
console.log("HAPPY", "NEW", "YEAR", 2024);
console.log("Welcome", "to", 30, "Days", "Of", "JavaScript");

// Tek Satırlı Açıklama
// Bu ilk yorum
// Bu ikinci yorum
// Ben tek satırlık bir yorumdur.

/*
 Bu çok satırlı bir yorumdur
 Çok satırlı yorumlar birden çok satır alabilir 
 JavaScript web'in dilidir  
 */

console.log(6 + 3); //  toplama
console.log(6 - 3); //  çıkarma
console.log(6 * 3); //  çarpma
console.log(6 / 3); //  bölme
console.log(6 % 3); //  mod alma
console.log(6 ** 3); // üs alma => 6*6*6 = 216

// Veri Türlerine Giriş
// Tam sayılar: Integer (sıfır dahil negatif ve pozitif) => Örnek: ... -3, -2, -1, 0, 1, 2, 3 ...
// Ondalıklı sayılar: (Float / Decimal) => Örnek ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

// String
// Tek tırnak, çift tırnak veya ters tırnak(backtick) arasında yer alan, bir veya daha fazla karakterden oluşan metinsel değerlerdir

("js");
("Javascirpt");
("İstanbul");
("Maltepe");
("JavaScript güzel bir programlama dilidir");
("Öğrenmeyi seviyorum");
`Unutma, ayrıca bir ters tırnak kullanarak bir dize de oluşturabiliriz`;
("string veri türü, bir karakter kadar küçük, sayfalar kadar büyük olabilir.");

// Number
// sayı, sayılar
console.log(5); // number

// Boolean
// Boolean veri türü, yalnızca True(doğru) veya False(yanlış) bir değer alır-dönderir.
true; // değer doğrudur
false; // değer yanlıştır

// Undefined
// JavaScript'te, bir değişkene bir değer atamaz isek, değeri undefined olarak alır. Buna ek olarak, bir fonksiyon hiçbir şey döndürmüyorsa, döndereceği tanım 'undefined' tır.
let name;
console.log(name); // undefined, çünkü henüz değişkene bir değer atanmamış.

// Null
// JavaScript'te 'null' boş bir değer anlamına gelir.
let bosDeger = null;
console.log(bosDeger);

// NOT: typeof => Bir değişkenin veri türünü kontrol etmek için typeof operatörünü kullanır.
console.log(typeof "javascript"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined

// Değişkenler
// Sözdizimi
// let degiskenAdi = degeri;

// Farklı veri türlerinin, farklı değişkenlerini tanımlama
let name_1 = "Selçuk"; // bir kişinin adı
let last_name = "İnan"; // bir kişinni soyadı
let country = "Türkiye"; // ülke
let city = "Hatay"; // başkent
let age = 37; // yaş

console.log(name_1, last_name, country, city, age);
console.log(`${name_1}, ${last_name}, ${country}, ${city}, ${age}`);

let name_2 = "arda",
  last_name_1 = "turan",
  age_1 = "39";

console.log(name_2, last_name_1, age_1);

// Değişkenlere sayı değerleri tanımlama
let yas = 100; // yas
const yerCekim = 9.81; // m/s2 cinsinden yer çekimi değeri
const kaynamaNoktasi = 100; // °C cinsinden suyun kaynama noktası
const PI = 3.14; // geometrik sabit
console.log(yerCekim, kaynamaNoktasi, PI);

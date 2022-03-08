let price1 = 100;
let price2 = 1234;
let price3 = 12345678912345;

jpy_price1 = new Intl.NumberFormat().format(price1);
jpy_price1 = new Intl.NumberFormat().format(price2);

let jpy_price1 = price1.toLocaleString('ja-JP', {style:'currency', currency: 'JPY', minimumFractionDigits: 2});
let jpy_price2 = price1.toLocaleString('ja-JP', {style:'currency', currency: 'JPY', minimumFractionDigits: 2});
let jpy_price3 = price1.toLocaleString('ja-JP', {style:'currency', currency: 'JPY', minimumFractionDigits: 5});

let usd_price1 = price1.toLocaleString('en-US', {style:'currency', currency: 'USD'});
let usd_price2 = price2.toLocaleString('en-US', {style:'currency', currency: 'USD'});
let usd_price3 = price3.toLocaleString('en-US', {style:'currency', currency: 'USD'});

console.log( jpy_price1);
console.log( jpy_price2);
console.log( jpy_price3);

console.log( usd_price1);
console.log( usd_price2);
console.log( usd_price3);



//contoh object
//mengubah object jadi json
// let data = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// console.log(JSON.stringify(data)); //method

//pake ajax // vanila javascript manual
let xhr = new XMLHttpRequest;
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);

    }
}
xhr.open('GET', 'coba.json', true);
xhr.send();

//pake jquery
// $.getJSON('coba.json', function(data) {
//     console.log(data)
// })
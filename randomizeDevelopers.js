function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



var firstLogo = document.getElementById("firstLogo");
var firstName = document.getElementById("firstName").textContent;
var firstImage = document.getElementById("firstImage");
var firsthref = document.getElementById("firsthref");

var firstObject = { logo: firstLogo.attributes.src.nodeValue, companyName: firstName, image: firstImage.attributes.src.nodeValue, href: firsthref.attributes.href.nodeValue }

var secondLogo = document.getElementById("secondLogo");
var secondName = document.getElementById("secondName").textContent;
var secondImage = document.getElementById("secondImage");
var secondhref = document.getElementById("secondhref");

var secondObject = { logo: secondLogo.attributes.src.nodeValue, companyName: secondName, image: secondImage.attributes.src.nodeValue, href: secondhref.attributes.href.nodeValue }


var thirdLogo = document.getElementById("thirdLogo");
var thirdName = document.getElementById("thirdName").textContent;
var thirdImage = document.getElementById("thirdImage");
var thirdHref = document.getElementById("thirdHref");

var thirdObject = { logo: thirdLogo.attributes.src.nodeValue, companyName: thirdName, image: thirdImage.attributes.src.nodeValue, href: thirdHref.attributes.href.nodeValue }

var fourthLogo = document.getElementById("fourthLogo");
var fourthName = document.getElementById("fourthName").textContent;
var fourthImage = document.getElementById("fourthImage");
var fourthHref = document.getElementById("fourthHref");

var fourthObject = { logo: fourthLogo.attributes.src.nodeValue, companyName: fourthName, image: fourthImage.attributes.src.nodeValue, href: fourthHref.attributes.href.nodeValue }


let itemObject = { logo: '', companyName: '', image: '', href: ''}
let arr = [firstObject, secondObject, thirdObject, fourthObject];




function randomize( logo, companyName, image , href){
    itemObject.logo = logo ;
    itemObject.companyName = companyName;
    itemObject.image = image;
    itemObject.href = href;

    var newarr = [firstObject, secondObject, thirdObject, fourthObject];
    newarr.push(itemObject);
    newarr= shuffle(newarr);
    arr=shuffle(arr);
    arr[0]= newarr[0];
    arr[1]= newarr[1];
    arr[2]= newarr[2];
    arr[3]= newarr[3];
    clearInterval();
    return(arr);
}




window.setInterval(function () {
 
var arr = randomize('img/3.jpg' , 'Golf City' , 'img/2.jpg' , 'www.facebook.com');
// first image 
document.getElementById("firstLogo").setAttribute("src", arr[0].logo);
document.getElementById("firstName").innerHTML = arr[0].companyName;

document.getElementById("firstImage").setAttribute("class", 'flash rounded');

document.getElementById("firstImage").setAttribute("src", arr[0].image);

document.getElementById("firsthref").setAttribute("href",arr[0].href );

}, 5000);

window.setInterval(function () {

// second image 
document.getElementById("firstImage").setAttribute("class", 'rounded');


document.getElementById("secondLogo").setAttribute("src", arr[1].logo);
document.getElementById("secondName").innerHTML = arr[1].companyName;
document.getElementById("secondImage").setAttribute("class", 'flash rounded');

document.getElementById("secondImage").setAttribute("src", arr[1].image);


document.getElementById("secondhref").setAttribute("href",arr[1].href );
}, 5100);

window.setInterval(function () {
// third image 
document.getElementById("secondImage").setAttribute("class", 'rounded');

document.getElementById("thirdLogo").setAttribute("src", arr[2].logo);
document.getElementById("thirdName").innerHTML = arr[2].companyName;
document.getElementById("thirdImage").setAttribute("class", 'flash rounded');

document.getElementById("thirdImage").setAttribute("src", arr[2].image);
document.getElementById("thirdImage").setAttribute("class", ' rounded');

document.getElementById("thirdHref").setAttribute("href",arr[2].href );
}, 5200);

window.setInterval(function () {
// third image 
document.getElementById("thirdImage").setAttribute("class", 'rounded');

document.getElementById("fourthLogo").setAttribute("src", arr[3].logo);
document.getElementById("fourthName").innerHTML = arr[3].companyName;
document.getElementById("fourthImage").setAttribute("class", 'flash rounded');
document.getElementById("fourthImage").setAttribute("src", arr[3].image);
document.getElementById("fourthImage").setAttribute("class", ' rounded');

document.getElementById("fourthHref").setAttribute("href",arr[3].href );
}, 5300);
window.setInterval(function () {
    // third image 
 
    document.getElementById("fourthImage").setAttribute("class", ' rounded');

    }, 5350);

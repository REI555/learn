function myFirstApp (name, age) {

alert ("Привет, меня зовут " + name + " и это моя первая программа"); 


function showSkills () {

let skills = [];
	
	skill = [

"HTML",
"CSS",
"Fotoshop"



	]




for (let i = 0; i < skill.length; i++) {

// Я владею html <br> 
skills[i] = skill[i] + '<br>'




};

document.write("Я владею <br>" + skills);

}



showSkills();




function checkAge () {

if (age > 18) {
//message
alert ("Добро пожаловать !!!");

} else {
	
alert ("Рано Вам еще, заходите позже");

}



}

checkAge();


function calcPow (now) {

console.log(now * now);
console.log(now + 12);




}

calcPow(4);




}


myFirstApp("Alexander", 33);
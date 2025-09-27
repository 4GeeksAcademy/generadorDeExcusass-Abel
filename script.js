let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function listRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function excuseGenerator(who, action, what, when) {
    return `${listRandom(who)} ${listRandom(action)} ${listRandom(what)} ${listRandom(when)}`
}

document.getElementById("excuse").innerHTML = excuseGenerator(who, action, what, when);
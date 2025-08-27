// let div = document.getElementById('main');
// div.style.fontWeight = 'bold';

// // Array.from(p).forEach(a=>a.style.color = 'green')
// var p = document.querySelectorAll('.one');
// p.forEach(a=>a.style.color ='red');

// document.createTextNode
// document.createElement
// document.appendChild
// document.removeChild

// div.style.fontWeight = 'bold';
// div.style.height = '20rem';
// div.style.width = '20rem';
// div.style.border = '1px solid black ';
// div.style.overflow = 'scroll ';

// // div.style.fontWeight = 'bold';
// document.getElementById("btncr").addEventListener('click',()=>{
//     let p  = document.createElement('p');
//     p.setAttribute('id','child');
//     let text = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit")
//     p.appendChild(text);
//     div.appendChild(p);
//     console.log("Created")
// })
// document.getElementById("btnrm").addEventListener('click',()=>{
//     // let child = document.getElementById('child');
//     // div.removeChild(child);
//     let lastChild = div.lastChild;
//     div.removeChild(lastChild);
//     console.log("removed")
// })
// document.getElementById("tt").addEventListener('click',()=>{
//     let b = document.body;
//     let color = "black";
//     b.style.backgroundColor = `${color}`;
//     console.log(`color changed to ${color}` )
// })

let div = document.getElementById('main');
let button=div.firstElementChild
let ul= button.nextElementSibling

// let ul = document.getElementById('nav');

ul.style.fontWeight = 'bold';
ul.style.height = '20rem';
ul.style.width = '20rem';
ul.style.border = '1px solid black ';
ul.style.overflow = 'scroll ';

// ul.style.display = 'none';

button.addEventListener('click',()=>{
    ul.style.display = 'flex';
})

// var del = document.querySelecgtorAll('.del');
// del.forEach(a => a.addEventListener('click',function(e){
//     var li = e.target.parentElement;
//     li.remove();
// }));
// document.getElementsByClassName('del').addEventListener('click',()=>{
//     let bu = e.target;
//     let last = bu.firstElementChild;
//     div.remove(last);
//     console.log("remove")
// })

let body = document.body
let parent = body.firstElementChild
let child = parent.firstElementChild


parent.style.border = '1px solid black ';
parent.style.height = '80vh';

child.style.border = '1px solid black ';
child.style.height = '50%';

// Event bubbling
// event name, callback fn, capturing 
body.addEventListener('click',function(e){
    alert('Body')
})
parent.addEventListener('click',function(e){
    alert('parent')
})
child.addEventListener('click',function(e){
    alert('child')
    e.stopPropagation()
})









// buladi birinchi 3 ta categiey
// 3tani uchida 3 ta buladi umumiy 9 ta

// elemntni ichida rssdm bualdi kategoriyasi price titel bio id
const menu= [
    {
        id:0,
        name:'snikers',
        price: 15.99,
        category:'sweets',
        img:"./image/snikers.jpg",
    },
    {
        id:1,
        name:'hot-dog',
        price: 12.99,
        category:'foods',
        img:"./image/xotdog.webp",
    },
    {
        id:2,
        name:'fanta',
        price: 13.99,
        category:'drinks',
        img:"./image/fanta.jpeg",
    },
    {
        id:3,
        name:'twiks',
        price: 16.99,
        category:'sweets',
        img:"./image/tviks.jpg",
    },
    {
        id:4,
        name:'cake',
        price: 17.99,
        category:'sweets',
        img:"./image/tort.jpg",
    },
    {
        id:5,
        name:'cola',
        price: 18.99,
        category:'drinks',
        img:"./image/cola.jpg",
    },
    {
        id:6,
        name:'lagmon',
        price: 19.99,
        category:'foods',
        img:"./image/lagmon.jpg",
    },
    {
        id:7,
        name:'kebab',
        price: 20.99,
        category:'foods',
        img:"./image/shashlik.jpg",
    },
    {
        id:8,
        name:'pepsi',
        price: 22.99,
        category:'drinks',
        img:"./image/pepsi.jpg",
    },
    {
        id:9,
        name:'osh',
        price: 24.99,
        category:'foods',
        img:"./image/osh.jpg",
    },
]

let saved = [
   
]



const foods =document.querySelector('.foods');

window.addEventListener('DOMContentLoaded', function(){
 let displayMenu = menu.map(function(item){
   return ` <div class="herofood">
   <img src=${item.img} alt="img" width="300px" height="200px">
   <h4>${item.name}</h4>
   <h4 class="price">$${item.price}</h4>
   
   <button onclick="add(${item.id})">add</button>
</div>`
 })
 displayMenu = displayMenu.join('')
 foods.innerHTML =displayMenu
})


// function addToSaved(itemIndex) {
//     console.log(menu[itemIndex].name);
//     saved.push(itemIndex);

//     show_korzinka();
// }



 


const qiymat = document.getElementById('qiymat');
const search = document.getElementById('search');



search.addEventListener('click', function(){
    let displayMenu = menu.map(function(item){
        console.log(qiymat.value);
        if(qiymat.value==item.category){
            return `<div class="herofood">
            <img src=${item.img} alt="img" width="300px" height="200px">
            <h4>${item.name}</h4>
            <h4 class="price">$${item.price}</h4>
         </div>`
        }

    })
    displayMenu = displayMenu.join('')
    foods.innerHTML =displayMenu
   })



   

const select=document.getElementById('select')
   
select.addEventListener("click", function(){
    let displayMenu = menu.map(function(item){
        if(select.value === item.category){
            return ` <div class="herofood">
            <img src=${item.img} alt="img" width="300px" height="200px">
            <h4>${item.name}</h4>
            <h4 class="price">$${item.price}</h4>
         </div>`
        }

    })
    displayMenu = displayMenu.join('')
    foods.innerHTML =displayMenu
   })
   


  



// const korzinka_dom = document.querySelector('.korzinka');

// function show_korzinka() {
//     let displayMenu = saved.map(function(item){
//         return `
//         <div>
//         <img src="${menu[item].img}" alt="img" width="300px" height="200px">
//         <h4>${menu[item].name}</h4>
//         <h4 class="price">$${menu[item].price}</h4>
//         <button>remove</button>
//      </div>
//         `

// })
// displayMenu = displayMenu.join('')
// foods.innerHTML =displayMenu;

// }





function remove (id){
    savedd.pop(id)
    filter(menu, savedd)
}




const savedd = [];

function add (id){
    savedd.push(id)
    filter(menu, savedd)
}

function filter(menu, savedd){
    let saved_copy = box ;
    saved_copy.innerHTML='';
    for(let i= 0; i < menu.length; i++){
        for(let k =0; k < savedd.length; k++){
            if(menu[i].id === savedd[k]){
                console.log(menu[i]);
                saved_copy.innerHTML +=`<img src="${menu[i].img}" alt="img" width="300px" height="200px">
                <h2>${menu[i].name}</h2>
                <button onclick="remove(${menu[i].id})" class="add">remove</button>
                <h4 class="price">$${menu[i].price}</h4>
                `
            }
        }
    }
}





const box=document.querySelector('.korzinkabox')
const idbtn =document.getElementById('korzinka')
function addClass(){
    box.classList.toggle('active')
    filter(menu, savedd)
}




  




























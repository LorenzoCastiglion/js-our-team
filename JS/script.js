"use strict"




// BONUS 2:
// Organizzare i singoli membri in card/schede e stilarli a vostro gusto :slightly_smiling_face:
// BONUS 3:
// Aggiungere attraverso un form un membro al team



// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const team = [

    {
        nome: 'Waine Barnett',
        role: 'Founder "&" CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    },

]




// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto


for(let element of team){
    for(let key in element){
        console.log(`${key}: ${element[key]}`);
    }
    
}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringheconst carte = document.querySelector('.container')


const carte = document.getElementById('profili')

carte.classList.add('row','flex-wrap', 'justify-content-center',  'm-auto', 'text-center')



function addCard(){

    for(let element of team){
        const carta = document.createElement('div');
        carta.classList.add( 'text-center', 'col-3', 'm-4', 'p-3','border', 'border-5', 'border-dark' )
        
        
        for(let key in element){
           
            if(key == 'nome'){
                const innerCard =document.createElement('div')
                innerCard.classList.add('nome')
                innerCard.innerHTML = `${element[key]}`;
                carte.append(carta)
                carta.append(innerCard);
            }
            else if(key == 'role'){
                const innerCard =document.createElement('div')
                innerCard.classList.add('role')
                innerCard.innerHTML = `${element[key]}`;
                carte.append(carta)
                carta.append(innerCard);
            } 
            else if(key == 'photo'){
                // BONUS 1:
                // Trasformare la stringa foto in una immagine effettiva
                const innerCard =document.createElement('div')
                innerCard.innerHTML = `<img class="img-fluid my-3" src="../img/${element[key]}">`;
                innerCard.classList.add('photo', 'px-2' )
                carte.append(carta)
                carta.prepend(innerCard);
            }
           
        }
        
    }

    
}


addCard();

// input dall'user che cicla l'array oggetto e parsa solo l'ultimo elemento trovato nell'array cosi' da prendere solo l'elemento pushato dall'user

const btnAdd = document.querySelector('button')





btnAdd.addEventListener('click', function addCardUser(){

    for(let element of team.slice(-1)){
        const carta = document.createElement('div');
        carta.classList.add( 'text-center', 'col-3', 'm-4', 'p-3','border', 'border-5', 'border-dark' )
        
        
        for(let key in element){
           
            if(key == 'nome'){
                const innerCard =document.createElement('div')
                innerCard.classList.add('nome')
                innerCard.innerHTML = `${element[key]}`;
                carte.append(carta)
                carta.append(innerCard);
            }
            else if(key == 'role'){
                const innerCard =document.createElement('div')
                innerCard.classList.add('role')
                innerCard.innerHTML = `${element[key]}`;
                carte.append(carta)
                carta.append(innerCard);
            } 
            else if(key == 'photo'){
                // BONUS 1:
                // Trasformare la stringa foto in una immagine effettiva
                const innerCard =document.createElement('div')
                innerCard.innerHTML = `${element[key]}` ;
                innerCard.classList.add('photo', 'px-2' )
                carte.append(carta)
                carta.prepend(innerCard);
            }
           
        }
        
    }

    
});




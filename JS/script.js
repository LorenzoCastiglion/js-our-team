"use strict"



// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
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

for(let element of team){
    for(let key in element){
        console.log(`${key}: ${element[key]}`);
    }
    
}



// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

const carte = document.getElementById('card')

for(let element of team){
    
    for(let key in element){
        const carta = document.createElement('div');
        carta.innerHTML += element[key];
        carte.append(carta);
    }
    
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
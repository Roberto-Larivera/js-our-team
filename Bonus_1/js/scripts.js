console.log('int ok');

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.                              //ok

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

dati:

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/
const containerListUl = document.getElementById('info-members');
const teamMembers = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    }
];
for(let i = 0; i < teamMembers.length; i++){
    for(let key in teamMembers[i]){
        console.log('-',i+1,'Membro del Team:',teamMembers[i][key]);
        if(key == 'image'){
            console.log('Dentro ciclo img');
            generationImage (containerListUl,i,teamMembers[i][key])
        }
        else{

            generationList (containerListUl,i,teamMembers[i][key])
        }
    }
};








function generationList (containerList,i,value){
    const newListLi = document.createElement('li');
    newListLi.innerText = `${i+1} Membro del Team: ${value}`;
    containerList.append(newListLi);
}

function generationImage (containerList,i,value){
    const newImg = document.createElement('img');
    newImg.setAttribute("src",`img/${value}`);
    containerList.append(newImg);
}
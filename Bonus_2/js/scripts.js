console.log('int ok');

/*
dati:

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/


// BONUS 3

const containerRowCard = document.getElementById('my-row-cont');
const saveInput = document.getElementById('save-input');


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



editCard (teamMembers);

saveInput.addEventListener('click',
    function (){
        const inputName = document.getElementById('name-input').value;
        const inputRole = document.getElementById('role-input').value;
        const inputImage = document.getElementById('image-input').value;
        const inputVerify = document.getElementById('verify').checked;
        // console.log('inputName',inputName);
        // console.log('inputRole',inputRole);
        // console.log('inputImage',inputImage);
        console.log('inputVerify',inputVerify);
        if(inputVerify == false || inputName == '' || inputRole == '' || inputImage =='false'){
            alert('Dati inseriti non validi')
        }
        else{
            
            teamMembers.push({
                name : inputName,
                role : inputRole,
                image : inputImage
            });
            containerRowCard.innerHTML ="";
            editCard (teamMembers);
            document.getElementById('form-my').reset();
        }
        console.log('teamMembers',teamMembers);
        
    }
)
console.log('teamMembers',teamMembers);





function prevent(e){        //serve per utilizzare il form con un butoon di type submit
    e.preventDefault();
  }



function editCard (teamMembers){
    for(let i = 0; i < teamMembers.length; i++){
        // console.log(teamMembers[i].name,'- name');
        // console.log(teamMembers[i].role,'- role');
        // console.log(teamMembers[i].image,'- image');
        //console.log
        const memberName = teamMembers[i].name;
        const memberRole = teamMembers[i].role;
        // const memberImg = ;
        createCard (memberName,memberRole,teamMembers[i].image)
    };
}





function createCard (mName,mRole,mImg){
    const newCol = document.createElement('div');
    newCol.setAttribute("class","col mb-4");
    const newCard = document.createElement('div');
    newCard.setAttribute("class","card");
    const newCardImg = document.createElement('img');
    newCardImg.setAttribute("src",`img/${mImg}`);
    const newCardBody = document.createElement('div');
    newCardBody.setAttribute("class","card-body");
    
    // console.log (newCol)
    // console.log (newCard)
    // console.log (newCardImg)
    // console.log (newCardBody)

    const newCardName = document.createElement('h3');
    const newCardRole = document.createElement('p');
    newCardName.innerText = `${mName}`;
    newCardRole.innerText = `${mRole}`;
    newCardBody.append(newCardName);
    newCardBody.append(newCardRole);
    newCard.append(newCardImg);
    newCard.append(newCardBody);
    newCol.append(newCard);
    containerRowCard.append(newCol);

}












/*
const containerListUl = document.getElementById('info-members');

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
*/

function showPage(pageId){

const sections = document.querySelectorAll('section');

sections.forEach(section=>{
section.classList.remove('active');
});

document.getElementById(pageId).classList.add('active');

}

function openPopup(){
document.getElementById('popup').style.display='flex';
}

function closePopup(){
document.getElementById('popup').style.display='none';
}
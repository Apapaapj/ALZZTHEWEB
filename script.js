function enterSite() {
  const sound = document.getElementById("enterSound");

  sound.currentTime = 0;

  sound.play().catch((err) => {
    console.log("Audio blocked:", err);
  });

  document.getElementById("entryScreen").style.display = "none";
}

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
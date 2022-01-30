let arrow = document.querySelectorAll(".arrow");
let icon = document.querySelector(".icon");
console.log(arrow);

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    let parentdiv = e.target.parentElement;
    parentdiv.classList.toggle("active");
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let hamburgermenu = document.querySelector(".fa-bars");

hamburgermenu.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  hamburgermenu.classList.toggle("down");
});

// user profile and sigout popup section
const userlistprofile = document.querySelector(
  ".main-container-image-section img"
);
const userlistlogoutsection = document.querySelector(
  ".main-container-logout-section"
);
const userlogoutsection = document.querySelector(
  ".main-container-logout-section-close-btn"
);

window.addEventListener("click", (e) => {
  const userlistprofileimgsection = document.querySelector(
    ".main-container-user-profile-img "
  );
  const userlistprofileimg = document.querySelector(
    ".main-container-user-profile-img img"
  );
  const userlistprofilename = document.querySelector(
    ".main-container-logout-section h3"
  );
  const userlistuseremail = document.querySelector(
    ".main-container-user-email"
  );
  const userlistprofilefooter = document.querySelector(
    ".main-container-logout-footer-section"
  );
  const userlistprofilefooterh3 = document.querySelector(
    ".main-container-logout-footer-section h3"
  );
  const userlistprofilelogoutbtn = document.querySelector(
    ".main-container-logout-btn"
  );

  if (e.target == userlistprofile) {
    userlistlogoutsection.classList.toggle("show");
  } else if (e.target == userlistprofileimgsection) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofileimg) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilename) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistuseremail) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilefooter) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilefooterh3) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistlogoutsection) {
    userlistlogoutsection.classList.add("show");
  } else if (e.target == userlistprofilelogoutbtn) {
    userlistlogoutsection.classList.add("show");
  } else {
    userlistlogoutsection.classList.remove("show");
  }
});

// function for sigout
function newDoc() {
  window.location.assign("http://127.0.0.1:5500/html/login.html");
}




// createtask js


const createbtn = document.querySelector('.createbtn');
createbtn.addEventListener('click',(e)=>{
    
    e.preventDefault();
    createbtn.classList.remove('btn');
        createbtn.classList.add('onclic');
            setTimeout(function() {
        createbtn.classList.add('validate');
        createbtn.classList.remove('onclic');


        setTimeout(function() {
            createbtn.classList.remove('validate');
            createbtn.classList.add('btn');

        
                }, 2000 );
    
            }, 2000 );

})


const taskcategorycheckbox = document.querySelector('.taskcategorycheckbox');
const taskcategorydropdown = document.querySelector('.taskcategory-form-input');

console.log(taskcategorydropdown)
taskcategorycheckbox.addEventListener('change',()=>{
    taskcategorydropdown.classList.toggle("show");
    console.log("ok")

})




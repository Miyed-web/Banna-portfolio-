let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");
let fill = document.querySelector(".fill");
let sideBar = document.querySelector(".sideBar");
let inputSubject = document.querySelector(".inputSubject");
let userName = document.querySelector(".userName")

function inputChange() {
  inputSubject.value = `New eamil from ${userName.value}`
}
userName.addEventListener("change", inputChange)



function openBar() {
  sideBar.style.right = "0";
}

function closeBar() {
  sideBar.style.right = "-240px";
}


function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active")
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active")
  }
  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active")
};









function fetchProjects() {
  let projectList = document.querySelector(".work-list");
  projectList.innerHTML = workprojects.map(work => {
    return `
          <div class="work">
            <img loading="lazy" src="${work.cover}" alt="projects" fetchPriority="low" />
            <div class="layer">
              <h3>${work.title}</h3>
              <p>
                ${work.description}
              </p>
              <div class="icons">
                <a href="${work.liveurl}" target="_blank"> <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <a href="${work.giturl}" target="_blank"><i class="fa-brands fa-github"></i></a> </div>
            </div>
          </div>
        `;
  }).join("");
}

window.onload = () => { fetchProjects(); }


function initialScroll() {
  const btns = document.querySelectorAll(".btn");
  const imagelist = document.querySelector(".images");
  
  btns.forEach(btn =>{
    btn.addEventListener("click",()=>{
    const direction = btn.id === "prev-btn" ? -1:1;
    const scrollAmount = imagelist.clientWidth * direction
    imagelist.scrollBy({left:scrollAmount, behavior:"smooth"})
  })
  })
}
initialScroll()


function fillbar() {
  fill.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(fillbar)
}

fillbar()


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  const formData = new FormData(form);
  e.preventDefault();


  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  result.innerHTML = "Please wait..."

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {

        result.innerHTML = json.message;
        result.style.color = "rgb(0,227,17)"
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch(error => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
      result.style.color = "red"
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

let typed = new Typed(".auto-type", {
  strings: ["Software engineer..", "Influencer..","Programmer..", "Designer..", "Youtuber.."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});





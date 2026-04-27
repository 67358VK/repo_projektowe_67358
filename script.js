const tablinks = document.getElementsByClassName("tab_links");
const tabcontents = document.getElementsByClassName("tab_contents");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active_link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
}

const softBtn = document.getElementById("soft_skills");
const hardBtn = document.getElementById("hard_skills");
const softList = document.querySelector(".soft_skills_list");
const hardList = document.querySelector(".skills_list");
const seeHardBtn = document.getElementById("see_hard_btn");
const seeSoftBtn = document.getElementById("see_soft_btn");

softBtn.addEventListener("click", () => {
    softBtn.classList.add("active_btn");
    hardBtn.classList.remove("active_btn");
    softList.classList.add("active");
    hardList.classList.remove("active");
    seeSoftBtn.style.display = "block";
    seeHardBtn.style.display = "none";
});

hardBtn.addEventListener("click", () => {
    softBtn.classList.remove("active_btn");
    hardBtn.classList.add("active_btn");
    softList.classList.remove("active");
    hardList.classList.add("active");
    seeSoftBtn.style.display = "none";
    seeHardBtn.style.display = "block";
});

seeHardBtn.addEventListener("click", () => {
    hardList.classList.toggle("expanded");
    seeHardBtn.textContent = hardList.classList.contains("expanded") ? "See less" : "See more";
});

seeSoftBtn.addEventListener("click", () => {
    softList.classList.toggle("expanded");
    seeSoftBtn.textContent = softList.classList.contains("expanded") ? "See less" : "See more";
});

function changeTheme(themeName) {
    document.getElementById('theme-style').setAttribute('href', themeName);
}

async function loadData67358() {
        try{
            const skillsRes67358 = await fetch('skills.json');
            const skillsData67358 = await skillsRes67358.json();

            const hardContainer67358 = document.querySelector('.skills_list');
            hardContainer67358.innerHTML = skillsData67358.hardSkills.map(skill67358 => `
            <div>
                <h3>${skill67358.title}</h3>
                <p>${skill67358.desc}</p>
            </div>
            `).join('');

            const softContainer67358 = document.querySelector('.soft_skills_list');
            softContainer67358.innerHTML = skillsData67358.softSkills.map(skill67358 => `
            <div>
                <h3>${skill67358.title}</h3>
                <p>${skill67358.desc}</p>
            </div>
            `).join('');

            const workRes67358 = await fetch('work.json');
            const workData67358 = await workRes67358.json();

           const projectsContainer67358 = document.querySelector('.work_list');
            projectsContainer67358.innerHTML = workData67358.projects.map(project67358 => `
            <div class="work">
                <img src="${project67358.img}" alt="${project67358.title}">
                <div class="layer">
                    <h3>${project67358.title}</h3>
                    <p>${project67358.desc}</p>
                    <a href="${project67358.link}" target="_blank">
                        <i class="fa-solid fa-link"></i>
                    </a>
                </div>
            </div>
        `).join('');

        } catch (error) {
            console.error('Błąd podczas ładowania danych:', error);
        } 
        
}

document.addEventListener('DOMContentLoaded', loadData67358);

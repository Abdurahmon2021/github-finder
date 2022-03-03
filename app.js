import Github  from "./Github.js";
import UI from "./UI.js";

const github = new Github;
const ui = new UI;



(function () { // IIFE; EFFI
    const searchInput = document.querySelector("#search")
    const userChange = debounce(render);

    searchInput.addEventListener("input",userChange)

})()

function debounce (calback, timeout = 1000) {
    let timer;
    return arg => {
        clearTimeout(timeout)
        timer = setTimeout (() => {
            calback(arg)
        },timeout)
    }
}

async function render(e) {
    const userName = e.target.value.trim();

    console.log(userName);
    if (userName) {

    try {
        ui.showLoader()
        const [profile, repos] = await Promise.all([
            github.getUser(userName),
            github.getRepos(userName)
        ])
    
        ui.showprofile(profile);
        ui.showRepos(repos);
    } catch (error) {
        ui.clearProfile()
        ui.showAlert("User not found", "danger")
    } finally {
        ui.clearLoader();
    }
}
}
export default class Ui {
    constructor () {
        this.profile = document.createElement("div");
        this.profile.className = "card";
        this.profile.id = "profile";

        this.reposHeading =  document.createElement("h3");
        this.reposHeading.textContent = "Latest Repos";
        this.reposWrapper = document.createElement("div");

        this.loader = `
            <div class="d-flex justify-content-center" id="loader">
                <div class="spinner-border text-primary" style="width: 5rem; height: 5rem;">
                </div>
            </div>
        `;

        this.container = document.querySelector(".search-container")
    }

    showprofile (profile) {
        this.profile.innerHTML = `
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <img src="${profile.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block rounded-pill mb-3">View profile</a>
                </div>
                <div class="col-md-8">
                <h3>${profile.name}</h3>
                <div class="badge badge-primary mb-2">Public Repos: ${profile.public_repos}</div>
                <div class="badge badge-secondary mb-2">Public Gists: ${profile.public_gists}</div>
                <div class="badge badge-success mb-2">Public Followers: ${profile.followers}</div>
                <div class="badge badge-info mb-2">Public Following: ${profile.following}</div>
                <ul class="list-group">
                    <li class="list-group-item">${profile.company}</li>
                    <li class="list-group-item">
                        <a href="http://${profile.blog}">
                            ${profile.blog}
                        </a>
                    </li>
                    <li class="list-group-item">${profile.location}</li>
                    <li class="list-group-item">${profile.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
        `

        this.container.appendChild(this.profile);
    }

    showRepos (repos) {
        let reposHtml = ``

        repos.forEach(repo => {
            reposHtml += `
            <div class="card mb-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary mb-2">
                                Stars: ${repo.stargazers_count}
                            </span>
                            <span class="badge badge-secondary mb-2">
                                Watchers: ${repo.watchers}
                            </span>
                            <span class="badge badge-success mb-2">
                                Forks: ${repo.forks}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            `
        });

        this.reposWrapper.innerHTML = reposHtml;
        this.container.append(this.reposHeading, this.reposWrapper);
    }

    clearProfile () {
        this.profile.remove();
        this.reposHeading.remove();
        this.reposWrapper.remove();
    }

    showAlert (message, className) {
        this.clearAlert()
        const alertDiv = `
            <div class="alert alert-${className}>
                ${message}
            </div>
        `
        this.container.insertAdjacentHTML("afterbegin", alertDiv)

        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }
    clearAlert () {
        const alert = document.querySelector(".alert")

        if (alert) {
            alert.remove();
        }
    }
    
    showLoader () {
        this.container.insertAdjacentHTML("beforeend", this.loader)
    }

    clearLoader () {
        document.getElementById("loader").remove();
    }
}
import EasyHttp from "./EasyHttp.js";

export default class Github {
    constructor () {
        this.api = new EasyHttp("https://api.github.com/users/", {
            "Content-type": "application/json"
        });
    }

    async getUser (userName) {
       return await this.api.get(userName);
    }

    async getRepos (userName) {
       return await this.api.get(`${userName}/repos`, {
            per_page: 5,
            sort: "created_at",
            direction: "desc"
        })
    }
}
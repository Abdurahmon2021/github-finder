export default class EasyHttp {
    constructor(baseURL, headers = {}) {
        this.baseURL = baseURL;
        this.headers = headers;
    }

    async get(url, queryParams = null) {
       
        const response = await fetch(this.resultURl(url, queryParams), {
            method: "GET",
            headers: this.headers,
        });
        return await response.json();
    }
    async post (url, data = null, queryParams = null) {
        const response = await fetch(this.baseURL + url, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    async put (url, data = null, queryParams = null) {
        const response = await fetch(this.baseURL + url, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify(data),
        });
        return await response.json();
    }
    async delete (url) {
        const response = await fetch(this.baseURL + url, {
            method: "DELETE",
            headers: this.headers,
        });
        return await response.json();
    }

    resultURl (url, queryParams) {
        return this.baseURL + url + this.constructor.createQuaeryString(queryParams)
    }

    static createQuaeryString (queryObj) {
        let str = ""
        if (queryObj) {
            str += "?"
            for (const key in queryObj) {
                if (Object.hasOwnProperty.call(queryObj, key)) {
                    const value = queryObj[key];
                    str + key + "=" + value + "&"
                }
            }
            
            str = str.slice(0, str.length - 1);
        }
        
        return str;
    }
}


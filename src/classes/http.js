export class Http {
    static HEADERS = {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    };

    static async get(url) {
        try {
            return await request(url, "GET");
        } catch (error) {
            throw error;
        }
    }

    static async post(url, data = {}) {
        try {
            return await request(url, "POST", data);
        } catch (error) {
            throw error;
        }
    }

    static async delete(url) {
        try {
            return await request(url, "DELETE");
        } catch (error) {
            throw error;
        }
    }

    static async patch(url, data = {}) {
        try {
            return await request(url, "PATCH", data);
        } catch (error) {
            throw error;
        }
    }
}

async function request(url, method = "GET", data) {
    const config = {
        method,
        headers: Http.HEADERS,
        mode: "no-cors",
        cache: "no-cache",
    };

    if (method === "POST" || method === "PATCH") {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config, { "mode": "no-cors" });
    return await response;
}

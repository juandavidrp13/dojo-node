const axios = require("axios").default;
const { constants } = require("buffer");
const qs = require("querystring");


const config = {
    headers:{
        "Content-Type": "application/x-www-form-urlencoded"
    }
}


const getToken = async() => {
    let token = "";
    const promise = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify({
            grant_type: "client_credentials",
            client_id: "160b7b20b6434b6b98b970c32efc2b19",
            client_secret: "524e74501a2d4b8b9b6675dfb75e0d1e"
        }),

        config
    )
    token = promise.data;
    return token.access_token;
}
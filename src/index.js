const axios = require('axios');
const fakeData = require('./fakeData')

const sendGetRequest = async (countOfRequests) => {

    const apiGatewayURL = "____";
    for (let i = 0; i < countOfRequests; i++) {
        try {
            const response = await axios.get(apiGatewayURL);
            console.log(i, ": Response: ", response.data);
        } catch (error) {
            console.error(i, ": Error:", error.response.statusText);
        }
    }
}


// map[size]:countOfUsers
let myMap = {
    // "1kb": 4, //checked
    // "10kb": 40, //checked
    "100kb": 400,//checked
    "1mb": 4000,//checked
    "5mb": 20000 //checked
}

const sendPostRequest = async (countOfRequests, countOfUsers) => {
    const apiGatewayURL = "____";

    const hugePayload = fakeData.CreateMultipleUsers(countOfUsers);

    for (let i = 0; i < countOfRequests; i++) {

        try {
            const response = await axios.post(apiGatewayURL, { hugePayload: hugePayload });
            let data = response.data;
            console.log(i, ": Response: ", data);
        } catch (error) {
            console.log(i, ":Error:", error);
        }
    }
}
async function send() {
    for (const [size, users] of Object.entries(myMap)) {
        console.log(`${size}: ${users}`);
        console.log("\n\n\n========================= Sending payload of size:", size, "=========================\n\n\n");
        await sendPostRequest(250, users);
    }
}
send();

// sendGetRequest(1000)

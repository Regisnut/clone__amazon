import axios from "axios"

const instance = axios.create({
    baseUrl:'https://us-central1-start-next.cloudfunctions.net/api'//API URL
    // 'http://localhost:5001/start-next/us-central1/api'
})

export default instance;



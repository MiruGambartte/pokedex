import axios from "axios";
const mockApi=axios.create({
    baseURL:"https://63498b435df9528514028964.mockapi.io/api/v1"
});
export default mockApi;
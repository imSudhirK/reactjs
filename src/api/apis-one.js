import { BASE_URL } from "../helpers/utils-two";

export async function testApiCall(){
    const url = `${BASE_URL}`
    console.log("url\t", url, "\turl")
    return url;
}
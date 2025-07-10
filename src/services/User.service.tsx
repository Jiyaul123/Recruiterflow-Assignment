import makeRequest from "../api/make.request";
import url from "../api/url";
import { RequestMethods } from "../utils/enums/method.enums";

export class UserService {
    static async getAllUsers() {
        return await makeRequest(url.getAllUser, RequestMethods.GET)
    }

    static async getUsersById(id: string) {
        return await makeRequest(url.getUserById + "/" + id, RequestMethods.GET)
    }

    static async updateUserById(id: string, payload: any) {
        return await makeRequest(url.updateUserById + "/" + id, RequestMethods.PUT, payload)
    }

    static async deleteUserById(id: string) {
        return await makeRequest(url.deleteUserById + "/" + id, RequestMethods.DELETE)
    }

    static async createUser(payload: any) {
        return await makeRequest(url.createUser, RequestMethods.POST, payload)
    }


}
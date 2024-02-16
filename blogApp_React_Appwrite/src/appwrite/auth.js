import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID)
        this.account = new this.Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //if account is created successfully, directly login the user
                this.login(email, password)
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const currUser = await this.account.createEmailSession(email, password)
            return currUser
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get()
        } catch (error) {
            console.log("Appwrite service error :: getCurrentUser :: error", error);
        }

        return null
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service error :: logout :: error", error);
        }
    }
}

const authService = new AuthService()

export default authService
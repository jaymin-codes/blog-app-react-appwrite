//* this a way to store env variables in production grade apps
//* now we can just access config object to use env variables
//* String functions keeps the ids in string format no matter what

const config = {
    
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),

    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config
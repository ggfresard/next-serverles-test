import mongoose from 'mongoose'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

var db = process.env.db_name || "development"
var db_password = process.env.db_password

const MONGO_URI = `mongodb+srv://admin:${db_password}@archipielago-ljz3o.gcp.mongodb.net/${db}?retryWrites=true&w=majority`
console.log(MONGO_URI)
const dbConnect = async () => {
    try {
        console.log("Connecting to DB...")
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log(`Connected to DB ${db} !!`)
        return `Connected to DB ${db} !!`
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const dbDisconnect = async () => {
    try {
        await mongoose.disconnect()
        console.log(`Disconnected to DB ${db} !!`)
        return `Disconnected to DB ${db} !!`
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const withDB = (handler: NextApiHandler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        await dbConnect()
        return handler(req, res)
    };
}

export default dbConnect

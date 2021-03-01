import mongoose from 'mongoose'

const EntrySchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "driver" },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'client' },
    trip: {
        type: mongoose.Schema.Types.ObjectId, ref: "trip",
        default: null
    },
    plate: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
    },
    type: {
        type: String,
        enum: ["VAN", "BUS", "VAN O BUS"],
    },
})

export default mongoose.model("vehicle", EntrySchema)

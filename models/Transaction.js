import mongoose from "mongoose";

export const TransactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    transactionName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
})

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;

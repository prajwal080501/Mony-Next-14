import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
    const { transactionName, userId, amount, type, category, date} = req.body;
    try {
        const transaction = await Transaction.create({ transactionName, userId, amount, date, type, category });
        console.log(transaction, 'transaction');
        res.status(201).json({ status:'success', transaction, message: "Transaction Added Sucessfully" });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
}


export const getUserTransactions = async (req, res) => {
    const userId = req.params.id;
    try {
        const transactions = await Transaction.find({ userId });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
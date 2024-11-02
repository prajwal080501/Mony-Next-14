import express from 'express';
import { addTransaction, getUserTransactions } from '../controllers/transaction.js';

const router = express.Router();

router.get('/transactions/:id', getUserTransactions)

router.post("/transactions", addTransaction)

export default router;
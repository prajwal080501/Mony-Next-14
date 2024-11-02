import { Transaction } from "@/types/types";

export async function addTransaction(transaction: Transaction){
    console.log(transaction, 'transaction')
    const res = await fetch('http:localhost:8000/api/transactions',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    })

    const data = await res.json()
    console.log(data, 'data')
    return data
}

export async function getTransactions(userId: string){
    console.log(userId, 'userId')
    const res = await fetch(`http:localhost:8000/api/transactions/${userId}`, {
        'cache': 'force-cache',
        next: {revalidate: 60}
    })
    let transactions: Transaction[] = await res.json()
    console.log(transactions, 'transactions')
    return transactions
}
export interface User {
    firstName: string;
    email:string;
    lastName: string;
    userId: string;
    image: string;
}

interface Category {
    name: string;
    id: string;
}


export interface Transaction {
    transactionName: string;
    amount: number;
    type: string;
    category: string;
    date: Date;
    userId: string;
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { formatCurrency, formatDate } from "@/lib/utils"
import { Transaction } from "@/types/types"


export default function TransactionCard({ amount, transactionName, type, date, category, userId }: Transaction) {
    return (
        <div className=" gap-4 flex flex-col mx-auto bg-zinc-700/50 mt-1 rounded-lg h-fit p-2">
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{transactionName}</p>
                <p className="text-gray-500">{formatDate(date)}</p>
            </div>
            <div className="flex justify-between items-center h-[20%]">
                <p className={ 
                    type === 'expense' ? 'text-red-500 bg-red-300/10 p-2 rounded-lg' : 'text-green-500 bg-green-300/10 p-2 rounded-lg'
                }>{formatCurrency(amount)}</p>
                <p className="text-lg">{type.charAt(0).toUpperCase()+type.slice(1)}</p>
            </div>
        </div>
    )
}
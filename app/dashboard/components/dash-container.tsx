import { currentUser } from "@clerk/nextjs/server";
import { getTransactions } from "@/actions/transaction";
import TransactionCard from "./transaction-card";
import { Button } from "@/components/ui/button";
export default async function DashContainer() {
    const user = await currentUser();
    let transactions = await getTransactions(user?.id ?? '');
    return (
        <div className='flex w-full h-1/2 text-white justify-between'>
            <div className="w-[70%]">test 1</div>
            <div className="w-[30%] bg-zinc-500/10 p-4 rounded-lg  h-fit overflow-y-scroll flex flex-col gap-4 items-start justify-start">
                {/* <TransactionForm /> */}
                <div className="stick right-0 w-full overflow-y-scroll">
                    <div className="sticky top-0 z-10 text-2xl font-bold flex justify-between w-full items-center">
                        <p>Transactions</p>
                        <Button variant="link" className="text-blue-500">See All</Button>
                    </div>
                    {
                        transactions.map((transaction: any) => {
                            return (
                                <TransactionCard key={transaction.id} transactionName={transaction.transactionName} amount={transaction.amount} category={transaction.category} type={transaction.type} date={transaction.date} userId={transaction.userId} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
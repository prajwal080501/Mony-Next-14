import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { categories } from "@/constants/categories"
import { DatePicker } from "@/components/ui/date-picker"
import toast from "react-hot-toast"
import { currentUser } from "@clerk/nextjs/server"
import { Transaction } from "@/types/types"
import { addTransaction } from "@/actions/transaction"
import ToastComponent from "@/components/ui/toas-component"
import { useState } from "react"
export default async function TransactionForm() {
    const user = await currentUser()
    async function createTransaction(formData: FormData) {
        'use server'

        let transaction: Transaction = {
            transactionName: formData.get('transactionName') as string,
            amount: Number(formData.get('amount')) || 0,
            category: formData.get('category') as string,
            date: new Date(formData.get('date') as string),
            type: formData.get('type') as string,
            userId: user?.id ?? '',
        }

        await addTransaction(transaction).then((res) => {
            if (res.status === 'success') {
                <ToastComponent message={res.message} />
            }
            else if (res.status === 'error') {
                <ToastComponent message={res.message} />
            }
        })
    }
    return (
        <Dialog>
            <DialogTrigger className="bg-blue-500 text-white  font-bold hover:bg-blue-600 duration-150 px-3 py-2">
                Add Transaction
            </DialogTrigger>
            <DialogContent className="bg-zinc-800 drop-shadow-xl text-white w-fit h-fit border-none outline-none">
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                    <DialogDescription>
                        This action will add a transaction to your account database.
                    </DialogDescription>
                </DialogHeader>
                <form action={createTransaction} className="e-full h-full gap-6 flex flex-col">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="transactionName" className="text-lg font-bold">Transaction Title</Label>
                            <Input required name="transactionName" id="transactionName" type="text" placeholder="Transaction Title" className="bg-zinc-900" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="amount" className="text-lg font-bold">Amount</Label>
                            <Input required name="amount" id="amount" type="number" placeholder="Amount" className="bg-zinc-900" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="type" className="text-lg font-bold">Type</Label>
                            <Select name="type">
                                <SelectTrigger className="w-[180px] bg-zinc-900">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-900 text-white">
                                    <SelectItem value="expense">Expense</SelectItem>
                                    <SelectItem value="income">Income</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="category" className="text-lg font-bold">Category</Label>
                            <Select name="category">
                                <SelectTrigger className="w-[180px] bg-zinc-900">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-900 text-white">
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.name.toLowerCase()}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="date" className="text-lg font-bold">Date</Label>
                            <DatePicker />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button type="submit" variant="secondary">
                                Add Transaction
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
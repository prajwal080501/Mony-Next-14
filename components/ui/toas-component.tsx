"use client"
import toast from "react-hot-toast";

export default function ToastComponent({message}: {message: string}) {
    return (
        toast(message)
    )
}
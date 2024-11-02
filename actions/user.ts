'use server'

import { User } from "@/types/types";

export async function saveUser(user: User) {
    const res = await fetch('http://localhost:8000/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    let response = await res.json();
    return response;
}


export async function getUserById(userId: string) {
    const res = await fetch(`http://localhost:8000/api/user/${userId}`, {
        cache: 'force-cache',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let response = await res.json();
    console.log(response);
    return response;
}
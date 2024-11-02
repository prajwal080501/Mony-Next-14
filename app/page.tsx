import Image from "next/image";
import { saveUser, getUserById } from "@/actions/user";
import Hero from "@/components/hero";
import { currentUser } from "@clerk/nextjs/server"
import { User } from "@/types/types";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import { redirect } from "next/navigation";
export default async function Home() {
  const user = await currentUser();
  if (user) {
    let dbUser = await getUserById(user?.id ?? '');
    const userDetails: User = {
      userId: user.id ?? "'",
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      email: user.primaryEmailAddressId ?? '',
      image: user.imageUrl ?? '',
    }
    if (!dbUser) {
      await saveUser(userDetails);
    }
    redirect('/dashboard');
  }
  return (
    <main className="w-full flex-shrink-0 h-full">
      <Toaster />
      <Navbar brand="Mony"/>
      <Hero />
    </main>
  );
}

// cache data

import Image from "next/image";

export default function Message({name, image}:{name: string, image: string}) {
    return (
        <div className="w-fit text-white flex gap-6 items-center">
            <Image src={image ?? ''} alt="profile" width={50} height={50} className="rounded-full"/>
            <h1 className="text-3xl font-bold">Hello, {name}!</h1>
        </div>
    )
}
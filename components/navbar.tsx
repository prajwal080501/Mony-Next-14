import SignIn from "./sign-in";
interface NavbarProps {
    brand: string,
}
export default function Navbar({ brand }: NavbarProps) {
    return (
        <div className="z-10 ticky top-0 p-2 justify-between flex items-center">
            <div>
                <p className="font-extrabold text-2xl">{brand}</p>
            </div>
            <div></div>
            <div>
                <SignIn />
            </div>
        </div>
    )
}
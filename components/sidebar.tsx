interface SidebarProps {
    brand: string
}

export default function Sidebar({brand}: SidebarProps) {
    return (
        <div className="h-full sticky top-0 w-full bg-black/90 p-2 rounded-lg">
            <div className="w-fit h-fit p-2">
                <h1 className="text-2xl text-white font-bold">{brand}</h1>
            </div>
        </div>
    )
}
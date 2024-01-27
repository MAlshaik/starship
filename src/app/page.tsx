'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/build')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Build your own starship</h1>
            <div className="flex flex-row">
                <Image src="/starship.png" width="640" height="340" alt="starship" />
            </div>
                <button className="bg-white p-2 rounded-md text-black " onClick={handleClick}> Learn More </button>
        </main>
    );
}

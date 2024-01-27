'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Build() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/')
    }


    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h2>How to build your own starship</h2>
                <h3>Step 1: choose your starship style!</h3>
                <div className="flex flex-row p-4 gap-2">
                    <Image src="/starship.png" alt="yo" width="500" height="355" />
                    <Image src="/starship2.png" alt="yo" width="500" height="355" />
                    <Image src="/starship3.png" alt="yo" width="500" height="355" />
                </div>
                <h3>Step 2: Build!</h3>
                <button className="p-2 bg-white rounded-md text-black" onClick={handleClick}>back home</button>
            </main>
        </>
    );
}

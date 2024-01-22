'use client'

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useAuthContext } from "@/context/UserAuthenticate";

import styles from './page.module.css'
import Image from "next/image";

/**
 * Home page
 * @returns
 */
export default function Home() {
    const router = useRouter();

    const searchParams = useSearchParams()

    const { user, googleSignIn } : any  = useAuthContext()

    useEffect(() => {
        // Show Alert if Logout Success 
        if(searchParams.get('logout') === "success") {
            alert("Logout Success")
        }
    }, [])

    // redirect to dashboard page if Authenticated using Google 
    const handleGoogleSignIn = async (e: any)  => {
        e.preventDefault()

        try {
            await googleSignIn()
            router.push('/dashboard')
        }catch (error : any) {
            console.log(error.message)
        }
    }

    return (
        <main className={styles.main}>
            {
                user === null ? (
                    <button 
                        onClick={handleGoogleSignIn}
                    >
                        Sign In with Google
                        <Image
                            alt="Google Logo"
                            src={'/g.svg'}
                            width={20}
                            height={20}
                        />
                        </button>
                ) : ''
            }

            <Link href={'/dashboard'}>Dashboard</Link>
        </main>
    )
}
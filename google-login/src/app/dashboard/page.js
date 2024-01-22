'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'

import { useAuthContext } from '../../context/UserAuthenticate'

import styles from './page.module.css'
import Image from 'next/image'

/**
 * Dashboard page
 * can only be accessed after logged in
 * @returns
 */
export default function Dashboard() {
    const router = useRouter()

    const { logOut, user } = useAuthContext()

    //redirect to login page if not autheticated
    useEffect(() => {
        if(user === null) {
            router.push('/')
        }
    }, [])

    const logout = async () => {
        await logOut()
        router.push('/?logout=success')
    }

    return (
        <main className={styles.main}>
            {
                user ? (
                    <>
                        <Image
                            src={user.photoURL}
                            alt={user.displayName}
                            width={100}
                            height={100}
                        />
                        <p>
                            Welcome <strong>{user.displayName}</strong>
                            <br />
                            email: {user.email}
                        </p>
                    </>
                ) : ''
            }

            <button onClick={() => logout()}>Logout</button>
            <Link href={'/'}>Home</Link>
        </main>
    )
}
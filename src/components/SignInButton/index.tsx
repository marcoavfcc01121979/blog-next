import { signIn, signOut, useSession } from 'next-auth/client'
import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import Image from 'next/image'

export default function SignInButton() {
    const [session] = useSession();
    console.log(session);

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <div>
                <Image objectFit="fill" width={35} height={35} src={session.user.image} alt="foto do usuario" />
            </div>
            Olá {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#FF8800" />
            Entrar com github
        </button>
    )
}
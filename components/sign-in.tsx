import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
export default  async function SignIn() {
    return (
        <main>
                <SignedOut >
                    <SignInButton />
                </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </main>
    )
}
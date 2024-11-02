import Message from '@/components/message';
import { currentUser } from '@clerk/nextjs/server'
import DashContainer from './components/dash-container';
export default async function Dashboard() {
    const user = await currentUser();
    return (
        <div className=''>
            <div className='mt-5 bg-black rounded-lg w-full p-3'>
                <Message name={user?.fullName ?? ''} image={user?.imageUrl ?? ''} />
                <div className='mt-5 max-h-1/2 overflow-auto'>
                    <DashContainer />
                </div>
            </div>
        </div>
    )
}
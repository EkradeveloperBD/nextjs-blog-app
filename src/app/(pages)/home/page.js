import Image from 'next/image';
import Welcome from '../../components/welcome'
import NewestPosts from '@/app/components/newestPosts';


export default function Home() {


    return (
        <div >
            <div className='min-h-screen bg-gray-100'>
                <Welcome />
                <div className='flex justify-center items-center'>
                    <div className='max-w-full'>
                        <Image
                            src='/blogBanner.jpg'
                            alt='Blog Banner'
                            width={4240}
                            height={5260}
                            layout='responsive'
                            objectFit='contain'
                        />
                    </div>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <h1 className='text-3xl font-bold'>Latest Blogs</h1>
                </div>
                <div className='mt-2 border-solid border-2 border-t-red-600'></div>
                <NewestPosts />
            </div>
        </div>
    );
}

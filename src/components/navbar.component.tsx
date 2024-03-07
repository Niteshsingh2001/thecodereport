import { getDate } from '../utils/helpers.utils'
import { Logo } from './logo.componet'

export function Navbar({ children }: { children: JSX.Element }) {
    return (
        <div className='flex flex-col font-English_Town items-center gap-2 w-full'>
            <Logo />
            <div className='w-full flex flex-col items-center  font-thin gap-0.5 justify-center text-lg '>
                <hr className=' w-full bg-black h-1' />
                <hr className=' w-full bg-black h-0.5' />
                <div className='py-1 flex items-center justify-between  w-full px-5 align-middle  gap-2'>
                    <span><a href="https://github.com/Niteshsingh2001/thecodereport">Github</a></span>
                    <span>{getDate()}</span>
                    <span className='flex'>
                        {children}
                    </span>
                </div>
                <hr className=' w-full bg-black h-0.5' />
                <hr className=' w-full bg-black h-1' />
            </div>
        </div>
    )
}

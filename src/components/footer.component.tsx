export function Footer() {
    return (
        <div className='w-full flex flex-col items-center  font-thin gap-0.5 justify-center text-lg '>
            <hr className=' w-full bg-black h-1' />
            <hr className=' w-full bg-black h-0.5' />
            <div className='py-1 flex items-center justify-center w-full px-10 align-middle  gap-2'>
                <span>
                    Powered by Holy Code, Maintained by <a className="font-bold underline" href="https://www.linkedin.com/in/nitesh-singh-641769209/">Nitesh Singh</a> (and yes, it's practically divine intervention)
                    {/* Made by <a className="font-bold underline" href="https://www.linkedin.com/in/nitesh-singh-641769209/">Nitesh Singh</a> */}

                </span>
            </div>

        </div>
    )
}

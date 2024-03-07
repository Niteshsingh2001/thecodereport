import { application } from '../data/constant'

export  function Logo() {
    return (
        <div className='font-Chomsky  text-5xl md:text-6xl lg:text-7xl py-2 '>{application.name}</div>
    )
}


const UserNavbar = () => {

  return (
    <div className='flex items-center justify-between text-sm  mb-5 border-b px-14 py-4 border-b-[#ADADAD] w-full'>
      <h1 className='text-[#006400] font-bold text-2xl cursor-pointer'  onClick={()=>navigate('/')}>Medify</h1>
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <a href='/' >
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </a>
        <a href='/doctors' >
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </a>
        <a href='/hospitals' >
          <li className='py-1'>HOSPITALS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </a>
        <a href='/about' >
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </a>
        <a href='/contact' >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </a>
      </ul>
    </div>
  )
}

export default UserNavbar
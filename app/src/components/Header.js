export default function Navbar() {
  return (
    <div className='relative bg-white'>
        <div className='mx-auto'>
                <div className="flex justify-between items-center border-b-2 border-gray-100 
                                py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                        Mind2Mind
                        </a>
                        </div>
                        <a href="/maker/" className="text-base font-medium text-gray-500 hover:text-sky-600">만들기</a>
                        <a href="/example/" className="text-base font-medium text-gray-500 hover:text-sky-600">연습하기</a>
                        <a href="/" className="text-base font-medium text-gray-500 hover:text-sky-600">도움말</a>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
                </div>
        </div>
   </div>
  )
}

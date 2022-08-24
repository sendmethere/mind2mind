export default function Navbar() {
  return (
    <div className='relative bg-white'>
        <div className='mx-auto'>
                <div className="flex justify-between items-center border-b-2 border-gray-100 
                                py-6 md:justify-center md:space-x-10">
                        <a href="/maker/" className="text-base font-medium text-gray-500 hover:text-sky-600">만들기</a>
                        <a href="https://solar-bone-db8.notion.site/73d91fc4460648ad9ac97257c27c980e" className="text-base font-medium text-gray-500 hover:text-sky-600">도움말</a>
                </div>
        </div>
   </div>
  )
}


function Nav() {
  
  
  
  
  
    return (
        <>
        <nav className="bg-white border-gray-200 shadow-2xl dark:bg-gray-900 ">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto ">
            
            <div className=" flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hospital-logo-design-template-572099cf985a4fb94c4d8a9700a685a6_screen.jpg?ts=1666871753" className="h-24" alt="Flowbite Logo" />
            </div>
         
            <div className="block w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4">
                <li>
                <a href="#" className="block text-xl py-2 p-10 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 y-700 ">Login</a>
                </li>
            </ul>
            </div>

        </div>
        </nav>

        </>
  
    )

}      

export default Nav;





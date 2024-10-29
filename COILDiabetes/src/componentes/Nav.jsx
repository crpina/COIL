
function Nav() {
  
    
    return (
        <>
        <nav className="bg-white border-gray-200 shadow-xl ">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto ">
            
            <div className=" flex items-center space-x-3 rtl:space-x-reverse iphone12:size-24 pc:size-32">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hospital-logo-design-template-572099cf985a4fb94c4d8a9700a685a6_screen.jpg?ts=1666871753" className="h-auto w-auto" alt="" />
                <p className="iphone12:text-sm pc:text-2xl ">Inicio</p>
            </div>
         
            <div className="block w-auto" id="navbar-default">
            <ul className=" flex flex-col p-4">
                <li> 
                <a href="/login" className="block  py-2 p-10 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-700 y-700 iphone12:text-sm pc:text-2xl">Login</a>
                </li>
            </ul>
            </div>

        </div>
        </nav>

        </>
  
    )

}      

export default Nav;





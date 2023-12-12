import Link from 'next/link'

export default function Header() {
    return (

        <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div>
            <Link href="/">
               SIGAP
            </Link>
            </div>
            <nav>
            <ul className="flex space-x-4 text-white">
                <li>
                    <Link href="/home">
                    Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={"/student-management"}  >
                    Student Management
                    </Link>
    
                </li>
                <li>
                    <Link href={"/course-management"}>
                        Course Management
                    </Link>
                </li>
                <li>
                    <Link href={"/financial-module"} >
                    Financial Module
                </Link>
                </li>
            </ul>
            </nav>
        </div>
    </header>
    )   
}
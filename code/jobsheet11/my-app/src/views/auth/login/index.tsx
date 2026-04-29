// src/pages/auth/login.tsx
import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";

const TampilanLogin = () => {   
    const { push } = useRouter();  

    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "true");
        push("/views/produk");
    };

    return (
        <div className={`${styles.login} flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4`}> 
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Halaman Login</h1>
            <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            >
                Login
            </button><br />
            <h1 className="text-red-500 rounded px-2 py-1 mb-2">Belum Punya Akun</h1>
            <Link href="/views/auth/register" className="text-sm text-blue-500 underline">
                Ke Halaman Register
            </Link>
        </div>
    );
};

export default TampilanLogin;
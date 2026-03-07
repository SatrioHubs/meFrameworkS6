// src/pages/auth/login.tsx
import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const { push } = useRouter();  

    // ➤ imperatif menuju halaman produk
    const handleLogin = () => {
        // tandai sebagai login sehingga halaman produk tidak langsung mendorong kembali
        localStorage.setItem("isLoggedIn", "true");
        push("/produk");
    };

    return (
        <div>
            <h1>Halaman Login</h1>

            {/* tombol “Login” memanggil router.push secara imperatif */}
            <button onClick={handleLogin}>Login</button><br />

            {/* Link deklaratif menuju register */}
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
    );
};

export default halamanLogin;
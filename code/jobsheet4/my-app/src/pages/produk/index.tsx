import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    // check a flag stored by login page
    useEffect(() => {
        const stored = localStorage.getItem('isLoggedIn');
        if (stored === 'true') {
            setIsLogin(true);
        } else {
            push('/auth/login');
        }
    }, [push]);

    return (
        <div>
            <button onClick={() => {
                localStorage.removeItem("isLoggedIn");
                push('/auth/login');
            }}>
                Logout
            </button><br />
            Produk user Page
        </div>
    )
}

export default produk;
import Navbar from "../navbar";
import { useRouter } from "next/router";

const dissableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppshellProps = {
    children: React.ReactNode;
}

const Appshell = (props: AppshellProps) => {
    const {children} = props;
    const { pathname } = useRouter();
    return (
        <main>
            {!dissableNavbar.includes(pathname) && <Navbar />}
            {children}
            <div>
                footer
            </div>
        </main>
    )
}

export default Appshell;
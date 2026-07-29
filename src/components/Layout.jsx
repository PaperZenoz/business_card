import {NavLink, Outlet} from "react-router-dom";
const Layout = () => {
    return (
        <main>
            <div className="container">
                <div className="main__wrap">
                    <nav className="main__nav block">
                        <NavLink to="/" end>О себе</NavLink>
                        <NavLink to="/portfolio">Портфолио</NavLink>
                        <NavLink to="/services">Товары и услуги</NavLink>
                    </nav>
                    <div className="main__content block">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Layout;
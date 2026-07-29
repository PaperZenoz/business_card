// src/components/PageNavigation.jsx
import { NavLink } from "react-router-dom";
const PageNavigation = ({ currentPage }) => {
    const links = [
        { to: "/", text: "О себе" },
        { to: "/portfolio", text: "Портфолио" },
        { to: "/services", text: "Товары и услуги" }
    ];
    return (
        <div className="page-navigation">
            <h2>Смотрите также</h2>
            <div className="page-navigation__links">
                {links
                    .filter(link => link.to !== currentPage)
                    .map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className="page-navigation__link"
                        >
                            {link.text}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};
export default PageNavigation;
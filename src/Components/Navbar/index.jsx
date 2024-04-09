import { NavLink } from "react-router-dom"


const activeLinkStyle = ({isActive}, otherclass) => {
    return (isActive ? "underline underline-offset-4" : undefined) + ` ${otherclass}`
}

function Navbar() {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-1 px-1 top-0">
            <ul className="flex items-center gap-2">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Storely
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={({isActive})=>activeLinkStyle({isActive}, " text-blue-800")}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={activeLinkStyle}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={activeLinkStyle}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" className={activeLinkStyle}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" className={activeLinkStyle}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" className={activeLinkStyle}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-2">
                <li className="text-black/60">
                    set@storely.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={activeLinkStyle}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={activeLinkStyle}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signin" className={activeLinkStyle}>
                        Signin
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
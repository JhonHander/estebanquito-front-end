import { NavLink } from "react-router-dom";
import { AiFillBank, AiOutlineCreditCard } from "react-icons/ai";
import { MdAttachMoney, MdOutlineLocalAtm } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { BiSolidReport } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";
import { GrTransaction, GrAtm, GrMoney } from "react-icons/gr";
import { IoIosHome, IoIosSettings, IoIosPaperPlane, IoMdEye } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Menu.css";

function Menu() {
    return (
        <nav className="menu-container">
            <ul className="menu">
                <li>
                    <NavLink to="/">
                        <IoIosHome className="menu-icon" />
                        Inicio
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/gestionar/ver-saldo">
                        <IoIosSettings className="menu-icon" />
                        Gestionar
                    </NavLink>
                    <ul className="submenu">
                        <li>
                            <NavLink to="/gestionar/ver-saldo">
                                <IoMdEye className="submenu-icon" />
                                Ver saldo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gestionar/movimientos">
                                <GrTransaction className="submenu-icon" />
                                Movimientos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gestionar/detalle-perfil">
                                <CgProfile className="submenu-icon" />
                                Detalle perfil
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink to="/transacciones/transferir-dinero">
                        <IoIosPaperPlane className="menu-icon" />
                        Transacciones
                    </NavLink>
                    <ul className="submenu">
                        <li>
                            <NavLink to="/transacciones/transferir-dinero">
                                <MdAttachMoney className="submenu-icon" />
                                Transferir dinero
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/transacciones/depositar">
                                <MdOutlineLocalAtm className="submenu-icon" />
                                Depositar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/transacciones/retirar">
                                <GrAtm className="submenu-icon" />
                                Retirar
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink to="/prestamos/solicitar-prestamo">
                        <AiFillBank className="menu-icon" />
                        Préstamos
                    </NavLink>
                    <ul className="submenu">
                        <li>
                            <NavLink to="/prestamos/solicitar-prestamo">
                                <AiOutlineCreditCard className="submenu-icon" />
                                Solicitar préstamo
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink to="/reportes/total-ingresos">
                        <BiSolidReport className="menu-icon" />
                        Reportes
                    </NavLink>
                    <ul className="submenu">
                        <li>
                            <NavLink to="/reportes/total-ingresos">
                                <GrMoney className="submenu-icon" />
                                Total ingresos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reportes/total-egresos">
                                <TbMoneybag className="submenu-icon" />
                                Total egresos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reportes/deudas">
                                <GiPayMoney className="submenu-icon" />
                                Deudas
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;

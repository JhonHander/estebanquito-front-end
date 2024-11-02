import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/MainComponents/Layout';

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import MainInterface from './components/MainComponents/Carousel';

import GestionarVerSaldo from './components/manage/ManageViewBalance';
import GestionarMovimientos from './components/manage/ManageMovements';
import GestionarDetallePerfil from './components/Manage/ManageViewProfile';

import TransferirDinero from './components/Transaction/TransactionsTransferMoney';
import Depositar from './components/Transaction/TransactionsDeposit';
import Retirar from './components/Transaction/TransactionsWithdraw';

import SolicitarPrestamo from './components/Loan/LoanRequest';

import TotalIngresos from './components/Report/ReportsTotalIncome';
import TotalEgresos from './components/Report/ReportsTotalExpenses';
import Deudas from './components/Report/ReportsDebts';

// const navigate = useNavigate()

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas sin layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* Rutas con layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<MainInterface />} />

          {/* Rutas para "Gestionar" */}
          <Route path="/gestionar/ver-saldo" element={<GestionarVerSaldo />} />
          <Route path="/gestionar/movimientos" element={<GestionarMovimientos />} />
          <Route path="/gestionar/detalle-perfil" element={<GestionarDetallePerfil />} />

          {/* Rutas para "Transacciones" */}
          <Route path="/transacciones/transferir-dinero" element={<TransferirDinero />} />
          <Route path="/transacciones/depositar" element={<Depositar />} />
          <Route path="/transacciones/retirar" element={<Retirar />} />

          {/* Rutas para "Préstamos" */}
          <Route path="/prestamos/solicitar-prestamo" element={<SolicitarPrestamo />} />

          {/* Rutas para "Reportes" */}
          <Route path="/reportes/total-ingresos" element={<TotalIngresos />} />
          <Route path="/reportes/total-egresos" element={<TotalEgresos />} />
          <Route path="/reportes/deudas" element={<Deudas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


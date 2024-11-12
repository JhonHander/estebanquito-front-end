# Proyecto: Plataforma de Banca Estebanquito

## Instrucciones para configurar y correr el proyecto en local

1. Crea una carpeta en local preferiblemente llamada `estebanquito-project` o con el nombre que tu quieras
2. Clona el repositorio en el local usando `clone https` así:
   ```powershell
   git clone https://github.com/JhonHander/estebanquito-front-end.git
3. Instala todas las librerias y dependencias utilizadas haciendo:
   ```powershell
   nom install
4. Luego, inicialice el proyecto haciendo:
   ```powershell
   nom run dev

## Sobre el proyecto

Este es el primer proyecto de programación web que hago. Fue desarrollado utilizando `react.js` para el frontend y para el backend `Node.js` y `express` . Se creó como respuesta al proyecto final propuesto en el curso de Programacion Web de la universidad. El enunciado y las reglas de negocio son las siguientes:
### Enunciado:
 La Plataforma de Banca Estebanquito es una aplicación web/móvil diseñada para ofrecer servicios bancarios en línea. Los usuarios pueden gestionar sus cuentas, realizar transacciones, solicitar préstamos y ver su 
 historial financiero. La plataforma debe ser intuitiva y accesible para los usuarios.
### Funcionalidades Principales
1. Registro de Usuarios: Los usuarios deben poder registrarse e iniciar sesión de manera segura.
2. Gestión de Cuentas: Los usuarios pueden ver el saldo de sus cuentas, detalles de transacciones, detalles de su perfil de usuario.
3. Transacciones: Los usuarios pueden realizar transferencias, depósitos y retiros.
4. Solicitudes de Préstamos: Los usuarios pueden solicitar préstamos que se vean reflejados de manera inmediata en su cuenta
5. Reportes Financieros (Punto extra): La plataforma genera reportes del historial financiero del usuario. Los reportes que debe mostrar.
      * Ingresos totales que ha tenido como histórico
      * Egresos totales que ha tenido como histórico
      * Deudas que tiene pendientes

### Criterios de Aceptación
1. **Registro y Autenticación:**
      * Los usuarios pueden registrarse con un email y contraseña.
      * Losusuarios pueden iniciar sesión y cerrar sesión.
2. **Gestión de Cuentas:**
      * Losusuarios pueden ver el saldo y detalles de sus cuentas
3. **Transacciones:**
      *Los usuarios pueden realizar transferencias entre cuentas.
      *Losusuarios pueden realizar depósitos y retiros.
      *Las transacciones deben ser registradas y visibles en el historial de la cuenta.
4. **Solicitudes de Préstamos:**
      *Los usuarios pueden solicitar préstamos indicando el monto y plazodeseado.
      *Los usuarios pueden ver la deuda del préstamo.
5. **Reportes Financieros:**
      *Lo susuarios pueden ver el histórico de ingresos, egresos y deudas que tiene pendiente.

## Sobre el backend en Node.js y express
Para más detalles sobre la implementación del backend, puedes revisar el repositorio donde subí todo el código y documentación del proceso: [Repositorio del Backend](https://github.com/JhonHander/estebanquito-back-end)



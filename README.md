# Lacnet DAPP

Este proyecto es una aplicación web que interactúa con contratos inteligentes en una red Ethereum. La aplicación permite a los usuarios establecer un saludo en un contrato inteligente y mostrar el saludo almacenado en el contrato.

Por otro lado el backend firma la transaccion.

# Contrato

El contrato ya se encuentra desplegado en la red de Mumbai (Polygon Testnet)

## Requisitos previos

- Node.js y npm instalados en tu sistema.
- Una cuenta de MetaMask y MetaMask instalado en tu navegador web.
- Acceso a una red de la EVM de prueba. En mi caso utilice Mumbai con un proveedor de alchemy.
- Una clave privada Ethereum para firmar transacciones en la red.

## Estrcutura

- Frontend
  - client
- Backend
  - server
- Contrato
  - contract

## Configuración

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/Francodiner/Lacnet_Dapp
   cd Lacnet_Dapp
   ```

2. **Actualizar el ENV del backend**

   PRIVATE_KEY=TuClavePrivada
   PROVIDER_URL=URLDelProveedor
   PORT=3001

3. **Inicializar backend**

   npm run start

4. **Inicializar frontend**

   npm start

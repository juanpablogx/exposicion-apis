import asyncio
import websockets

async def chat():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        print("Conectado al servidor WebSocket. Escribe 'salir' para cerrar la conexión.\n")
        while True:
            mensaje = input("Tú: ")
            if mensaje.lower() == "salir":
                print("Desconectando...")
                break
            await websocket.send(mensaje)
            respuesta = await websocket.recv()
            print(f"Servidor: {respuesta}")

asyncio.run(chat())

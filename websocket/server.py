import asyncio
import websockets

async def echo(websocket):
    print("Cliente conectado")
    async for message in websocket:
        print(f"Mensaje recibido: {message}")
        await websocket.send(f"Eco: {message}")

async def main():
    async with websockets.serve(echo, "localhost", 8765):
        print("Servidor WebSocket corriendo en ws://localhost:8765")
        await asyncio.Future()  # Mantiene el servidor corriendo

asyncio.run(main())

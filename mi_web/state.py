import reflex as rx

class State(rx.State):
    count: int = 0
    current_route: str = "/"  # Para resaltar ruta activa en el sidebar

    def incrementar(self):
        self.count += 1

    def disminuir(self):
        self.count -= 1

    def set_route(self, route: str):
        self.current_route = route
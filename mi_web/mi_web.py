import reflex as rx

class State(rx.State):
    count: int = 0

    def incrementar(self):
        self.count += 1

    def disminuir(self):
        self.count -= 1

def navbar():
    return rx.hstack(
        rx.link("Inicio", href="/", padding="2", _hover={"text_decoration": "none"}),  # Enlace a la página principal
        rx.link("Imagen", href="/imagen", padding="2", _hover={"text_decoration": "none"}),  # Enlace a la página de la imagen
        rx.link("Docs", href="https://reflex.dev", padding="2", is_external=True, _hover={"text_decoration": "none"}),  # Enlace externo
        justify="center",  # Centra los elementos horizontalmente
        width="100%",  # Ocupa todo el ancho disponible
        bg="blue.600",  # Color de fondo (azul oscuro)
        color="white",  # Color del texto
        padding="1em",  # Espaciado interno
        position="sticky",  # Barra fija al hacer scroll
        top="0",  # Se pega en la parte superior
        z_index="999",  # Asegura que esté por encima de otros elementos
    )


def index():
    return rx.vstack(  # Contenedor vertical (navbar + contenido)
        navbar(),  # ✅ Navbar arriba
        rx.center(  # Contenido centrado debajo de la navbar
            rx.vstack(
                rx.heading("Página Principal", size="3"),
                rx.hstack(
                    rx.button("Disminuir", on_click=State.disminuir, color_scheme="red"),
                    rx.text(State.count, font_size="1em"),
                    rx.button("Incrementar", on_click=State.incrementar, color_scheme="green"),
                    spacing="2",
                ),
                rx.link("Ir a la página con imagen", href="/imagen", color="blue"),
                spacing="4",
            ),
            height="90vh",  # Altura del 90% del viewport (para no solapar con la navbar)
            width="100%",  # Ancho completo
        ),
        height="100vh",  # Altura total del viewport
    )

def imagen_page():
    return rx.vstack(
        navbar(),  # ✅ Navbar arriba
        rx.center(
            rx.vstack(
                rx.heading("Página con Imagen", size="3"),
                rx.image(
                    src="/foto.jpg",
                    width="5",
                    border_radius="2",
                ),
                rx.link("Volver al inicio", href="/", color="blue", margin_top="4"),
                spacing="4",
            ),
            height="90vh",
            width="100%",
        ),
        height="100vh",
    )

app = rx.App()
app.add_page(index, route="/")
app.add_page(imagen_page, route="/imagen")
import reflex as rx
from mi_web.componentes.sidebar import sidebar
#from mi_web.componentes.navbar import navbar
from mi_web.state import State

def index_content():
    return rx.vstack(
        rx.heading("Contador", size="4"),
        rx.hstack(
            rx.button("Disminuir", on_click=State.disminuir, color_scheme="red"),
            rx.text(State.count, font_size="2em"),
            rx.button("Incrementar", on_click=State.incrementar, color_scheme="green"),
            spacing="4",
        ),
        spacing="4",
        align_items="center",
    )

@rx.page(route="/")
def index():
    return rx.hstack(
        sidebar(),
        rx.box(
            index_content(),
            margin_left="250px",
            width="calc(100% - 250px)",
            padding="2em",
            margin_top="2em",  # Opcional: ajusta el espacio superior
        ),
    )

# Importa las páginas para registrar sus rutas
from mi_web.pages.contacto import contacto_content
from mi_web.pages.imagen import imagen_page
from mi_web.pages.acerca import acerca_page

app = rx.App()
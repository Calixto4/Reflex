import reflex as rx
from ..componentes.sidebar import sidebar
#from ..componentes.navbar import navbar

def contacto_content():
    return rx.vstack(
        rx.heading("Contacto", size="4"),
        rx.input(placeholder="Nombre", width="300px"),
        rx.input(placeholder="Email", width="300px"),
        rx.text_area(placeholder="Mensaje", width="300px"),
        rx.button("Enviar", color_scheme="blue"),
        spacing="4",
        align_items="center",
    )

@rx.page(route="/contacto")
def contacto_page():
    return rx.hstack(
        sidebar(),
        rx.box(
            
            contacto_content(),
            margin_left="250px",
            width="calc(100% - 250px)",
            padding="2em",
            margin_top="2em",  # ✅ Espacio superior uniforme
        ),
    )
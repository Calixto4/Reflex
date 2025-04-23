import reflex as rx
from ..state import State

def sidebar_item(text: str, route: str, icon: str):
    return rx.link(
        rx.hstack(
            rx.icon(icon, size=20),
            rx.text(text),
            bg=rx.cond(
                State.current_route == route, 
                "rgba(255,255,255,0.1)", 
                "transparent"
            ),
            padding="1em",
            border_radius="8px",
            width="100%",
            _hover={"bg": "rgba(255,255,255,0.05)"},
        ),
        href=route,
        on_click=lambda: State.set_route(route),
        width="100%",
        color="white",
    )

def sidebar():
    return rx.box(
        rx.vstack(
            rx.heading("Menú", size="5", padding="1em"),
            sidebar_item("Inicio", "/", "home"),
            sidebar_item("Galería", "/imagen", "image"),
            sidebar_item("Contacto", "/contacto", "mail"),
            sidebar_item("Acerca de", "/acerca", "info"),  # Nuevo ítem
            align_items="start",
            spacing="2",
        ),
        width="250px",
        height="100vh",
        bg="blue.900",
        position="fixed",
        left="0",
        top="0",
        z_index="900",
    )
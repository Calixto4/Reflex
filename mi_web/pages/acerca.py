# pages/acerca.py
import reflex as rx
from mi_web.componentes.sidebar import sidebar

def acerca_content():
    return rx.vstack(
        rx.heading("Acerca de Mi Web", size="4"),
        rx.text("¡Bienvenido a nuestra aplicación hecha con Reflex + Pyrhon!", margin_bottom="1em"),
        
        # Sección de características
        rx.vstack(
            rx.heading("Características Principales", size="5"),
            rx.list(
                rx.list_item("🚀 Navegación con menú lateral"),
                rx.list_item("🧮 Contador interactivo"),
                rx.list_item("🖼️ Galería de imágenes"),
                rx.list_item("📧 Formulario de contacto"),
                spacing="2",
                margin_bottom="2em"
            ),
            width="100%",
            align_items="start"
        ),
        
        # Sección del equipo
        rx.vstack(
            rx.heading("Nuestro Equipo", size="5"),
            rx.grid(
                # Tarjeta 1
                rx.box(
                    rx.vstack(
                        rx.avatar(name="Carlos J. Sala", size="6", margin_bottom="1em"),  # ✅ Tamaño numérico
                        rx.heading("Carlos J. Sala", size="4"),
                        rx.text("Desarrollador Frontend y Backend", color="gray.600"),
                        rx.text("Especialista en Python y Reflex", font_size="sm"),
                        rx.hstack(
                            rx.link(
                                rx.icon("github", size=20), 
                                href="https://github.com/tecnicsala",
                                is_external=True
                            ),
                            rx.link(
                                rx.icon("linkedin", size=20),
                                href="https://linkedin.com/in/juanperez",
                                is_external=True
                            ),
                            spacing="2",
                        ),
                        align_items="center",
                    ),
                    border="1px solid #eee",
                    padding="1.5em",
                    border_radius="lg",
                    _hover={
                        "transform": "translateY(-5px)",
                        "transition": "all 0.3s ease",
                        "box_shadow": "lg"
                    }
                ),
                
                # Tarjeta 2
                rx.box(
                    rx.vstack(
                        rx.avatar(name="Marta navarro", size="6", margin_bottom="1em"),  # ✅ Tamaño numérico
                        rx.heading("Marta Navarro", size="4"),
                        rx.text("Diseño de productos", color="gray.600"),
                        rx.text("Especialista en diseño y creación de accesorios de moda.", font_size="sm"),
                        rx.hstack(
                            rx.link(
                                rx.icon("github", size=20), 
                                href="https://github.com/navaria",
                                is_external=True
                            ),
                            rx.link(
                                rx.icon("linkedin", size=20),
                                href="https://linkedin.com/in/navaria",
                                is_external=True
                            ),
                            spacing="2",
                        ),
                        align_items="center",
                    ),
                    border="1px solid #eee",
                    padding="1.5em",
                    border_radius="lg",
                    _hover={
                        "transform": "translateY(-5px)",
                        "transition": "all 0.3s ease",
                        "box_shadow": "lg"
                    }
                ),
                
                columns="2",
                spacing="4",
                width="100%"
            ),
            width="100%",
            spacing="4"
        ),
        
        # Enlace externo
        rx.link(
            "Visita nuestro GitHub",
            href="https://github.com/tu-usuario/tu-repo",
            is_external=True,
            color="blue.500",
            margin_top="2em"
        ),
        spacing="4",
        align_items="start",
        padding="2em",
        width="100%"
    )

@rx.page(route="/acerca")
def acerca_page():
    return rx.hstack(
        sidebar(),
        rx.box(
            acerca_content(),
            margin_left="250px",
            width="calc(100% - 250px)",
            padding="2em"
        ),
        width="100%"
    )
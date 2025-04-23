# pages/imagen.py
import reflex as rx
from mi_web.componentes.sidebar import sidebar

class ImageState(rx.State):
    images = [f"/Pendientes_{i}.jpg" for i in range(1, 26)]
    # Lista de imágenes con nombre y URL
    #images = [{"url": f"/IMG_{i}.jpg", "name": f"IMG_{i}.jpg"} for i in range(1, 26)]
    selected_image: str = ""

    def select_image(self, image_url: str):
        self.selected_image = image_url

def image_modal(image_url: str):
    return rx.dialog.root(
        rx.dialog.trigger(
            rx.box(
                rx.image(
                    src=image_url,
                    width="100%",
                    height="200px",
                    object_fit="cover",  # ✅ Asegura que la imagen cubra el espacio
                    border_radius="8px",
                    _hover={
                        "transform": "scale(1.05)",
                        "transition": "all 0.3s ease",
                        "cursor": "pointer"
                    }
                ),
                padding="0.5em",
            )
        ),
        rx.dialog.content(
            rx.dialog.title("Ver imagen"),
            rx.image(
                src=image_url,
                width="100%",
                height="auto",
                object_fit="contain"
            ),
            rx.flex(
                rx.dialog.close(
                    rx.button("Cerrar", color_scheme="red"),
                ),
                spacing="3",
                margin_top="1em",
            ),
            style={"max_width": "90vw", "max_height": "90vh"}
        ),
        open=ImageState.selected_image == image_url,
    )

def imagen_content():
    return rx.box(
        rx.heading("Galería de Imágenes", size="4", margin_bottom="2em"),
        rx.grid(
            rx.foreach(ImageState.images, image_modal),
            columns="repeat(auto-fit, minmax(250px, 1fr))",  # ✅ Sintaxis CSS Grid
            spacing="4",
            width="100%"
        ),
        padding="2em",
    )

@rx.page(route="/imagen")
def imagen_page():
    return rx.hstack(
        sidebar(),
        rx.box(
            imagen_content(),
            margin_left="250px",
            width="calc(100% - 250px)",
        ),
    )
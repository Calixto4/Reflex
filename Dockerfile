# Usa una imagen base de Python
FROM python:3.11-slim

# Configura el entorno
ENV PYTHONUNBUFFERED=1

# Directorio de trabajo
WORKDIR /app

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Instala Node.js (requerido para Reflex)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Copia los archivos del proyecto
COPY . .

# Instala dependencias de Python
RUN pip install --no-cache-dir -r requirements.txt

# Expone los puertos necesarios
EXPOSE 3000  # Puerto del frontend
EXPOSE 8000  # Puerto del backend (WebSocket)

# Comando para ejecutar la app
CMD reflex run --host 0.0.0.0 --port 3000
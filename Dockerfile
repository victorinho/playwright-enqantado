# Usa la imagen oficial de Playwright
FROM mcr.microsoft.com/playwright:focal

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y el package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Ejecutar las pruebas
CMD ["npx", "playwright", "test"]

# Etapa 1: Construcción de Angular
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:alpine
# Limpiamos los archivos por defecto de Nginx para evitar que muestre "Welcome to nginx!"
RUN rm -rf /usr/share/nginx/html/*

# Copiamos todos los archivos compilados directamente a la raíz de HTML
COPY --from=build /app/dist/mycv/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

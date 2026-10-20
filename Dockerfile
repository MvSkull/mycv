# Etapa 1: Construcción de la aplicación Angular
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor Web Nginx
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copiamos el contenido compilado directamente a la raíz de Nginx
# (El comodín busca dentro de cualquier subcarpeta dentro de dist/)
COPY --from=build /app/dist/* /usr/share/nginx/html/
COPY --from=build /app/dist/*/browser/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

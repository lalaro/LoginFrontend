# Usa la imagen oficial de Apache
FROM httpd:2.4

# Copia el archivo de configuración personalizado de Apache
# Copia los certificados SSL (ajusta las rutas según donde los tengas)
COPY certs/server.crt /usr/local/apache2/conf/server.crt
COPY certs/server.key /usr/local/apache2/conf/server.key
COPY conf/httpd.conf /usr/local/apache2/conf/httpd.conf


# Expone el puerto HTTPS (443)
EXPOSE 443

# Comando para iniciar Apache en modo foreground
CMD ["httpd", "-D", "FOREGROUND"]

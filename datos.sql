CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nombres VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  genero VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  estado VARCHAR(255) NOT NULL
);

CREATE TABLE info_general (
  id SERIAL PRIMARY KEY,
  tipo_info VARCHAR(255) NOT NULL,
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  usuario_creador VARCHAR(255) NOT NULL,
  estado VARCHAR(255) NOT NULL,
  cliente_id INTEGER NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
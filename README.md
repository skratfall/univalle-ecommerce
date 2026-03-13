# Univalle E-commerce Monorepo

Monorepo para el sistema de e-commerce de la Universidad del Valle, construido con NestJS y TypeScript.

## Arquitectura

Este proyecto utiliza una arquitectura de microservicios organizada en un monorepo:

```
apps/
├── api-gateway/          # API Gateway principal
├── catalogo-microservice/ # Microservicio de catálogo de productos
├── pagos-microservice/    # Microservicio de pagos
└── usuarios-microservice/ # Microservicio de gestión de usuarios
```

## Servicios

### API Gateway
- Puerto: 3000
- Punto de entrada principal al sistema
- Enruta las peticiones a los microservicios apropiados

### Catálogo Microservice
- Gestión de productos y categorías
- Inventario y precios

### Pagos Microservice
- Procesamiento de pagos
- Integración con pasarelas de pago

### Usuarios Microservice
- Gestión de usuarios y autenticación
- Perfiles y permisos

## Instalación

```bash
# Instalar dependencias de todos los servicios
npm run install:all

# O instalar individualmente
cd apps/api-gateway && npm install
cd apps/catalogo-microservice && npm install
# ... y así sucesivamente
```

## Desarrollo

```bash
# Ejecutar todos los servicios en modo desarrollo
npm run start:api-gateway
npm run start:catalogo
npm run start:pagos
npm run start:usuarios

# En terminales separadas
```

## Scripts Disponibles

```bash
# Construir todos los servicios
npm run build

# Construir servicio específico
npm run build:api-gateway
npm run build:catalogo
npm run build:pagos
npm run build:usuarios

# Ejecutar tests
npm run test
npm run test:api-gateway
npm run test:catalogo
npm run test:pagos
npm run test:usuarios

# Linting
npm run lint

# Formateo de código
npm run format
```

## Tecnologías

- **NestJS**: Framework de Node.js
- **TypeScript**: Tipado estático
- **Jest**: Testing framework
- **ESLint + Prettier**: Calidad y formateo de código
- **Workspaces**: Gestión de monorepo

## Contribución

1. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
2. Realiza tus cambios
3. Ejecuta tests: `npm run test`
4. Haz commit: `git commit -m 'Agrega nueva funcionalidad'`
5. Push: `git push origin feature/nueva-funcionalidad`
6. Crea un Pull Request

## Licencia

UNLICENSED - Propiedad de Universidad del Valle

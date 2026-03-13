# Frontend - Univalle E-commerce

Frontend de React + Vite para la tienda virtual de Univalle, integrado con arquitectura de microservicios.

## 🚀 Tecnologías

- **React 19** - Framework de UI
- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **Axios** - Cliente HTTP para consumir APIs

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ProductList.tsx     # Lista productos del catálogo
│   └── ProductForm.tsx     # Formulario creación de productos
├── services/
│   └── CatalogService.ts   # Servicio HTTP para API de catálogo
├── types/
│   └── Product.ts          # Interfaces TypeScript
├── App.tsx                 # Componente principal
├── main.tsx                # Punto de entrada
└── App.css                 # Estilos globales
```

## 🔗 Integración con Backend

### API Gateway
- **URL Base**: `http://localhost:3000` (desarrollo)
- **Proxy configurado**: `/api` → `http://localhost:3000` (Vite dev server)

### Endpoints Consumidos

#### Catálogo de Productos
- `GET /catalog/products` - Listar todos los productos
- `POST /catalog/products` - Crear nuevo producto

### Estructura de Datos

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Desde la raíz del monorepo
npm install
```

### Ejecutar en desarrollo
```bash
# Desde la raíz del monorepo
npm run start:frontend

# O directamente en la carpeta del frontend
cd apps/web-frontend
npm run dev
```

El frontend estará disponible en: `http://localhost:5173/`

## 🏗️ Build para Producción

```bash
# Desde la raíz del monorepo
npm run build:frontend

# O directamente
cd apps/web-frontend
npm run build
```

Los archivos compilados se generan en `dist/`.

## 🔧 Configuración

### Proxy de Desarrollo
En `vite.config.ts` está configurado el proxy para evitar CORS:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
}
```

### Variables de Entorno
Para producción, crear `.env`:
```
VITE_API_URL=https://api.univalle-ecommerce.com
```

## 📱 Características Implementadas

### ✅ Gestión de Productos
- **Listar productos**: Grid responsive con información completa
- **Crear productos**: Formulario validado con campos requeridos
- **Estados de carga**: Loading y manejo de errores
- **Actualización automática**: Refresco de lista al crear productos

### ✅ UI/UX
- Diseño responsive
- Estados de carga y error
- Formularios con validación
- Componentes reutilizables

## 🔄 Flujo de Datos

1. **Frontend** → Solicita datos via Axios
2. **Vite Proxy** → Redirige `/api/*` → `http://localhost:3000`
3. **API Gateway** → Enruta a microservicio correspondiente
4. **Microservicio** → Procesa y responde
5. **Frontend** → Recibe y actualiza UI

## 🚀 Próximos Pasos

- [ ] Implementar microservicio de catálogo
- [ ] Agregar autenticación y gestión de usuarios
- [ ] Implementar carrito de compras
- [ ] Agregar sistema de pagos
- [ ] Dockerizar para producción
- [ ] Implementar testing (Jest + React Testing Library)

## 📋 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Vista previa del build
npm run lint         # Linting con ESLint
```

## 🤝 Contribución

1. Crear rama: `git checkout -b feature/nueva-funcionalidad`
2. Hacer cambios y commits
3. Push: `git push origin feature/nueva-funcionalidad`
4. Crear Pull Request

## 📄 Licencia

UNLICENSED - Propiedad de Universidad del Valle
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

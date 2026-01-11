# eVoice ChatKit

Chatbot de IA utilizando ChatKit de OpenAI, siguiendo la documentación oficial.

## Configuración

### Variables de Entorno

Configura las siguientes variables de entorno en Vercel:

- `OPENAI_API_KEY`: Tu API key de OpenAI
- `WORKFLOWID`: El ID del workflow creado en Agent Builder (formato: `wf_...`)

## Características

- ✅ ChatKit ocupando toda la pantalla
- ✅ Tema oscuro con diseño personalizado
- ✅ Integración con OpenAI Agent Builder
- ✅ Soporte para attachments y herramientas
- ✅ Deploy automático en Vercel

## Desarrollo Local

1. Instala las dependencias:
```bash
npm install
```

2. Instala las dependencias del backend (si pruebas localmente):
```bash
pip install -r api/requirements.txt
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Deploy en Vercel

El proyecto está configurado para deploy automático en Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. En la configuración del proyecto en Vercel, ve a "Environment Variables" y añade:
   - `OPENAI_API_KEY`: Tu API key de OpenAI
   - `WORKFLOWID`: Tu workflow ID de Agent Builder
3. Vercel detectará automáticamente la configuración y desplegará el proyecto

## Estructura del Proyecto

```
.
├── api/
│   ├── chatkit/
│   │   ├── session/
│   │   │   └── index.py      # Endpoint para crear sesiones
│   │   └── refresh/
│   │       └── index.py      # Endpoint para refrescar sesiones
│   └── requirements.txt       # Dependencias Python
├── src/
│   ├── App.tsx               # Componente principal con ChatKit
│   ├── App.css               # Estilos para pantalla completa
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── index.html                # HTML principal
├── package.json              # Dependencias Node.js
├── vercel.json               # Configuración de Vercel
└── README.md                 # Este archivo
```

## Notas

- El chatbot ocupa toda la pantalla sin elementos adicionales
- El tema oscuro está configurado por defecto
- Las funciones serverless de Python se ejecutan en Vercel
- El frontend se sirve como sitio estático desde Vercel

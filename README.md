# SmartCity Services

## Descripción del Proyecto

SmartCity Services es una aplicación basada en microservicios desarrollada bajo la filosofía DevOps, diseñada para facilitar la gestión de servicios urbanos digitales dentro de una ciudad inteligente.

La plataforma permite a los ciudadanos reportar incidencias, consultar servicios, recibir notificaciones y realizar pagos mediante una arquitectura escalable y moderna basada en contenedores Docker y automatización CI/CD.

---

# Objetivo del Proyecto

Desarrollar una aplicación basada en microservicios que implemente prácticas DevOps para automatizar procesos de desarrollo, integración y despliegue utilizando herramientas modernas como:

- GitHub
- GitHub Actions
- Docker
- Docker Compose
- AWS

---

# Tecnologías Utilizadas

| Tecnología | Descripción |
|---|---|
| Node.js | Desarrollo de microservicios |
| Docker | Contenerización |
| Docker Compose | Orquestación local |
| GitHub | Control de versiones |
| GitHub Actions | Integración continua |
| AWS | Infraestructura cloud |
| Express.js | Framework backend |

---

# Arquitectura Basada en Microservicios

La aplicación se divide en los siguientes microservicios:

| Microservicio | Función |
|---|---|
| Auth Service | Autenticación de usuarios |
| User Service | Administración de usuarios |
| Report Service | Gestión de reportes ciudadanos |
| Payment Service | Gestión de pagos |
| Notification Service | Envío de notificaciones |
| API Gateway | Punto de entrada principal |

---

# Estructura del Proyecto

```bash
smartcity-services/
│
├── auth-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── report-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── payment-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── notification-service/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── api-gateway/
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── docker-compose.yml
└── README.md
```

---

# Metodología DevOps

Este proyecto implementa el ciclo de vida DevOps mediante:

1. Planeación del desarrollo.
2. Desarrollo colaborativo.
3. Integración continua.
4. Automatización de pruebas.
5. Contenerización con Docker.
6. Despliegue automatizado.
7. Monitoreo y mantenimiento.

---

# Implementación de los 12 Factores

| Factor | Implementación |
|---|---|
| Codebase | Repositorio centralizado en GitHub |
| Dependencies | Administradas mediante package.json |
| Config | Variables de entorno |
| Backing Services | Bases de datos desacopladas |
| Build, Release, Run | Automatización CI/CD |
| Processes | Microservicios independientes |
| Port Binding | Servicios expuestos mediante puertos |
| Concurrency | Escalabilidad horizontal |
| Disposability | Reinicio rápido de contenedores |
| Dev/Prod Parity | Ambientes similares |
| Logs | Centralización de logs |
| Admin Processes | Scripts automatizados |

---

# Configuración del Proyecto

## Requisitos Previos

Antes de ejecutar el proyecto es necesario instalar:

- Docker Desktop
- Git
- Node.js
- Visual Studio Code

---

# Clonar el Repositorio

```bash
git clone https://github.com/TU-USUARIO/smartcity-services.git
```

---

# Entrar al Proyecto

```bash
cd smartcity-services
```

---

# Ejecutar Docker Compose

```bash
docker-compose up --build
```

---

# Puertos de los Servicios

| Servicio | Puerto |
|---|---|
| API Gateway | 8080 |
| Auth Service | 3001 |
| User Service | 3002 |
| Report Service | 3003 |
| Payment Service | 3004 |
| Notification Service | 3005 |

---

# Integración Continua con GitHub Actions

El proyecto utiliza GitHub Actions para automatizar:

- Instalación de dependencias
- Ejecución de pruebas
- Validación de cambios
- Construcción automática

## Workflow utilizado

Archivo:

```bash
.github/workflows/ci.yml
```

---

# Docker

Cada microservicio cuenta con su propio Dockerfile para facilitar:

- Portabilidad
- Escalabilidad
- Despliegue rápido
- Consistencia entre ambientes

---

# Servicios AWS Considerados

| Servicio AWS | Uso |
|---|---|
| EC2 | Hospedaje de contenedores |
| ECS | Orquestación de microservicios |
| S3 | Almacenamiento |
| RDS | Base de datos |
| CloudWatch | Monitoreo |
| IAM | Seguridad y accesos |

---

# Beneficios del Proyecto

- Arquitectura escalable
- Desarrollo modular
- Automatización DevOps
- Despliegues rápidos
- Mayor mantenibilidad
- Integración continua

---

# Evidencias Incluidas

- Diseño basado en microservicios
- Configuración Docker
- Docker Compose
- GitHub Actions
- Arquitectura DevOps
- Análisis de AWS

---

# Autor

Actividad Integradora DevOps  
Desarrollado por: Arlin Briones

---

# Referencias

- Docker Documentation
- GitHub Documentation
- GitHub Actions Documentation
- AWS Documentation
- The Twelve-Factor App
- DevOps Handbook

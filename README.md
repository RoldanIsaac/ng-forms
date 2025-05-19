# NgForms

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

# SHO Management System - Input States Directive (EN | ES)

## Project Description

This Angular module provides a standardized solution for managing input field visual states in the **SHO Management System**. It implements a custom directive that ensures consistent user experience across the entire application.

## Key Features

- **Supported Input States**:

  - **Placeholder**: Initial styling when the field is empty
  - **Default**: Normal input appearance
  - **Focus**: Styling applied on focus
  - **Error**: Visual feedback for validation errors
  - **Locked**: Styling for disabled/locked fields

- **Reactive Forms Integration**:

  - Mandatory binding with `FormControl` for reactive state management
  - Automatic validation and visual error feedback

- **Design System**:
  - Primary font: **Inter** (modern, highly readable typeface)
  - Normalized styling for all states
  - Self-contained directive for easy implementation

## Implementation Requirements

1. **File Structure**:

   - Copy the `leaf/input` folder into the project's `@leaf` directory
   - Import associated styles in `styles.scss`

2. **Dependencies**:

   - Angular Forms (ReactiveFormsModule)
   - Inter font installed and properly configured

3. **Basic Usage**:

```html
<input type="text" leafInput [formControl]="myFormControl" placeholder="Example" />
```

## Benefits

- **Visual Consistency**: Unified design across the application
- **Maintainability**: Centralized style updates
- **Accessibility**: Clearly distinguishable states
- **Performance**: Optimized lightweight solution

## Additional Documentation

The directive includes mandatory parameter validation and emits console warnings during development if incorrect usage is detected, facilitating debugging.

---

_This module is part of the Leaf UI design system, the reusable component ecosystem for SHO Management System._

## Descripción del Proyecto

Este módulo Angular proporciona una solución estandarizada para gestionar los estados visuales de los inputs en el **SHO Management System**, implementado mediante una directiva personalizada que garantiza consistencia en la experiencia de usuario a través de toda la aplicación.

## Características Principales

- **Estados de Input Soportados**:

  - **Placeholder**: Estilo inicial cuando el campo está vacío
  - **Default**: Apariencia normal del input
  - **Focus**: Estilo aplicado al recibir foco
  - **Error**: Visualización para estados de validación fallida
  - **Locked**: Estilo para campos deshabilitados/bloqueados

- **Integración con Formularios Reactivos**:

  - Vinculación obligatoria con `FormControl` para gestión reactiva del estado
  - Validación automática y reflejo visual de errores

- **Sistema de Diseño**:
  - Fuente principal: **Inter** (tipografía moderna y legible)
  - Estilos normalizados para todos los estados
  - Directiva autocontenida para fácil implementación

## Requisitos de Implementación

1. **Estructura de Archivos**:

   - Copiar la carpeta `leaf/input` en el directorio `@leaf` del proyecto
   - Importar los estilos asociados en `styles.scss`

2. **Dependencias**:

   - Angular Forms (ReactiveFormsModule)
   - Fuente Inter instalada y configurada

3. **Uso Básico**:

```html
<input type="text" leafInput [formControl]="miFormControl" placeholder="Ejemplo" />
```

## Beneficios

- **Consistencia Visual**: Diseño unificado en toda la aplicación
- **Mantenibilidad**: Actualización centralizada de estilos
- **Accesibilidad**: Estados claramente diferenciables
- **Rendimiento**: Solución optimizada y ligera

## Documentación Adicional

La directiva incluye validación de parámetros obligatorios y emite warnings en consola durante el desarrollo si se detecta un uso incorrecto, facilitando la depuración.

---

_Este módulo forma parte del sistema de diseño Leaf UI, el ecosistema de componentes reutilizables para SHO Management System._

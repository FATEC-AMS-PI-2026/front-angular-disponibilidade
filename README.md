# Front Angular Disponibilidade

Frontend em Angular para gerenciamento da disponibilidade de professores.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Estrutura

A aplicação é organizada por funcionalidades em `features` e por componentes reutilizáveis em `shared`.

```text
src/app/
├── features/
│   └── professor/
│       ├── data/
│       │   ├── professor-availability.data.ts
│       │   ├── professor-availability-edit.data.ts
│       │   └── professor-profile.data.ts
│       └── pages/
│           ├── availability/
│           │   ├── availability.ts
│           │   ├── availability.html
│           │   └── availability.scss
│           ├── availability-edit/
│           │   ├── availability-edit.ts
│           │   ├── availability-edit.html
│           │   └── availability-edit.scss
│           └── profile/
│               ├── profile.ts
│               ├── profile.html
│               └── profile.scss
└── shared/
    └── components/
        ├── navbar/
        │   ├── navbar.ts
        │   ├── navbar.html
        │   └── navbar.scss
        └── topbar/
            ├── topbar.ts
            ├── topbar.html
            └── topbar.scss
```

## Funcionalidades

### Professor

A funcionalidade de professor está localizada em:

```text
src/app/features/professor/
```

Ela possui:

- `availability`: visualização da disponibilidade do professor.
- `availability-edit`: edição da disponibilidade.
- `profile`: visualização das informações do perfil.
- `data`: dados utilizados pelas páginas da funcionalidade.

Novas funcionalidades, como a área do coordenador, devem ser adicionadas dentro de `features`:

```text
src/app/features/
├── professor/
└── coordinator/
```

## Componentes compartilhados

Os componentes reutilizáveis ficam em:

```text
src/app/shared/components/
```

Atualmente, estão disponíveis:

- `navbar`: barra de navegação.
- `topbar`: barra superior.

## Outros arquivos

- `src/app/app.routes.ts`: definição das rotas.
- `src/styles.scss`: estilos globais.
- `public/assets/`: imagens e arquivos estáticos.

## Projeto relacionado

Parte do projeto GINI da FATEC AMS.

- [Backend](https://github.com/FATEC-AMS-PI-2026/backend-spring-gini)
- [Documentação](https://github.com/FATEC-AMS-PI-2026/docs-gini)
- [Frontend Angular Horário](https://github.com/FATEC-AMS-PI-2026/FrontEnd-Angular-Horario)
- [Frontend Expo Horário](https://github.com/FATEC-AMS-PI-2026/FrontEnd-Expo-Horario)

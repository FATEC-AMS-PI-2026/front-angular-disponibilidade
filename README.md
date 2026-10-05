# Front Angular Disponibilidade

Frontend em Angular para gerenciamento da disponibilidade de professores.

> **Nota rápida:** Diego está explcítiamente proibido de realizar tarefas em grupo até começar a trabalhar por conta. Enquanto ele continuar se escorando nos outros, sem fazer um commit sequer, ele será descontabilizado.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## Tecnologias

- **Angular 21** com componentes standalone, signals e control flow nativo (`@if`, `@for`)
- **TypeScript** em modo strict
- **SCSS** com design tokens (variáveis CSS) e classes utilitárias globais
- **[@lucide/angular](https://lucide.dev/guide/packages/lucide-angular)** para ícones
- **RxJS**

## Estrutura

A aplicação usa separação por funcionalidade, com duas áreas — `professor` e `coordinator` — que não compartilham código entre si. Código reutilizável fica em `shared`.

```text
src/app/
├── features/
│   ├── professor/
│   │   ├── data/
│   │   │   ├── professor-availability.data.ts
│   │   │   ├── professor-availability-edit.data.ts
│   │   │   └── professor-profile.data.ts
│   │   └── pages/
│   │       ├── availability/
│   │       ├── availability-edit/
│   │       └── profile/
│   └── coordinator/
│       ├── data/
│       │   ├── coordinator-spaces.data.ts
│       │   └── coordinator-teachers.data.ts
│       └── pages/
│           ├── spaces/
│           └── teachers-availability/
└── shared/
    ├── components/
    │   ├── coordinator-navbar/
    │   ├── navbar/
    │   └── topbar/
    └── models/
```

**`features/`** — funcionalidades por papel. Cada uma tem:

- `pages/`: uma pasta por rota, em kebab-case (ex.: `availability-edit`), com o `.ts`, o `.html` e o `.scss` no mesmo diretório.
- `data/`: tipos e dados usados pelas páginas, em arquivos `*.data.ts` (ex.: `professor-availability.data.ts`).

**`shared/`** — código usado por mais de uma área:

- `components/`: `navbar`, `coordinator-navbar` e `topbar`, usados pelo shell.
- `models/`: modelos compartilhados entre features.

Todos os componentes são standalone, com selector `app-*`.

**Shell** — `src/app/app.ts` e `app.html` montam o layout: a navbar lateral troca entre professor e coordenador conforme a URL, o `topbar` fica fixo no topo e o `<router-outlet>` renderiza a página da rota.

## Rotas

As rotas são definidas em `src/app/app.routes.ts`:

| Rota                           | Página                                   | Carregamento |
| ------------------------------ | ---------------------------------------- | ------------ |
| `/`                            | redireciona para `/professor/profile`    | —            |
| `/professor/profile`           | perfil do professor                      | lazy         |
| `/professor/availability`      | disponibilidade do professor             | lazy         |
| `/professor/availability/edit` | edição da disponibilidade                | lazy         |
| `/coordinator`                 | redireciona para `/coordinator/teachers` | —            |
| `/coordinator/spaces`          | gestão de espaços                        | lazy         |
| `/coordinator/teachers`        | gestão da disponibilidade dos docentes   | lazy         |
| `**`                           | redireciona para `/professor/profile`    | —            |

**Carregamento** define como o componente da página é obtido: `lazy` significa que a página é baixada só quando a rota é acessada (`loadComponent`), reduzindo o bundle inicial. Todas as rotas de funcionalidades usam `lazy`, seguindo o padrão do projeto.

O shell da aplicação (`src/app/app.html`) exibe o `coordinator-navbar` quando a URL começa com `/coordinator` e o `navbar` de professor nos demais casos. O `topbar` é sempre exibido.

## Como executar

```bash
npm install      # instala as dependências
npm start        # servidor de desenvolvimento (ng serve)
npm run build    # build de produção
npm run watch    # build em modo desenvolvimento com watch
```

## Commits

- Padrões: [iuricode/padroes-de-commits](https://github.com/iuricode/padroes-de-commits)
- O repositório usa conventional commits com emoji: `:sparkles: feat:`, `:recycle: refactor:`, `:books: docs:`

## Funcionalidades

### Professor

Em `src/app/features/professor/`:

- `profile`: informações do perfil, disciplinas, cursos e grade de aulas da semana.
- `availability`: disponibilidade por dia e horário, com status **Disponível**, **Negociável** e **Indisponível**.
- `availability-edit`: edição da disponibilidade, com troca cíclica de status por bloco de horário.
- `data`: dados utilizados pelas páginas.

### Coordenador

Em `src/app/features/coordinator/`:

- `spaces`: gestão de espaços da Fatec (salas e laboratórios), com nome, andar, capacidade, tipo e status **Disponível**, **Indisponível** ou **Pendente**; inclui busca e filtros por tipo e andar.
- `teachers-availability`: gestão da disponibilidade dos docentes, com busca e filtros por curso, turno e status (**Validado**, **Restrita**, **Pendente**), além do indicador de carga horária (horas atribuídas vs. contratadas: vazio, abaixo, ok, acima).
- `data`: dados utilizados pelas páginas.

Novas funcionalidades devem ser adicionadas dentro de `features`:

```text
src/app/features/
├── professor/
├── coordinator/
└── ...
```

## Componentes compartilhados

Em `src/app/shared/components/`:

- `navbar`: barra lateral do professor, com links para perfil e disponibilidade.
- `coordinator-navbar`: barra lateral do coordenador, com links para início, disponibilidade dos docentes e espaços.
- `topbar`: barra superior com breadcrumb, busca e notificações.

Os modelos compartilhados ficam em `src/app/shared/models/`.

## Estilos globais

O `src/styles.scss` concentra o design system da aplicação.

**Tokens** (variáveis CSS em `:root`):

- **Cores**: marca (`--color-primary*`), superfícies, texto, bordas, feedback (`success`, `danger`, `info`, `warning`) e disponibilidade (disponível, negociável).
- **Espaçamento**: escala de `--space-1` (4px) a `--space-8` (32px).
- **Tipografia**: Roboto e escala de `--font-size-3xs` (10px) a `--font-size-2xl` (22px).
- **Forma e profundidade**: `--radius`, `--radius-small`, `--radius-pill` e `--shadow-card`.
- **Layout**: `--sidebar-width` (280px), `--topbar-height` (56px), padding e gaps de página, seção e card.
- **Controles e tabelas**: alturas de controle, pagination, pill, dot e track; dimensões de linhas e colunas.
- **Movimento**: `--transition-fast` (0,15s).

**Classes utilitárias**: `.action-button`, `.back-button`, `.status-badge`, `.availability-information`, `.search-field`, `.filter-select`, `.data-table`, `.time-grid-table`, `.data-table-footer` e `.pagination`.

As páginas importam esses estilos e aplicam seus próprios ajustes nos `.scss` locais.

## Outros arquivos

- `src/main.ts`: bootstrap da aplicação.
- `src/index.html`: página principal.
- `src/app/app.ts`, `app.html`, `app.scss`: componente raiz e shell da aplicação.
- `src/app/app.config.ts`: configuração da aplicação (`provideRouter`).
- `src/app/app.routes.ts`: definição das rotas.
- `public/assets/`: imagens e arquivos estáticos.
- `angular.json`, `tsconfig.json`, `.prettierrc`: configurações do projeto.

## Projeto relacionado

Parte do projeto GINI da FATEC AMS.

- [Backend](https://github.com/FATEC-AMS-PI-2026/backend-spring-gini)
- [Documentação](https://github.com/FATEC-AMS-PI-2026/docs-gini)
- [Frontend Angular Horário](https://github.com/FATEC-AMS-PI-2026/FrontEnd-Angular-Horario)
- [Frontend Expo Horário](https://github.com/FATEC-AMS-PI-2026/FrontEnd-Expo-Horario)

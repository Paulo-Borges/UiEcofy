🚀 EcoFy Dashboard UI (PROJETO DE ESTUDO)
Visão Geral
Este projeto de ESTUDO é uma Interface de Usuário (UI) de Dashboard moderna e responsiva, construída com React e estilizada utilizando Material UI (MUI). Ele apresenta um layout completo com uma Navbar fixa, uma Barra Lateral (MenuLateral) personalizável e uma área de conteúdo principal projetada para exibir estatísticas de negócios e categorias de produtos.

Ele oferece uma base sólida para qualquer painel administrativo ou aplicação de inteligência de negócios.

✨ Funcionalidades
Layout Responsivo: Adapta-se bem a diferentes tamanhos de tela usando os componentes Box e Stack do Material UI.

Componentes de Navegação: Inclui uma Navbar fixa com branding, pesquisa, notificações e informações de perfil de usuário.

Barra Lateral Dinâmica: Um componente MenuLateral que apresenta uma lista de navegação com ícones para Dashboard, Clientes, Produtos, Relatórios, Configurações e Central de Ajuda, além de uma seção dedicada para "Adicionar Novo Produto".

Pronto para Temas (Theming): Integrado com um AppThemeProvider global para fácil gerenciamento de temas e consistência visual.

Estrutura de Roteamento: Utiliza react-router-dom para a estrutura de roteamento da aplicação (embora as rotas específicas não estejam definidas no código fornecido, a estrutura está pronta).

Mockup de Dados: Inclui componentes como SmallStatistic e Statistic (importados, mas não mostrados) e uma lista de TopCategory para exibir dados de negócios simulados.

Estilo Profissional: Utiliza componentes e ícones do Material UI para uma estética limpa, moderna e profissional.

💻 Tecnologias Utilizadas
React (Componentes Funcionais e Hooks)

TypeScript (Utilizado no boilerplate para contexto)

Material UI (MUI) para componentes de UI e estilização.

MUI Icons para elementos visuais.

React Router DOM para a estrutura de navegação.

Google Fonts (Roboto) para consistência tipográfica.

📂 Estrutura do Projeto (Inferida)
Com base no código fornecido, a estrutura do projeto provavelmente inclui:

src/
├── shared/
│ ├── components/
│ │ ├── menu-lateral/
│ │ │ └── MenuLateral.tsx
│ │ ├── navbar/
│ │ │ └── Navbar.tsx
│ │ ├── Small_Statistic/
│ │ │ └── SmallStatistic.tsx (Importado, conteúdo não mostrado)
│ │ ├── statistic/
│ │ │ └── Statistic.tsx (Importado, conteúdo não mostrado)
│ │ └── TopCategory/
│ │ └── TopCategory.tsx
│ └── contexts/
│ └── ThemeContext.tsx (Contexto de tema)
├── Home.tsx (Componente Principal de Layout)
└── main.tsx (Ponto de Entrada da Aplicação React)
⚙️ Instalação e Configuração
Clone o repositório:

Bash

git clone [URL_DO_REPOSITORIO]
cd ecofy-dashboard-ui
Instale as dependências: Este projeto requer as dependências padrão React/MUI/TypeScript. Certifique-se de ter os seguintes pacotes instalados:

Bash

npm install react react-dom typescript @mui/material @mui/icons-material react-router-dom @fontsource/roboto

# ou

yarn add react react-dom typescript @mui/material @mui/icons-material react-router-dom @fontsource/roboto
Execute a aplicação: Use seu comando de desenvolvimento React padrão (por exemplo, se estiver usando Vite ou Create React App):

Bash

npm run dev

# ou

yarn dev
🖼️ Componentes Chave
Home.tsx
Este componente serve como o layout principal da aplicação, integrando os componentes de navegação.

TypeScript

import { Box } from "@mui/material";
import { Navbar } from "./src/shared/components/navbar/Navbar";
import { MenuLateral } from "./src/shared/components/menu-lateral/MenuLateral";

const Home = () => {
return (
<Box>
<Navbar />
<MenuLateral />
</Box>
);
};

export default Home;
MenuLateral.tsx
O componente da barra lateral principal. Exibe os links de navegação principais e inclui uma seção para Adicionar Novo Produto. A área de conteúdo principal também se inicia aqui, exibindo a mensagem de boas-vindas, data, SmallStatistic e Statistic (componentes que exibiriam dados de negócios).

Navbar.tsx
O cabeçalho fixo da aplicação. Apresenta o branding ECOFY, ícones de pesquisa, mensagens, notificações e uma seção de perfil do usuário.

TopCategory.tsx (Parte da Área de Estatísticas)
Um componente de demonstração que lista os produtos/categorias mais vendidos com suas vendas, preço (receita) e percentual de crescimento. Os dados são simulados (mocked) dentro do próprio arquivo.

🤝 Contribuições
Contribuições são o que tornam a comunidade open-source um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer serão muito apreciadas.

Faça um Fork do Projeto

Crie sua Branch de Feature (git checkout -b feature/NovaFuncionalidadeIncrivel)

Faça Commit das suas Alterações (git commit -m 'Adiciona uma NovaFuncionalidadeIncrivel')

Faça Push para a Branch (git push origin feature/NovaFuncionalidadeIncrivel)

Abra um Pull Request

Feito com ❤️ por [Borges]

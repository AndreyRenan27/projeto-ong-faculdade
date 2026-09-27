# Projeto ONG Solidária

## Sobre o projeto

Aplicação web desenvolvida para uma ONG, com o objetivo de apresentar os projetos da organização e permitir o cadastro de usuários. O projeto foi desenvolvido como parte das atividades práticas da faculdade.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- LocalStorage

## Estrutura do projeto

- `HTMLs/` — contém o arquivo principal da aplicação.
- `css/` — contém os arquivos de estilização.
- `imagens/` — armazena as imagens utilizadas no projeto.
- `js/` — contém os módulos JavaScript responsáveis pela lógica da aplicação.

## Como executar localmente

1. Clone o repositório:
   `git clone git@github.com:AndreyRenan27/projeto-ong-faculdade.git`

2. Entre na pasta do projeto:
   `cd projeto-ong-faculdade`

3. Abra o arquivo `HTMLs/index.html` no navegador ou utilize o VS Code com uma extensão de servidor local.

Não são necessárias dependências externas ou etapas de instalação de pacotes para executar a aplicação.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão, seguindo uma organização baseada no GitFlow.

As principais branches utilizadas são:

- `main` — versões de lançamento.
- `develop` — desenvolvimento contínuo.
- `feature/` — desenvolvimento de novas funcionalidades.
- `hotfix/` — correções urgentes.

As mensagens de commit seguem o padrão Conventional Commits, utilizando tipos como `feat`, `fix` e `chore`.

O projeto também utiliza versionamento semântico por meio de tags, seguindo o formato `MAJOR.MINOR.PATCH`.

## Acessibilidade

Foram realizadas melhorias de acessibilidade na estrutura da aplicação, incluindo o uso de atributos ARIA e identificação semântica do conteúdo principal.

## Pull Requests

As alterações desenvolvidas em branches de funcionalidade podem ser integradas à `develop` por meio de Pull Requests no GitHub, permitindo documentar e revisar as alterações antes do merge.
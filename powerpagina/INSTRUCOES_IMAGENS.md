# Instruções para Gerenciamento de Imagens

Você agora pode alterar o **Logo** e as **Imagens dos Produtos** diretamente pelo painel administrativo.

## Como funciona:

1.  **Pasta de Imagens**: Foi criada uma pasta chamada `imagem` na raiz do seu projeto.
2.  **Upload de Imagens**: Coloque as novas imagens (logo, fotos de produtos) dentro desta pasta `imagem`.
3.  **Painel Administrativo**:
    *   Acesse o painel administrativo (clicando no link de administração no rodapé).
    *   Na aba **Geral**, você verá o campo "Caminho do Logo". Digite o caminho relativo, por exemplo: `imagem/meu-novo-logo.png`.
    *   Na aba **Geral**, na seção "Produtos e Imagens", você pode definir o nome do produto e o caminho da imagem separados por uma barra vertical `|`.
        *   Exemplo: `Resistência de Mica | imagem/mica.jpg`
        *   Se deixar apenas o nome, o sistema continuará usando o ícone padrão.

## Configuração do Firebase (IMPORTANTE)

Para que o salvamento funcione, você precisa liberar as permissões no seu Console do Firebase:

1. Acesse o [Console do Firebase](https://console.firebase.google.com/).
2. Selecione o projeto `pagina-power-watts`.
3. No menu lateral, clique em **Firestore Database**.
4. Clique na aba **Rules** (Regras).
5. Altere as regras para permitir leitura e escrita. Para testes, você pode usar:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
6. Clique em **Publish** (Publicar).

*Nota: A regra acima libera o banco para qualquer pessoa. Em produção, o ideal é restringir o acesso.*

## Estrutura de Pastas Recomendada:
- `/assets/` (Imagens originais do sistema)
- `/imagem/` (Suas novas imagens personalizadas)
- `/js/` (Lógica do sistema)
- `/css/` (Estilos)

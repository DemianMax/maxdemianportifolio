
# Configuração do GitHub Pages

## Passos para configurar o GitHub Pages:

### 1. Configurar o repositório no GitHub
1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. Scroll down até a seção **Pages**
4. Em **Source**, selecione **GitHub Actions**

### 2. Atualizar o vite.config.ts
⚠️ **IMPORTANTE**: No arquivo `vite.config.ts`, substitua `'your-repo-name'` pelo nome real do seu repositório:

```typescript
base: mode === 'production' ? '/SEU-NOME-DO-REPOSITORIO/' : '/',
```

Por exemplo, se seu repositório se chama `meu-portfolio`:
```typescript
base: mode === 'production' ? '/meu-portfolio/' : '/',
```

### 3. Fazer commit e push
1. Faça commit de todas as alterações
2. Faça push para a branch `main`
3. O GitHub Actions será executado automaticamente
4. Aguarde alguns minutos para o deploy ser concluído

### 4. Verificar o deploy
- Vá para a aba **Actions** no seu repositório
- Verifique se o workflow "Deploy to GitHub Pages" foi executado com sucesso
- Seu site estará disponível em: `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`

## Troubleshooting

### Se o site não carregar:
1. Verifique se você substituiu `your-repo-name` pelo nome correto do repositório
2. Certifique-se de que o GitHub Pages está configurado para usar GitHub Actions
3. Verifique se o workflow foi executado sem erros na aba Actions

### Se as imagens não aparecerem:
- As imagens devem estar na pasta `public/` para serem servidas corretamente
- Use caminhos relativos para as imagens

### Forçar um novo deploy:
1. Faça uma pequena alteração em qualquer arquivo
2. Faça commit e push novamente
3. O workflow será executado automaticamente

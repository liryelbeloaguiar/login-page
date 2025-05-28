# LoginPage 🔐

Pagina de Logins usando Angular 17, para começar os estudos de Front End.

> "Aprender fazendo". 🧑‍💻

---

## 🚀 Visão Geral

* Interface limpa e minimalista inspirada no design do Figma.

---

## 🎨 Design no Figma

Todo o visual foi desenhado no Figma. Você pode conferir aqui:

[🔗 Acessar Figma](https://www.figma.com/design/7T1wkErczpMOBeqtpVjMSb/Login-Page-Design?node-id=6-920&p=f&t=fG0CvaD9M3IjNuxj-0)

---

## 🎥 Vídeo‑aula

Feito com base na video aula:

[▶️ Playlist no YouTube — Angular Login Page](https://www.youtube.com/watch?v=6qbuuPM_de4&list=PLVTj2CclmOofAVheXiFeAnHojXYd1RByl&index=19)

---

## 📦 Tecnologias & Ferramentas

| Ferramenta  | Versão  | Descrição                                    |
| ----------- | ------- | -------------------------------------------- |
| Angular CLI | 17.3.17 | Geração de projeto e comandos de build/serve |
| TypeScript  | 5.x     | Tipagem estática para JavaScript             |
| RxJS        | 7.x     | Programação reativa                          |
| Node.js     | ≥ 18    | Runtime JavaScript                           |

*(Sinta‑se livre para adicionar outras libs que você usar, como Angular Material ou TailwindCSS).* 💅

---

## ⚡ Pré‑requisitos

```bash
# Node.js (recomendado >= 18)
https://nodejs.org/

# Angular CLI
npm install -g @angular/cli@17
```

---

## 🛠️ Como Rodar Localmente

```bash
# 1. Clone o repositório
$ git clone https://github.com/<seu-user>/login-page.git
$ cd login-page

# 2. Instale as dependências
$ npm install

# 3. Execute o servidor de desenvolvimento
$ ng serve -o   # abre o navegador em http://localhost:4200/
```

Sempre que você alterar os arquivos em `src/`, a aplicação recarrega automaticamente. 🔄

---

## 🧪 Testes Unitários

```bash
ng test
```

Os testes são executados pelo **Karma** e exibem o resultado no navegador padrão.

---

## 🏗️ Build para Produção

```bash
ng build
```

Os artefatos minificados são gerados em `dist/`. Você pode servir essa pasta em qualquer serviço estático (Nginx, Netlify, Vercel, GitHub Pages, etc.).

---

## 📁 Estrutura de Pastas (resumida)
obs: Projeto ainda em andamento - essa estrutura ainda será montada
```
src/
 ├─ app/
 │   ├─ core/        # serviços singleton
 │   ├─ shared/      # componentes reutilizáveis
 │   └─ auth/        # componentes da página de login
 ├─ assets/          # imagens, ícones, fontes
 └─ environments/    # configs dev & prod
```

---

## 🤝 Contribuição

1. Faça um **fork** do projeto 🍴
2. Crie uma **branch** (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: Minha feature'`)
4. Faça **push** para a branch (`git push origin feature/minha-feature`)
5. Abra um **Pull Request** 🚀

---

> Feito com ❤ por *\Liryel — bom código e bons estudos! 📚🎉

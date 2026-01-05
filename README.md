//Exercícios de Lógica de Programação com Javascript

//GITHUB

Como subir uma pasta para meu Repositório no GitHub.

1) Criar um novo repositório no Github.
2) Agora uma pasta no computador
3) Agora dentro da pasta no VSCODE, abrir um novo terminal (Basta clicar em Terminal > New Terminal)
4) Agora é preciso dizer que o Git precisa agir nesse projeto, pra isso, vamos seguir a sequência:
   1) git init (Onde ele irá iniciar um repositório vazio dentro desta pasta)
   2) git add (nome do arquivo) ou para adicionar tudo, basta digitar 'git add .'
   3) git commit -m "Uma mensagem referente ao que é esse commit" // Aqui é feito o commit, ou seja, uma fotografia do projeto até o momento, onde '-m' significa que quero escrever uma mensagem em seguida (é preciso escrever entre aspas). Exemplo de commit: git commit -m "Meu primeiro commit"
   4) git branch -M main //serve para renomear a caixinha (branch)
   5) git remote add origin 'link do git hub sem as aspas' //Agora precisamos adicinar um remoto, que é para ele linkar com o meu link de repositório do github. Ou seja, ele vai entender que tudo que eu fizer, deve ir para este link de repositório do github.
   6) git push -u origin main //Agora toda vez que eu quiser saber o que eu fiz, eu digito o push pra ele puxar tudo. Exemplo de retorno no terminal:
        "Enumerating objects: 4, done.
        Counting objects: 100% (4/4), done.
        Delta compression using up to 20 threads
        Compressing objects: 100% (3/3), done.
        Writing objects: 100% (4/4), 359 bytes | 359.00 KiB/s, done.
        Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
        To https://github.com/fzaniniii/exercicios-logica-programacao.git
       * [new branch]      main -> main
        branch 'main' set up to track 'origin/main'."

        Obs: Se for a primeira vez que estiver fazendo isso, pode dar um erro de unable to access. Ou seja, você ainda não inseriu sua senha de login no github para autenticação ou você já tem resquício de login em outra conta no seu sistema. Se for o caso, será necessário apagar a senha antiga. Para isso, no windows, digite no menu iniciar "Gerenciador de Credenciais" > Credenciais do windows > encontra a do Github e remove.

        Agora basta enviar novamente "git push -u origin main" e ele irá pedir ou um token ou login e senha do github.
        Lembrete: É necessário autorizar o Processo.


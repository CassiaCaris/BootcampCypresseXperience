# Automação Shavers

**Bootcamp QAx - QAxperience** <br>
**Projeto de automação em Cypress do Zero ao Avançado**<br>

Nesse projeto será realziado a criação da automação em cypress.<br>
Usando aplicações locais de um site de Barbearia.


## Componentes necessários para executar o projeto
* Nodejs (Versão 18.12.1)<br>
* Cypress (verão 12.7.0)<br>
* Java (versão 9)

## Informações para execução do Projeto

Obs.: Após start o Frontend e o Backend irá carregar a página do Shave-XP (http://localhost:3000/)
![image](https://user-images.githubusercontent.com/32333336/226427992-c05f3ead-2335-4388-879f-dfcf69cfb907.png)

### Clonar o projeto
$ git clone https://github.com/CassiaCaris/shave-xp-cypress.git

### Informações baixar as dependencias do Projeto e executa-lo localmente
#### Baixar as dependencias do projeto
```
$ npm i
```
ou <br> 
```
$ npm install
```
**Obs.**: Após baixar as dependencias do projeto e se encontrar com a aplicação da Aplicação Shave-XP executando localmente <br>

#### Executando o projeto 

#### Executando o nodemon
**Obs.**: Em um terminal realziar a execução do Comando para acompanhar a execução da API Helper
```
$ npx nodemon api/app.js
```

##### Via headless
**Passo 1** - No mesmo terminal que baixou as dependencias de Test <br>
```
$ npx cypress run
```

**Passo 2** - Inicializará a execução no twrminal <br>
![image](https://user-images.githubusercontent.com/32333336/226435265-512c2d47-b0eb-4c8a-95bd-557d9d300b3d.png)

**Passo 3** - Ao finalziar a execução mostrará o resultado final <br>
![image](https://user-images.githubusercontent.com/32333336/226435414-9a156825-f718-4cb9-b256-3233646fdc32.png)

**3.1.** - Tem a opção de ver os videos da execução na pasta videos <br>
![image](https://user-images.githubusercontent.com/32333336/226435556-d65e295c-50f3-4e26-bd35-08be5e447039.png)


##### modo visual (visualizando na tela a execução)
**Passo 1** - No mesmo terminal que baixou as dependencias de Test <br>
```
$ npx cypress open
```
**Obs.**: Após start o cypress aparecerá a tela de Boas vindas do Cypress <br>

**Passo 2** - Deve escolher a opção do E2E Testing conforme imagem abaixo:<br>
![image](https://user-images.githubusercontent.com/32333336/226432284-a982fd5f-cf8a-4d9b-881b-bb1aedd73d9a.png)

**Passo 3** Escolha em qual navegador deseja executar e precione **"Start E2E testing in <navegador>"**<br>
![image](https://user-images.githubusercontent.com/32333336/226432567-7efdb0ed-e8c9-4b6e-8808-e513cf1b8117.png) 

**Passo 4** - Irá carregar a tela de inicialização da automação<br>
![image](https://user-images.githubusercontent.com/32333336/226433872-5723a6f4-9287-463a-8f7c-6847fa7112b9.png)

**Passo 5** - Escolha qual arquivo irá executar <br>
![image](https://user-images.githubusercontent.com/32333336/226434066-e96cfb9e-e936-4ab7-b268-5684791f0f57.png)
**Obs.**: Escolhi o arquivo de Login

**Passo 6** - Irá realizar a execução de todos os cenários que se encontra no arquivo escolhido <br>
![image](https://user-images.githubusercontent.com/32333336/226434398-0833e22a-418a-4310-95e0-85e3a7c5f279.png)


**Em desenvolvimento**

**Autora:** Cassia Caris<br>
**Curso:** QA eXperience Bootcamp [Cypress eXperience (Lançamento)]

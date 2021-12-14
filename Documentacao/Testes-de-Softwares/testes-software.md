# Testes de software

Requisitos para realização do teste:

- Site publicado na Internet
- Navegador da Internet - Chrome, Firefox, Edge ou Opera
- Conectividade de Internet para acesso à plataforma

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

## Página de Login/Cadastro

|CASO DE TESTE        |CT-01 - Cadastro/Login|                                                                                                                                   
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|                         
|Objetivo do Teste    |Verificar se o cadastro está sendo executado corretamente para o login posterior.|
|Passos               |1) Acessar o site  <br>2) Realizar seu cadastro preenchendo os campos. <br>3) Preencher a área de acesso com seu nome de usuário e senha cadastrados.  <br>4) Clicar no botão de "Entrar" para entrar no site. |
|Critérios de Êxito   |- O site entrará corretamente em sua página inicial com a respectiva conta que foi informada.  <br>- O nome de usuário da pessoa deve ser visto no último item do "header" da página, que indica o acesso ao perfil. |



## Página de Resumo de Tarefas

|CASO DE TESTE        |CT-02 - Cadastro de tarefas|                                                                                                                               
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|                                                                                                                         
|Objetivo do Teste    |Verificar se o cadastro das tarefas, bem como seu botão de edição e conclusão estão funcionando corretamente. |
|Passos               |1) Acessar o site  <br>2) Entrar com sua conta cadastrada  <br>3) Clicar em "Resumo de Tarefas" no header da página. <br>4) Clicar no botão "Nova Tarefa".  <br>5) Preencher a tarefa com as informações dessa e clicar no botão "Criar Tarefa".  <br>6) Clicar no botão de editar e concluir a tarefa. |
|Critérios de Êxito   |- Após a criação da tarefa, ela ficará listada nessa página até que a pessoa clique no botão de concluir. <br>- O usuário poderá editar a tarefa no botão que fica a esquerda do nome da tarefa. <br>- Ao clicar no botão de concluir à direita do nome da tarefa, essa deverá sumir dessa página. |


## Página de Calendário 

|CASO DE TESTE        |CT-03 - Visualização no Calendário|
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Objetivo do Teste    |Verificar se a página de calendário responde ao dia de hoje e a criação de tarefas.|
|Passos               |1) Acessar o site  <br>2) Entrar com sua conta cadastrada  <br>3) Clicar em "Calendário" no header da página. <br>4) Clicar no botão "today" para o calendário indicar que dia é hoje. <br>5) Clicar em qualque dia do mês para o calendário te transferir para a criação de tarefa. |
|Critérios de Êxito   |- O calendário deve mostrar que dia é hoje a partir da indicação de cor diferente nos dias do mês. <br>- Ao clicar em qualquer dia do mês, o usuário deve ser direcionado para a página de criação de tarefas.|


## Página de Configurações

|CASO DE TESTE        |CT-04 - Personalização de tela|
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Objetivo do Teste    |Verificar se página está sendo personalizada corretamente.|
|Passos               |1) Acessar o site  <br>2) Entrar com sua conta cadastrada <br>3) Clicar em "Configurações" no header da página. <br>4) Clicar para ativar notificações.  <br>5) Clicar para ativar o "dark mode". <br>6) Clicar para ativar os diferentes temas personalizados.|
|Critérios de Êxito   |- As notificações devem mostrar um alert indicando sua ativação.  <br>- Tanto o "dark mode" quanto os temas personalizados devem ser ativados quando seu botão for clicado.                                                                                                                                                  |

## Página de Estatísticas

|CASO DE TESTE        |CT-05 - Visualização de Estatísticas|
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Objetivo do Teste    |Verificar o gráfico das estatísticas está funcionando corretamente.|
|Passos               |1) Acessar o site<br> 2) Entrar com sua conta cadastrada <br>3) Clicar em "Estatísticas" no header da página. <br>4) Observar se o gráfico está correto com relação ao total de tarefas concluídas e com relação ao total de tarefas à concluir.|
|Critérios de Êxito   |- O gráfico deve responder ao total de tarefas que ainda precisam ser concluídas (cor vermelha) e ao total de tarefa já concluídas (cor verde).|


## Página de Conquistas

|CASO DE TESTE        |CT-06 - Visualização/Obtenção de conquistas |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Objetivo do Teste    |Verificar se as conquistas conseguem ser obtidas corretamente.|
|Passos               |1) Acessar o site<br> 2) Entrar com sua conta cadastrada<br> 3) Clicar em "Estatísticas" no header da página. 4) Clicar no botão "Ver Conquistas" embaixo na página. <br>5) Ver as conquistas (Vou descrever como obter a primeira conquista e as outras basta fazer o mesmo, mas com o número de vezes descrito na conquista). <br>6) Voltar na página de "Resumo de Tarefas" e criar 5 tarefas. <br>7)Voltar a página de conquistas para ver se a primeira conquista foi obtida. |
|Critérios de Êxito   |- Ao obter uma conquista, a imagem a frente dessa deve mudar de uma medalha sem cor para uma colorida, mostrando que você a conquistou. <br>- Existem conquistas para criação e conclusão de tarefas, então ambas devem funcionar (para concluir uma tarefa, basta clicar no botão verde do lado direito da tarefa no menu de "Resumo de tarefas". |


## Página de perfil/edição de perfil
|CASO DE TESTE        |CT-07 - Visualização/Edição do perfil |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Objetivo do Teste    |Verificar se o usuário consegue alterar seus dados do perfil no site ou apagar sua conta |
|Passos               |1) Acessar o site <br>2) Entrar com sua conta cadastrada <br>3) Clicar no header da página na palavra corresponde ao seu nome de usuário cadastrado (exemplo: Rubens). <br>4) Clicar no botão "Editar Perfil" <br>5) Selecionar dos arquivos do computador uma foto para seu perfil e alterar algumas informações para teste. <br>6) Clicar no botão "Salvar". <br>7)Verificar se as informações e a imagem foram salvas corretamente. <br>8) Clicar no botão "Sair". <br>9) Salvar alterações<br> 10) Verificar se você será direcionado à página de login do site.
|Critérios de Êxito   |- As informações e imagem cadastrados na edição devem permanecer ao clicar no botão para salvá-las. <br>- O "logout" deve direcionar o usuário para a página de login. <br>- Caso a mesma conta entre novamente no site, todas as suas informações, incluindo tarefas, estatísticas, conquistas e perfil devem estar salvas e associadas a sua conta. |

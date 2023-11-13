

<br>
<h3>Checklist</h3>

- [X] Design do App
- [X] Design da Web
   - [ ] Design da Web em Vite
- [ ] Database criado
   - [ ] Database conectado ao app
   - [ ] Database conectado ao web
- [ ] Consumindo API de login

<hr>
<h3 align='center'>Passo a passo para abrir Vite</h3>

- Abrir Postgres. No 'Databases', criar um banco chamado 'SpaceFinder".
- Abrir NetBeans. Baixar em formato zip o repositório do Mateus (https://github.com/MateusDalfovo/back_end_SA_Completo).
- No NetBeans, clicar em New File -> New Project. Abrir o arquivo gradle chamado 'cadastrospacefinder'. Dar play.
- No Vscode
- `npm install -g create-vite`
- `npx create-vite nomepasta`
- escolher React -> Typescript
- `cd nomepasta`
- `npm install axios`
- `npm run dev`
- jogar o local host no google.

<hr>
<h3 align="center">Design Web</h3>

- [X] Escolher se é aluno/prof/adm (Alissa)
- [X] Escolher sala - aluno (Raquel)
- [ ] Cadastro - aluno 
- [ ] Login - aluno 
- [ ] Perfil - aluno
- [ ] Recuperar senha - aluno 
- [ ] Calendário - aluno 
- [ ] Detalhes/informações da sala, modal - aluno 

<br>

- [ ] Cadastro - prof
- [ ] Login - prof 
- [ ] Perfil - prof 
- [ ] Recuperar senha - prof
- [ ] Calendário - prof
- [ ] Reservar ambientes, modal - prof
- [ ] Cancelar ambiente, modal - prof 
- [ ] escolher turnos, modal - prof 
- [ ] escolher data, modal - prof

<br>

- [ ] Cadastro - adm 
- [ ] Perfil - adm 
- [ ] Login - adm 
- [ ] Recuperar credenciais de acesso - adm 
- [ ] Calendário - adm 
- [ ] Ver cadastros dos profs - adm  
- [ ] Ver cadastro de um prof, modal - adm 
- [ ] Cadastrar ambiente, modal - adm 
- [ ] Reservar ambiente, modal - adm 
- [ ] Remover reservas de ambiente, modal - adm

<hr>

<h3 align="center">Requisitos Funcionais</h3>

- [ ] RF10: O usuário poderá decidir se é aluno/professor/coordenação  (Alissa)

<h3>Gerenciar Aluno</h3>

- [ ] RF11: O usuário poderá escolher sua sala  (Matheus)
- [ ] RF12: O aluno pode se cadastrar;  (Alissa)
- [ ] RF13: O aluno pode logar;  (Mateus)
- [ ] RF14: O aluno pode visualizar os seus dados cadastrados;  (Raquel)
- [ ] RF15: O aluno pode editar os dados cadastrados;  (Matheus)
- [ ] RF16: O aluno pode recuperar a senha;  (Mateus)
- [ ] RF17:  O aluno pode excluir o cadastro;  (Matheus)
- [ ] RF18: O aluno pode visualizar o calendário de aulas e ambientes do dia;  (Raquel)
- [ ] RF19: O aluno pode visualizar mais detalhes (prof. e matéria) em informações;  (Raquel)
 <br> <br>

<h3>Gerenciar Professor</h3>

- [ ] RF1: O professor pode se cadastrar;  (Alissa)
- [ ] RF2: O aluno pode logar;  (Mateus)
- [ ] RF3: O professor pode visualizar os seus dados cadastrados;  (Raquel)
- [ ] RF4: O professor pode editar os dados cadastrados;  (Matheus)
- [ ] RF5: O professor pode recuperar a senha;  (Mateus)
- [ ] RF6: O professor pode desabilitar o cadastro;  (Matheus)
- [ ] RF7: O professor pode visualizar todos os ambientes cadastrados; (Raquel)
- [ ] RF8: O professor pode reservar o ambientes; (Alissa)
- [ ] RF9: O professor pode cancelar a reserva de ambiente; (Mateus)
 <br> <br>

<h3>Gerenciar Coordenação</h3>

- [ ] RF20: A coordenação pode se cadastrar;  (Alissa)
- [ ] RF21: A coordenação pode visualizar os seus dados cadastrados;  (Raquel)
- [ ] RF22: A coordenação pode logar;  (Mateus)
- [ ] RF23: A coordenação pode editar os dados cadastrados;  (Matheus)
- [ ] RF24: A coordenação pode recuperar credenciais de acesso; (Mateus)
- [ ] RF25: A coordenação pode visualizar os cadastros dos professores; (Matheus)
- [ ] RF26: A coordenação pode visualizar dado de um único professor; (Alissa)
 <br> <br>
 
<h3>Gerenciar Ambiente</h3>

- [ ] RF27: A coordenação pode cadastrar o ambiente; (Alissa)
- [ ] RF28: A coordenação pode visualizar um único ambiente cadastrado; (Raquel)
- [ ] RF29: A coordenação pode visualizar todos os ambiente cadastrados; (Raquel)
- [ ] RF30: A coordenação pode editar os ambientes cadastrados; (Alissa)
- [ ] RF31: A coordenação pode remover reservas de ambiente; (Mateus)
- [ ] RF32: A coordenação alterar a reservar do ambiente; (Alissa)
- [ ] RF33: A coordenação pode reservar o ambiente; (Matheus)


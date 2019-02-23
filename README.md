# DesafioCerti

DESCRIÇÃO:


Na linguagem de sua preferência, crie um servidor HTTP que, para cada
requisição GET, retorne um JSON cuja chave extenso seja a versão por
extenso do número inteiro enviado no path. Os números podem estar no
intervalo [-99999, 99999].

**Exemplos:**
```
λ curl http://localhost:3000/1
{ "extenso": "um" }

λ curl http://localhost:3000/-1042
{ "extenso": "menos mil e quarenta e dois" }

λ curl http://localhost:3000/94587
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
```

**RUN WITHOUT DOCKER :**
```javascript
npm install     //to install the dependencies locally.*
```
```javascript
npm start    //to start the server*
```
```javascript
                    OR
```
**RUN USING DOCKER:**
```javascript
sudo docker run -p 3000:3000 -d certi     //to start the docker image.*
```
**USAGE:**
```javascript
open a browser:
localhost:3000/-1423

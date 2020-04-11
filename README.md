####Exercícios Módulo 01 - Introdução JavaScript

## [1º exercício](https://github.com/guilhermeasena32/javascript-rocketseat/blob/master/modulo%201/exercicio1.html)

Crie uma função que dado o objeto a seguir:
```javascript
var endereco = {
	 rua: "Rua dos pinheiros",
	 numero: 1293,
	 bairro: "Centro",
	 cidade: "São Paulo",
	 uf: "SP"
};
```
Retorne o seguinte conteúdo:
```javascript
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
```

## [2º exercício](https://github.com/guilhermeasena32/javascript-rocketseat/blob/master/modulo%201/exercicio2.html)
Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
```javascript
function pares(x, y) {
	 // código aqui
	}
pares(32, 321);
```

## [3º exercício](https://github.com/guilhermeasena32/javascript-rocketseat/blob/master/modulo%201/exercicio3.html)
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
```javascript
function temHabilidade(skills) {
	 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
};
```

## [4º exercício](https://github.com/guilhermeasena32/javascript-rocketseat/blob/master/modulo%201/exercicio4.html)
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
```javascript
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

## [5º exercício](https://github.com/guilhermeasena32/javascript-rocketseat/blob/master/modulo%201/exercicio5.html)
Dado o seguinte vetor de objetos:
```javascript
var usuarios = [
	 {
	 nome: "Diego",
	 habilidades: ["Javascript", "ReactJS", "Redux"]
	 },
	 {
	 nome: "Gabriel",
	 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
	 }
];
```
Escreva uma função que produza o seguinte resultado:
```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

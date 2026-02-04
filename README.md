# 📚 Exercício: Comparador de Combustíveis (JS + DOM)

Este repositório contém a resolução de um exercício prático de lógica de programação e manipulação do DOM. O objetivo foi criar uma calculadora simples para comparar a eficiência entre Álcool e Gasolina.

## 🎯 Proposta do Exercício

Desenvolver uma página web onde o usuário possa:
1. Inserir o preço do Álcool.
2. Inserir o preço da Gasolina.
3. Receber uma recomendação automática sobre qual combustível é mais vantajoso.

## 🧠 Conceitos Praticados

Durante o desenvolvimento deste exercício, foram aplicados os seguintes conceitos:

* **Lógica Condicional (`if/else`):** Para determinar o melhor preço baseada na regra de eficiência (70%).
* **Manipulação do DOM:** Captura de valores dos `inputs` e inserção do resultado no HTML (`innerHTML`).
* **Funções:** Organização do código em blocos reutilizáveis (`calcularMelhorPreco`).
* **Validação de Dados:** Verificação de campos vazios antes do cálculo.
* **Conversão de Tipos:** Uso de `parseFloat` para garantir cálculos matemáticos corretos.

## 🧮 A Lógica Utilizada

A regra de negócio aplicada no exercício foi:
$$\text{Resultado} = \frac{\text{Preço do Álcool}}{\text{Preço da Gasolina}}$$

* Se o resultado for **< 0.7**: O código recomenda **Álcool**.
* Se o resultado for **>= 0.7**: O código recomenda **Gasolina**.

## 🛠 Tecnologias

* **HTML5**
* **Bootstrap 4** (Para estilização rápida dos Cards e Inputs)
* **JavaScript**

## 🚀 Como testar

1.  Baixe os arquivos.
2.  Abra o `index.html` no navegador.
3.  Insira os valores e clique em "Calcular".

---
Exercício realizado para fins de estudo em Desenvolvimento Web.
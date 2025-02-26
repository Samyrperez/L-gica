<?php
// 1. Función sin parámetros ni retorno
function saludar() {
    echo "Hola, mundo";
}
saludar();

// 2. Función con un parámetro
function saludarUsuario($nombre) {
    echo "<h1>¡Hola, $nombre!</h1>";
}
saludarUsuario("Sam");

// 3. Función con varios parámetros
function sumar($a, $b) {
    echo  " <h2>La suma es:  ($a + $b)</h2> ";
}
sumar(5, 3);

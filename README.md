# ciberpoeta
https://rovilram.github.io/ciberpoeta/
-- Mínimo (versión 1.0) -- https://rovilram.github.io/ciberpoeta/indexV1.html

Se pide implementar una aplicación web frontend que pida al usuario dos datos:

- "Número" de estrofas (a elegir entre 1, 2 o 3)
- "Obra" del Maestro (a elegir entre "Romancero gitano" y "Poeta en Nueva York")
- Un botón de "Generar poema"

A partir de los datos de entrada, se generará y mostrará en pantalla un poema de tantas estrofas del poeta Federico García Lorca como el "Número" introducido por el usuario, escogidas y colocadas aleatoriamente de la "Obra" seleccionada.

Referencias:
http://www.chiquitoipsum.com/
https://www.minionsipsum.com/
https://www.rimador.net/index-poesia-automatica.php

-- Deseable (versión 2.0) --

Añadir un campo más que pida al usuario número de "Versos" por cada estrofa, pudiendo elegir entre 2, 3, 4 o aleatorio (siendo este último un número de 2 a 4, determinado para cada estrofa).

Por otro lado, cada estrofa generada será una combinación aleatoria de versos escogidos de ambas obras (tantos como se indiquen en el campo anterior), así que el campo "Obra" no aparece en esta versión, ya que no tiene sentido.

-- Máximo (versión 3.0) --

Añadir un campo más que pida al usuario el/la "Autor/a", pudiendo elegir entre: "Federico García Lorca", "Rosalía de Castro" o "Ambos".

En esta versión, el campo de "Obra" no aparecerá al cargar la aplicación, pero podrá hacerlo después de haber hecho una selección concreta en el campo anterior ("Autor/a"), de manera que si se seleccionó a Lorca, aparecerá mostrando las mismas opciones de la version 1.0; si se seleccionó a Rosalía, mostrará las opciones "Cantares gallegos" y "Follas novas"; si se seleccionó la opción de ambos autores, este campo "Obra" no aparecerá.

El poema resultante final será del número de estrofas indicado, donde cada una tendrá a su vez el número de versos indicado, generadas aleatoriamente con versos de todas las obras del/de la autor/a indicado/a (o de ambos con todas sus obras, si esa fue la selección).

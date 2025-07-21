#!/bin/bash

# Script semanal para confirmar y subir cambios al repositorio
# Guarda un resumen en README.md con la cantidad de líneas modificadas

# Obtener la fecha actual
FECHA=$(date '+%Y-%m-%d')

# Verificar si hay cambios (no confirmados y no en staging)
if git diff --quiet && git diff --cached --quiet; then
    # No hay cambios para subir
    echo "[$FECHA] No hay cambios para subir." | tee -a README.md

    # Agregar y subir README.md con la línea de no cambios
    git add README.md
    git commit -m "Actualización automática: sin cambios - $FECHA"
    git push origin $(git rev-parse --abbrev-ref HEAD)
else
    # Agregar todos los cambios
    git add .

    # Crear commit
    git commit -m "Cambios semanales - $FECHA"

    # Subir a la rama actual
    git push origin $(git rev-parse --abbrev-ref HEAD)

   
    LINEAS=$(git diff --shortstat HEAD~1 HEAD | awk '{for(i=1;i<=NF;i++) if ($i ~ /^[0-9]+$/) total += $i} END {print total}')
    echo "[$FECHA] Se modificaron $LINEAS líneas." | tee -a README.md

    git add README.md
    git commit -m "Actualización automática: resumen de líneas modificadas - $FECHA"
    git push origin $(git rev-parse --abbrev-ref HEAD)
fi

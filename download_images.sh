#!/bin/bash

# URL эталонного сайта
BASE_URL="https://potapovayulia.github.io/Potapova-Yulia-2260967-cat-energy-2"

# Создаём временную папку
mkdir -p /tmp/reference_images
cd /tmp/reference_images

# Скачиваем главную страницу
wget -q "$BASE_URL/index.html" -O index.html

# Извлекаем все пути к изображениям
grep -oP '(src|srcset )="[^"]*\.(png|jpg|svg|webp)' index.html | \
  sed 's/.*="//' | \
  sort -u > image_list.txt

# Скачиваем каждое изображение
while read img; do
  echo "Downloading: $img"
  wget -q "$BASE_URL/$img" -P downloaded/ --no-check-certificate 2>/dev/null
done < image_list.txt

echo "Downloaded images:"
find downloaded/ -type f | wc -l


#!/bin/bash

cd /home/nginx/container/

# shellcheck disable=SC2046
IFS=$'\n'; for i in $(ls -1 /home/nginx/container/assets/media/gif); do
  sed "s/const gifs = {.*};/const gifs = {$i};/" /home/nginx/container/sites-available/farax3.xyz/gif/index.html
done
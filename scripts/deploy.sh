#!/bin/bash
# Оновлює версію CSS/JS (щоб браузери не брали старий кеш) і публікує папку docs/ у гілку gh-pages.
set -e
cd "$(dirname "$0")/.."

v=$(cat docs/style.css docs/script.js | sha1sum | cut -c1-8)
find docs -name index.html -exec sed -i -E "s#(style\.css|script\.js)(\?v=[0-9a-f]+)?\"#\1?v=$v\"#g" {} +

if ! git diff --quiet docs; then
  git add docs
  git commit -m "Bump asset version to $v"
fi

git subtree split --prefix docs -b gh-pages
git push origin gh-pages

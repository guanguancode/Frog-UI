rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:guanguancode/gulu-UI-1.git &&
git push -f -u origin master &&
cd -
echo https://guanguancode.github.io/gulu-UI-1/index.html
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origingit@github.com:guanguancode/Frog-UI.git &&
git push -f -u origin master &&
cd -
echo  https://guanguancode.github.io/Frog-UI/index.html
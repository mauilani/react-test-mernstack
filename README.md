# react-test-mernstck

# 最初の設定
# github リモートリポジトリ作成
# branchはmainのまま　あとでローカル側で変更する
# local ローカルリポジトリを作成
# 以下ローカル側での手順
echo "# react-test-mernstck" >> README.md
git add README.md
git commit -m "second commit"
git branch -M main
git remote add origin https://github.com/mauilani/react-test-mernstck.git
git push -u origin main
git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a

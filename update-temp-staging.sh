
chmod 400 ./staging.pem

ssh -tt -o StrictHostKeyChecking=no root@142.93.63.243 -i ./staging.pem <<'ENDSSH'
cd /home/staging/personalized-nutrition-concepts

eval `ssh-agent`
chmod 600 staging.pem
ssh-add staging.pem

git status

git add . 
git stash

git checkout development

git fetch
git pull

cd src/backoffice
npm i

cd ../backend
npm i
cd ../..

sh run.temp-staging.sh
exit

ENDSSH

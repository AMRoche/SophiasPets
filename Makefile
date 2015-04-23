renew-keystone:
	@compass compile
	@pm2 restart keystone

deploy-keystone:
	@compass compile
	@pm2 start keystone.js

kill-keystone:
	@pm2 stop keystone

folders:
	@mkdir -p public/uploads/files/images

permissions:
	@chmod -R 777 public/uploads

install-mongo-brew:
	@brew update
	@brew install mongodb

install-keystone-generator:
	@npm install -g generator-keystone

install-keystone:
	@yo keystone

keystone:
	@node keystone

start-mongo:
	@brew services start mongodb

stop-mongo:
	@brew services stop mongodb

update:
	@git pull
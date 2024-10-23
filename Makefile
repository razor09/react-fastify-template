start = npm start
build = npm run build
lint = npm run lint
fetch = npm run fetch
update-soft = npm run update:soft
update-hard = npm run update:hard
clear = rm -rf client/dist client/node_modules server/dist server/node_modules shared/dist shared/node_modules manager/node_modules
commit = git add --all && git commit -m 'update'
push = git push origin master


# Start client / server in development mode
play-client:
	cd client && ${start}
play-server:
	cd server && ${start}


# Fetch, update client / server libraries, build client / server for production
fetch:
	cd shared && ${fetch} && cd ../client && ${fetch} && cd ../server && ${fetch} && cd ../manager && ${fetch}
build:
	cd shared && ${build} && cd ../client && ${build} && cd ../server && ${build}
update-soft:
	cd shared && ${update-soft} && cd ../client && ${update-soft} && cd ../server && ${update-soft} && cd ../manager && ${update-soft}
update-hard:
	cd shared && ${update-hard} && cd ../client && ${update-hard} && cd ../server && ${update-hard} && cd ../manager && ${update-hard}


# Scripts for pm2 client / server applications
start:
	cd manager && npm start
stop:
	cd manager && npm stop
restart:
	cd manager && npm restart
reload:
	cd manager && npm run reload
delete:
	cd manager && npm run delete
kill:
	cd manager && npm run kill


# Lint code, commit changes, clear dist and node modules everywhere
lint:
	cd shared && ${lint}
save:
	cd shared && ${lint} && ${commit} && ${push}
clear:
	${clear}

build:
	docker build -t front-app .
start:
	docker run -p 3000:3000 front-app
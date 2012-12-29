
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

node_modules:
	@npm install

clean:
	rm -fr build components node_modules

test: node_modules
	@./node_modules/.bin/mocha --require should --reporter spec

.PHONY: clean test


build: components index.js
	@component build --dev

components: component.json
	@component install --dev

node_modules:
	@npm install

clean:
	rm -fr build components node_modules

test: node_modules build
	@./node_modules/.bin/mocha --reporter spec

.PHONY: clean test


build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components

test: build
	@mocha-phantomjs test/test.html

.PHONY: clean test

gendiff: 
	node bin/gendiff.js
install: 
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
test_install:
	npm i jest
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	npm test -- --coverage --coverageProvider=v8
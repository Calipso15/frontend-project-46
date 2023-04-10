gendiff: 
	node.gendiff.js
install: 
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
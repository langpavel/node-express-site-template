PYTHON ?= python

test: jslint

jslintfix:
	@echo "Fixing JS style:"
	@./fixjsstyle

jslint:
	@echo "JSLint:"
	@./jslint

.PHONY: jslint jslintfix

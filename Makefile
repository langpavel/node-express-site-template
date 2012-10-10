PYTHON ?= python

test: jslint

jslintfix:
	@echo -n "Fixing JS style: "
	@PYTHONPATH=tools/closure_linter/ $(PYTHON) tools/closure_linter/closure_linter/fixjsstyle.py --strict --nojsdoc -r . -e tools,node_modules

jslint:
	@echo -n "JSLint: "
	@PYTHONPATH=tools/closure_linter/ $(PYTHON) tools/closure_linter/closure_linter/gjslint.py --unix_mode --strict --nojsdoc -r . -e tools,node_modules

.PHONY: jslint jslintfix

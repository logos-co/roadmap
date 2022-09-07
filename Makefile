.DEFAULT_GOAL := serve

help: ## Show all Makefile targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: install-hugo-obsidian

install-hugo-obsidian:
	go install github.com/jackyzha0/hugo-obsidian@latest

update: install-hugo-obsidian ## Update Quartz to the latest version on Github
	@git remote show upstream || (echo "remote 'upstream' not present, setting 'upstream'" && git remote add upstream https://github.com/jackyzha0/quartz.git)
	git fetch upstream
	git log --oneline --decorate --graph ..upstream/hugo
	git checkout -p upstream/hugo -- layouts .github assets/js assets/styles/base.scss assets/styles/darkmode.scss config.toml data

update-force: install-hugo-obsidian ## Forcefully pull all changes and don't ask to patch
	@git remote show upstream || (echo "remote 'upstream' not present, setting 'upstream'" && git remote add upstream https://github.com/jackyzha0/quartz.git)
	git fetch upstream
	git checkout upstream/hugo -- layouts .github assets/js assets/styles/base.scss assets/styles/darkmode.scss config.toml data

obsidian:
	hugo-obsidian -input=content -output=assets/indices -index -root=.

build: obsidian
	hugo --enableGitInfo

serve: obsidian ## Serve Quartz locally
	hugo server --enableGitInfo

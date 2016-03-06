# git-helpers

This project contains some functions that shall help me for with my daily
git-workflow.

Install the project as global npm module and you can call the following global
commands

- git-local-features - returns all features branches who are only locally
- git-remote-features - returns all feature branches who are only remote
- git-local-releases
- git-remote-releases

I use the function **git-local-feature** for example together with **fzf** when
I want to public a feature. In my dotfiles I have a function **gffp** (git flow
feature publish). When I execute this function I see in **fzf** only the
feature branches that are locally but not remote.

```
function gffp() {
    branch=$(git-local-features | fzf ) || return
        git ffp $branch
}
```

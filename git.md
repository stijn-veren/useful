# Git Useful Examples

## Remove last commit from remote git repository
[Source Link](https://stackoverflow.com/questions/8225125/remove-last-commit-from-remote-git-repository/8225166)

Be careful that this will create an "alternate reality" for people who have already fetch/pulled/cloned from the remote repository. But in fact, it's quite simple. Remove commit locally & force-push the new HEAD commit:

```
git reset HEAD^
git push origin +HEAD
```

## Add name and email to Git

```
git config --global user.name "name" && git config --global user.email "name@email.com"
```

## Create a new repository on the command line

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:stijn-veren/test.git
git push -u origin main
```

## Push an existing repository from the command line

```
git remote add origin git@github.com:stijn-veren/test.git
git branch -M main
git push -u origin main
```

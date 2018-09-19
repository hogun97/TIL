# Git Rebase

There are two ways to combine two branches - Merge and Rebase
A simple way to differentiate the two methods:
- git-merge: join two or more development histories together
- git-rebase: forward-port local commits to the updated upstream head

## What is Rebase

- Rebase is a one of the methods to combine two branches
- Unlike Merge, Rebase literally re-bases the standard branch without taking
commit histories into consideration.

## Visual Aid

![Rebase](https://wac-cdn.atlassian.com/dam/jcr:e4a40899-636b-4988-9774-eaa8a440575b/02.svg?cdnVersion=jx)

As shown in the image above, one must be in the feature branch to rebase the
commits made in that branch. All the commits in the feature branch will be
rebased in front of the master branch. Likewise, rebasing the feature branch
will update the entire branch to the state displayed in master branch.




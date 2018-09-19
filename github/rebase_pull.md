# Rebase a Pull Request

When working on a group project, one should update their local branch after a pull request has been merged to the master branch.
In order to do so, one must be able to use 'rebase' function to avoid any conflict.

1. Fetch upstream
```
git fetch upstream
```

2. Checkout to the branch that needs rebasing
```
git checkout <branch-name>
```

3. Rebase in sync with upstream/master
```
git rebase upstream/master
```

4. Check for conflicts and fix them 

5. If you fixed any conflicts, check the status and add the changes
```
git status
git add .
```

6. Continue rebasing
```
git rebase --continue
```  

Note: If there are no conflicts between local and upstream/master branches, the rebasing job will be completed after step 3.
However, if there are conflicts, steps 4, 5 and 6 are necessary.


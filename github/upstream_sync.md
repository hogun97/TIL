# Fork 떠온 프로젝트 upstream과 같은 상태로 업데이트하기

1. 작업할 프로젝트를 개인 repository에 fork해오기.
2. 현재 작업 중인 프로젝트의 저장소 보기:
```
git remote -v
```
3. 프로젝트 ssh 주소를 써서 upstream 추가하기:
```
git remote add upstream git@github.com:...
```
4. 추가된 upstream 가져오기:
```
git fetch upstream
```
5. 가져온 upstream에서 작업할 브랜치를 upstream/master의 하위 브랜치로 만들기:
```
git branch [branch-name] upstream/master
```
6. 현 저장소의 브랜치 현황보기:
```
git branch -v
```
7. 새로 만든 브랜치로 이동:
```
git checkout [branch-name]
```
8. 새 브랜치 위에서 작업 시작.

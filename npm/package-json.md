# package.json

## Requirements
    - Name
    - Version
    - Description
    - Keywords
    - Homepage
    - Bugs
    - License
    - People fields: author, contributors
    - Other optional ones can be found [here](https://docs.npmjs.com/files/package.json)

# package-lock.json

- An automatically generated file for any operations where npm modified either
    - node modules tree
    - package.json
- Description of the exact tree that was generated
    - Intended to display the exact versions of all dependencies during the build
    - StackExchange에서도 종종 package-lock.json을 올리는 경우가 있다 - error reproduce하기 위해서.
    - Subsequent installs are able to generate identical trees
    - package-lock.json cannot be published 


## Requirements
    - name
    - version
    - lockfileVersion
    - packageIntegrity
    - preserveSymlinks
    - dependencies


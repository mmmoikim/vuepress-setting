# VUEPRESS-SETTING

- **[vuepress 공식 사이트](https://vuepress.vuejs.org)** 
  
- vuepress 설치
```
npm install -D vuepress
```

- 디렉토리 셋팅

```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

- package.json 런 스트립트 추가

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- config.js 셋팅

```
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/<리파지토리 이름>/'
}
```

- deploy.sh 만들기
  
```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
  ```


### docs:dev 빌드시 TypeError: res.getHeader is not a function 에러
 - npm install webpack-dev-middleware@3.6.0 설치
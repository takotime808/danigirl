# Ode to Dani Girl #

This is a React application for Dani Girl. While choosing not to fork the repo, template credit belongs to [gitname](https://github.com/gitname/react-gh-pages/tree/master).

The site now includes a simple photo gallery demonstrating React components.

The deployed site can be seen at:
[https://takotime808.github.io/danigirl/](https://takotime808.github.io/danigirl/)

To build and run the docker container, use:
```sh
docker build -t react-app:dg -f deploy/Dockerfile .
docker run -p 3000:3000 react-app:dg
```
More advanced shell logic can be found [here](deploy/README.md).

----
### Deploying ###

Deploying an application with gh-pages requires:
```sh
npm run deploy
```
By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can [specify a custom commit message](https://github.com/gitname/react-gh-pages/issues/80#issuecomment-1042449820) via the `-m` option, like this:
```sh
npm run deploy -- -m "Deploy React app to GitHub Pages"
```

More information on build a React app and deploying to gh-pages can be found in [gitname's template](https://github.com/gitname/react-gh-pages/tree/master).

This can all be done from inside a docker container:
```sh
docker build -t react-app:dg -f deploy/Dockerfile_for_exec_bash .
docker run -p 3000:3000 react-app:dg
docker exec -it <CONTAINER_ID> bash
```
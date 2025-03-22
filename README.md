# Ode to Dani Girl #

This is a React application for Dani Girl. While choosing not to fork the repo, template credit belongs to [gitname](https://github.com/gitname/react-gh-pages/tree/master).

To build and run the docker container, use:
```sh
docker build -t react-app:dg -f deploy/Dockerfile .
docker run -p 3000:3000 react-app:dg
```
More advanced shell logic can be found [here](deploy/README.md).

More information on build a React app and deploying to gh-pages can be found in [gitname's template](https://github.com/gitname/react-gh-pages/tree/master).
# Ode to Dani Girl #

This is a React application for Dani Girl.

To build and run the docker container, use:
```sh
docker build -t react-app:dg -f deploy/Dockerfile .
docker run -p 3000:3000 react-app:dg
```
More advanced shell logic can be found [here](deploy/README.md).
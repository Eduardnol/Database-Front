# database

> :warning: :warning: It takes some time for the backend to start (because of free tier), so when clicking the web page, please be patient. :warning: :warning:

## DOCKER
 ```
 docker build -t front .
 ```
```
docker run --name front -v $(pwd)/src:/app/src -p 8082:8080 -d front
//in powershell use ${pwd} instead of $(pwd)
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Backend

The backend is in this other repo.

[https://github.com/Eduardnol/Database_Backend](https://github.com/Eduardnol/Database_Backend)

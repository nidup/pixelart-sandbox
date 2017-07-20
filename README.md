# Pixel Art Sandbox

Sandboxing few ideas


# Demo

TODO

# Screenshots

TODO

# Getting Started to Dev

## Pre-requisites

You need to have `docker` installed

## Build the dev image

```
docker build -t nidup/phaserjs .
```

Your image should appears in the list when typing,
```
docker images
```

## Run the dev image

Run to mount local project code inside the container and bind ports
```
docker container rm phaser && docker run --name phaser -v "$PWD":/usr/src/app -p 8080:8080 -d nidup/phaser:latest
```

Your container should appears in the list when typing,
```
docker ps
```

## Install / update project dependencies

```
docker exec -it phaser npm install
```

## Running the project in dev mode:

Launch webpack server in watch mode,
```
docker exec -it phaser npm run dev
```

You can access your project in your browser,
```
http://localhost:8080/
```

# Deploy in production

We deploy online version directly from our Github repository with https://pages.github.com/

## Checkout the gh-page and rebase master on

```
git checkout gh-pages
git rebase master -i
```

## Build the bundle.js

```
docker exec -it phaserjs npm run build
```

## Commit then push the bundle.js

```
git add build/bundle.js
git commit
git push
```

## Check the deployment

TODO

# Troubleshooting

## Conflict. The container name "/phaserjs" is already in use by container

```
docker rm phaserjs
```

# Utils

## Connect in bash to the dev image

Run,
```
docker exec -it phaserjs bash
```

Your local files should be mounted in the container,
```
ls
Dockerfile  LICENSE  README.md	assets	bin  doc  index.html  lib  package.json  src  tsconfig.json  webpack.config.js
```

# Resources

TODO

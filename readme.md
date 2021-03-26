# Spanish Language Understanding Evaluation (SLUE)

## Requirements

* docker-compose: https://docs.docker.com/compose/install/

## Development

From your local machine:

``` bash
git clone HTTPS_URL
cd slue
docker-compose up
```

When the docker containers have been built and started, open your browser with http://localhost:4200.

## Production

From temu.bsc.es virtual machine:

``` bash
git clone HTTPS_URL
cd slue
docker-compose -f docker-compose.prod.yml up --build -d
```

When the docker containers have been built and started, open your browser with http://temu.bsc.es:8888.

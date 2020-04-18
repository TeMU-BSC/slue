# Spanish Language Understanding Evaluation (SLUE)

## Requirements
- docker-compose: https://docs.docker.com/compose/install/

## Development
```bash
git clone HTTPS_URL
cd slue
docker-compose up
```

When the docker containers have been built and started, open your browser with http://localhost:4200.

## Production (in temu.bsc.es virtual machine)
```bash
git clone HTTPS_URL
cd slue
docker-compose -f docker-compose.prod.yml up -d
```

When the docker containers (*-prod) have been built and started, open your browser with http://temu.bsc.es:8888.

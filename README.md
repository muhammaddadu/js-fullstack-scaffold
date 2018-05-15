# NodeJS Fullstack Scaffold (Docker Toolchain + Gitlab DevOps)
> Scaffold for a Docker based FullStack NodeJS Projects with a robust CI/CD Gitlab process

This project is an example/scaffold full-stack application that uses NodeJS with MySQL & Redis for the back-end, Angular for the front-end, with CI/CD powered by Gitlab.

#### TODO

- Add example of sequalize MySQL model
- Add example of redis
- Add example of Angular webapp
- Add example of running tests

## Files in this project

- `example.env` - enviromental variables used in this scaffold
- `.gitlab-ci.yml` - responsible for CI/CD
- `app.js` - node entry point
- `docker-compose.yml` - responsible for managing docker
- `docker-compose.yml.example` - overides for using docker in development
- `Dockerfile` - responsible for building node image

## Development

### Setting Up

1) Clone this repository
2) Update name in `package.json`
3) Adjust `example.env` to the needs of the project and create your own `.env` for development
4) Adjust `docker-compose.yml` to the needs of the project
5) Copy `docker-compose-override.yml.example` and create `docker-compose-override.yml` for local development

### Development

1) run `docker-compose up`
2) add apis or front-end project and view them at `http://locahost:8080`
3) have fun and innovate :)

### Production Container Setup

1) Create a Docker or (Ubuntu with Docker) container on AWS, Azure or on any other platforms
2) Create an account for Gitlab on the container (TODO:- Add how to tutorial)
3) Deploy
4) Have fun with production

## My Thoughts

If you are looking to create an application of todays development standard, look no further than this project. It's a scaffold wrapping the awesome development tools avaiable ATM.

## docker container

```bash

# get the list of running containers
> docker container ls

# get the list of all containers (including running and not running)
> docker container ls -a

# create a container
> docker container create <image name or image id>
> docker container create hello-world

# start a container
> docker container start <container name or container id>

# remove the stopped (exited) container
> docker container rm <container name or container id>

# run a container
> docker container run <image name or image id>
> docker container run hello-world

# run a container with name
> docker container run --name <container name> <image name or image id>
> docker container run --name hello hello-world


```

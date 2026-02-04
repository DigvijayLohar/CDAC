# Container commands

```bash

# get list of running containers
> docker container ls

# get the list of all containers
> docker container ls -a

# create a container
> docker container create <image name or image id>

# start the container
> docker container start <container id or container name>

# create a new container and start immediately in attached mode
> docker container run <image name or image id>

# create a new container and start immediately in detached mode
> docker container run -d <image name or image id>

# create a new container and start immediately in detached mode
# with a container name
> docker container run -d --name <container name> <image name or image id>

# get selected container's details
> docker container inspect <container name or container id>

# stop the container
> docker container stop <container id or container name>

# remove the container
> docker container rm <container id or container name>

# forcefully remove a running container
> docker container rm --force <container id or container name>

# execute any command inside the running container
> docker container exec <container name or container id> <command>

```

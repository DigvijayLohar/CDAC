# docker commands

```bash

# run a container
> docker container run -d --name <container namer> -p <host port>:<container port> <image name or image id>

# run a container with required environment variables
> docker container run -d --name <container name> -p <host port>:<container port> -e <env variable name>=<value> <image name or image id>

# please make sure that mysql-server is not running on your machine
# option 1: please please please uninstall the mysql-server from your machine
> sudo apt-get purge mysql-server

# stop the mysql server process
> sudo systemctl stop mysql

# check if a required port is in use
> lsof -i :<port number>
# > lsof -i :3306

# create a container for mysql image
# -i: interactive
# -t: teletype terminal
# -d: detached mode
> docker container run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql

> docker container run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=mydb mysql

# restart the container automatically
> docker container run -itd --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=mydb --restart=always mysql

# get the logs from the container
> docker container logs <container name or container id>

# get the terminal of the container so that you can execute the commands inside the container
> docker container exec -it <container name or container id> bash

```

# linux commands

```bash

# export a variable
> export environment <variable name>=<variable value>
# export USER_NAME="amit"

# get a value of exported variable
> echo $<variable name>
# > echo $USER_NAME

# enable the service to start at boot time
> sudo systemctl enable docker

```

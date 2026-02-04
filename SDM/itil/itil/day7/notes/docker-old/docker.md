# docker

- objects

  - image
  - container
  - network
  - volume

- commands
  - ls: list
    - ls -a: list all
  - rm: remove
  - info: get information

## installation and configuration

```bash

# update the apt source
> sudo apt-get update

# install the pre-requisites
> sudo apt-get install ca-certificates curl gnupg

# download the key
> sudo install -m 0755 -d /etc/apt/keyrings

> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

> sudo chmod a+r /etc/apt/keyrings/docker.gpg


# install docker apt source
> echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# update the apt source
> sudo apt-get update

# install docker
> sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# start the docker service
> sudo systemctl start docker

# add your user in docker group
> sudo usermod -aG docker $USER
# please please please restart your machine

# allow docker to use private repository
> vim /etc/docker/daemon.json

# add the following lines
{
  "insecure-registries" : ["192.168.0.30:5000"]
}

# start the docker service
> sudo systemctl start docker


```

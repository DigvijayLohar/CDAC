## build the jenkins cluster

- execute these commands on agent machine

```bash

# install open jre 11
> sudo apt-get update
> sudo apt-get install openjdk-11-jre

# create a user named jenkins with no password
> sudo useradd -d /home/jenkins -m jenkins
> sudo adduser jenkins

# change password for user jenkins
> sudo passwd jenkins

# login with jenkins user
> su jenkins

# go to the home directory of jenkins
> cd ~
> cd /home/jenkins

# create a new directory named .ssh and goto the same directory
> mkdir .ssh
> cd .ssh

# create a file named authorized_keys
# copy the contents of master machine's ~/.ssh/id_rsa.pub
> vim authorized_keys


```

- execute these commands on master machine

```bash

# create a ssh key for current user
> ssh-keygen

# the above command will create a new key pair (id_rsa and id_rsa.pub) in ~/.ssh directory

# copy id_rsa.pub to agent machine
> ssh-copy-id jenkins@<agent machine ip address>

```

# jenkins installation

```bash

# add the deb source and key
> curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null
> echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null

# install JRE and jenkins
> sudo apt-get update
> sudo apt-get install fontconfig openjdk-11-jre
> sudo apt-get install jenkins

# check the status of jenkins service
> sudo systemctl status jenkins

# start the jenkins service
> sudo systemctl start jenkins

# enable the jenkins service
> sudo systemctl enable jenkins

# get the initial password
> cat /var/lib/jenkins/secrets/initialAdminPassword


b663227ea41041a5963eedc3b9c7a02c


```

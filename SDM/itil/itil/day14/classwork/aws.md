# AWS

# virtual machine: EC2

- Elastic Cloud Compute
  - used to build a virtual machine with CPU
  - ec2 instance: virtual machine

```bash

# settings
# name: Server
# ami: ubuntu server 22.04 LTS
# instance type: t2.micro
# key-pair
# - name: ditiss-demo
# - type: rsa
# - format: .pem

```

### connecting to the ec2 instance

```bash

# change the permissions of pem file
> chmod 400 ditiss-demo.pem

# use ssh to connect to the remote machine
> ssh -i ditiss-demo.pem ubuntu@<public ip address>

```

### configure the ec2 instance to run apache2

```bash

# update the apt cache
> sudo apt-get update

# install apache2
> sudo apt-get install apache2

# check the status of apache2 service
> sudo systemctl status apache2

# start the apache2
> sudo systemctl start apache2

# enable the apache2
> sudo systemctl enable apache2

# check if apache2 is working on localhost
> curl http://localhost

```

### update the security group (firewall)

```bash

# click the instance in the instances list
# go to the security tab in the bottom half of the page
# click the security group (launch-wizard*)
# click the button "Edit Inbound Rules"
# click "Add Rule"
# - type: http
# - protocol: TCP
# - port range: 80
# - source: Anywhere from ipV4
# click the save rule button

```

## update the default index file

```bash

# connect to the EC2 instance using ssh command
# go to the apache htdocs directory
> cd /var/www/html

# remove the default index.html
> sudo rm index.html

# create a new index.html
> sudo vim index.html

```

## upload file from local machine to ec2 instance

```bash

# execute these commands on your local machine
# create a local file named index.html
# upload the local file to the ec2 instance
> scp -i ~/Downloads/ditiss-demo.pem index.html ubuntu@<ec public ip>:~/

# execute these commands on your ec2 instance
> sudo mv index.html /var/www/html/

```

## create AWS user

```bash

# visit IAM service
# create a new user
# - name: ditiss-user
# - permissions
#   - attach policies directly
#   - policy name: AdministratorAccess
# create the user

# generate the access key and secret for the user
# click the user from user's list
# - click the security credentials option
# - in the Access Keys section, click "create access key" button
#   - type: CLI
# - create the access key
#


```

## install aws cli

```bash

# create a directory to hold cli
> mkdir aws-cli
> cd aws-cli

# download aws cli v2
> curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
> unzip awscliv2.zip
> sudo ./aws/install

# configure aws cli
> aws configure

# provide
# - access key generated earlier
# - secret generated earlier
# - default region name: ap-south-1

```

## terraform

```bash

# install terraform
> wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
> echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
> sudo apt-get update
> sudo apt-get install terraform

# create a directory to hold tf instance configuration
> mkdir instances
> cd instances

```

- create a TF provider file (provider.tf)

```groovy

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "master" {
  ami           = "ami-0f5ee92e2d63afc18"
  instance_type = "t2.micro"
  key_name      = "ditiss-demo"

  tags = {
    Name = "master"
  }
}

resource "aws_instance" "agent" {
  ami           = "ami-0f5ee92e2d63afc18"
  instance_type = "t2.micro"
  key_name      = "ditiss-demo"

  tags = {
    Name = "agent"
  }
}

```

- execute the following commands

```bash

# please make sure that you are in the directory where provider.tf file resides
# initialize terraform for this project
> terraform init

# create the resources
> terraform apply

# delete the resources
> terraform destroy


```

# puppet

## installation

- master configuration

```bash

# connect to the master machine
> ssh -i ~/Downloads/ditiss-demo.pem ubuntu@<public ip of master>

# edit /etc/hosts to add a new entry with the name of puppet with master private ip address
> sudo vim /etc/hosts
> 172.31.91.18 puppet

# download the apt source
> wget https://apt.puppetlabs.com/puppet6-release-bionic.deb
> sudo dpkg -i puppet6-release-bionic.deb
> sudo apt-get update

# install puppet server
> sudo apt-get install puppetserver

# change the memory requirements
> sudo vim /etc/default/puppetserver
# old: JAVA_ARGS="-Xms2g -Xmx2g -Djruby.logger.class=com.puppetlabs.jruby_utils.jruby.Slf4jLogger"
# new: JAVA_ARGS="-Xms512m -Xmx512m -Djruby.logger.class=com.puppetlabs.jruby_utils.jruby.Slf4jLogger"

# start the puppetserver
> sudo systemctl start puppetserver

# check the puppet server service status
> sudo systemctl status puppetserver

# enable the puppetserver service
> sudo systemctl enable puppetserver

```

- agent configuration

```bash

# connect to the master machine
> ssh -i ~/Downloads/ditiss-demo.pem ubuntu@<public ip of master>

# edit /etc/hosts to add a new entry with the name of puppet with master private ip address
> sudo vim /etc/hosts
> 172.31.91.18 puppet

# download the apt source
> wget https://apt.puppetlabs.com/puppet6-release-bionic.deb
> sudo dpkg -i puppet6-release-bionic.deb
> sudo apt-get update

# install puppet agent service
> sudo apt-get install puppet-agent

# start the puppet service
> sudo systemctl start puppet

# check the puppet service status
> sudo systemctl status puppet

# enable the puppet service
> sudo systemctl enable puppet

```

## create puppet cluster

- master configuration

```bash

# list all the certificates
> sudo /opt/puppetlabs/server/bin/puppetserver ca list

# trust or sign the certificate
> sudo /opt/puppetlabs/server/bin/puppetserver ca sign --certname <cert name>

```

- agent configuration

```bash

# please please please execute this command only if you do not see the entry in masters' ca list output
# create a certificate request
> sudo /opt/puppetlabs/puppet/bin/puppet agent --fingerprint

# please please please execute this command only when master signs the certificate
# test the connection with master
> sudo /opt/puppetlabs/puppet/bin/puppet agent -t

```

## create a configuration

- master

  - go to manifest folder

    ```bash
    > cd /etc/puppetlabs/code/environments/production/manifests/
    ```

  - create a site.pp file

    ```puppet
    package { 'apache2':
        ensure => 'present'
    }
    ```

## pod

```bash

# get all pods in the default namespace
> kubectl get pods

# get details of selected pod
> kubectl describe pod <pod name>

# delete a pod
> kubectl delete pod <pod name>

```

## service

```bash

# get list of services
> kubectl get services

# get details of a selected service
> kubectl describe service <service name>

# delete a service
> kubectl delete service <service name>


```

## replica set

```bash

# get list of replica sets
> kubectl get replicasets
> kubectl get replicaset
> kubectl get rs

# delete replica set
> kubectl delete rs <rs name>

```

## deployment

```bash

# get the list of deployments
> kubectl get deployments

# update the deployment
# change the image name to new version and upload to docker hub
> kubectl apply -f <file name>

# get the status of deployment update
> kubectl rollout status deployment/<deployment name>

# get the history of selected deployment
> kubectl rollout history deployment/<deployment name>

# rollback the deployment to the previous version
> kubectl rollout undo deployment/<deployment name>

# rollback the deployment to the a specific version
> kubectl rollout undo deployment/<deployment name> --to-reversion=<version>

```

## exercises

- create a replica set for nginx application with desired count as 3. make sure the nginx is working on your browser.

- containerize a flask application to return version on / url. Run this application in kubernetes cluster

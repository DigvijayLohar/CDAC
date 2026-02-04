# docker images

```bash

# get the list of images
> docker image ls

# delete selected image
> docker image rm <image name>

# download an image from docker hub
> docker image pull <image name>

# download an image from sunbeam's private registry
> docker image pull 192.168.0.30:5000/<image name>

# get the selected image details
> docker image inspect <image name or image id>

# in ubuntu linux all images will get downloaded in
# /var/lib/docker/images directory

```

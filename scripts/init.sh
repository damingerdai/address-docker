#!/bin/sh

declare -a services=("repository" "web")

MASTER_DIR=$(pwd)

## For each service, create a .env in the secrets folder
for service in "${services[@]}"
do
    printf "\n$white> Transpiling the $green $service service...$escape\n"
    cd $MASTER_DIR/$service && yarn
done

printf "\n$white- All microservices have been $green tranpiled$white!\n"
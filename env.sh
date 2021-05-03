#!/bin/bash

`cp .env.global .env.development`

# IP_ADDRESS=$(ifconfig en0 | grep inet | grep -v inet6 | cut -d ' ' -f2)

i=0;
while [ $i -le 10 ] 
do 
    NET=$(ifconfig en"$i" | grep inet); 
    if [ ! -z "$NET" ] ; then 
        IP_ADDRESS=$(ifconfig en"$i" | grep inet | grep -v inet6 | cut -d ' ' -f2);
        break;
    fi
    i=$(( i+1 ));
done 

if [ ! -z "$IP_ADDRESS" ]; then
    find .env.development -type f | xargs sed -i '' "s|IP|${IP_ADDRESS}|g"
fi



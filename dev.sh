#!/bin/bash
cd ./.vitepress
zip dist dist.zip

# tar -czvf dist.tar.gz dist

scp dist.zip root@sunrise1024.top:/home/docs/
ssh root@sunrise1024.top "cd /home/docs/ && rm -rf dist && tar -xzvf dist.tar.gz && rm -rf dist.tar.gz"
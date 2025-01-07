#!/bin/bash
cd ./.vitepress
tar -czvf dist.tar.gz dist

scp dist.tar.gz root@blog.chaoyang1024.top:/home/docs/
ssh root@blog.chaoyang1024.top "cd /home/docs/ && rm -rf dist && tar -xzvf dist.tar.gz && rm -rf dist.tar.gz"
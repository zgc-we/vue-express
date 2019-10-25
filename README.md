## linux搭建node服务
```
wget https://npm.taobao.org/mirrors/node/v10.6.0/node-v10.6.0-linux-x64.tar.xz

tar -xvf node-v10.6.0-linux-x64.tar.xz

mv node-v10.6.0-linux-x64 node

ln -s /root/node/bin/node /usr/sbin/node

ln -s /root/node/bin/npm /usr/sbin/npm

node -v

npm -v

```

## 建立持久连接
```
npm install -g pm2

ln -s /usr/local/application/nodejs/bin/pm2 /usr/bin/pm2

pm2 start npm -- run start

pm2 list

pm2 stop 

pm2 restart

pm2 delete

```




# notification-IP
To receive mail if my IP was changed

## Run on raspberryPI with startup
* PATH FILE: `/etc/rc.local`

```
  /bin/node /app/notification-IP/server 1>/app/notification-IP/log 2>/app/notification-IP/errorLog &
```

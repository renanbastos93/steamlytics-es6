# steamlytics-es6
Creating module to consult api http://csgo.steamlytics.xyz/api

###Version: 1.0.2

##Install
```bash
 $ npm install steamlytics-es6 --save
``` 

##Using
```js
const steamlytics = require('steamlytics-es6');
//Default version v1, because to get key you going login in steamlytics
var api = new steamlytics(version, key)
	.getItems()
	.then((data) => {
		if(data.success){
			console.log(data);
		}
	})
	.catch((err) => console.log("Errorrr", err))
	;
```

###Methods
```js
1. new steamlytics()
* getItems().then(callback).catch(callback)
* getPrices(nameItem).then(callback).catch(callback)
* getPopular().then(callback).catch(callback)
//version 2
* getPriceList().then(callback).catch(callback)
* getPriceListCompact().then(callback).catch(callback)
```

###Note
 Using module request.
 Using Promise native.

###Node --version 6.10.0

#We are still testing
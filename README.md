# steamlytics-es6
Creating module to consult api http://steamlytics.xyz/api

###Version: 1.0.1

##Install
```bash
 $ npm install steamlytics-es6 --save
``` 

##Using
```js
const steamlytics = require('steamlytics-es6');
var api = new steamlytics(version, key) //Default version v1, because to get key you going login in steamlytics
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
1. new steamlytics()
* getItems().then(callback).catch(callback)
* getPrices(nameItem).then(callback).catch(callback)
* getPopular().then(callback).catch(callback)

###Note
 Using module request.
 Using Promise native.

##We are still testing
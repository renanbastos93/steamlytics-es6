const request = require('request');

Promise = global.Promise || Promise;

class ApiSteam {
	constructor(version, key){
		this.url = "http://api.csgo.steamlytics.xyz/"
		this.version = "v1" || version;
		this.key = "" || key;
		this.headers = {
			"User-Agent" : "request",
			"Content-Type" : "application/json"
		}
		this.getPriceList();
		this.getPriceListCompact();
		this.getItems();
		this.getPrices();
		this.getPopular();
	}
	getPriceList(){
		function readyPriceList(){
			let fetchAPI = {
				url: this.url + this.version + '/pricelist?key=' + this.key,
				headers: this.headers,
				json: true
			};
			return new Promise((resolve, reject) => {
				request.get(fetchAPI, (error, resp, body) => {
					try{
						setTimeout(()=>resolve(body), 3000);
					}catch(ex){
						reject(ex);
					}
				});
			});
		};
		return (this.version == 'v2') ? readyPriceList() : 'Versão não compativel';
	}
	getPriceListCompact(){
		function readyPriceListCompact(){
			let fetchAPI = {
				url: this.url + this.version + '/pricelist/compact?key=' + this.key,
				headers: this.headers,
				json: true
			};
			return new Promise((resolve, reject) => {
				request.get(fetchAPI, (error, resp, body) => {
					try{
						setTimeout(()=>resolve(body), 3000);
					}catch(ex){
						reject(ex);
					}
				});
			});
		};
		return (this.version == 'v2') ? readyPriceListCompact() : 'Versão não compativel';
	}
	getItems(){
		let fetchAPI = {
			url: this.url + this.version + '/items?key=' + this.key,
			headers: this.headers,
			json: true
		};
		return new Promise((resolve, reject) => {
			request.get(fetchAPI, (error, resp, body) => {
				try{
					setTimeout(()=>resolve(body), 3000);
				}catch(ex){
					reject(ex);
				}
			});
		});
	}
	getPrices(nameItem){
		nameItem = (nameItem.indexOf('\u2605 ') === 1) ? nameItem.replace('\u2605 ', '') : nameItem;
		let fetchAPI = {
			url: this.url + this.version + '/prices/' + nameItem + '?key=' + this.key,
			headers: this.headers,
			json: true
		}
		return new Promise((resolve, reject) => {
			request(fetchAPI, (error, resp, body) => {
				try{
					console.log(nameItem);
					// setTimeout(()=>resolve(body), 3000);
					resolve(body);
				}catch(ex){
					reject(ex);
				}
			});
		});
	}
	getPopular(){
		let fetchAPI = {
			url: this.url + this.version + '/items/popular?key=' + this.key,
			headers: this.headers,
			json: true
		}
		return new Promise((resolve, reject) => {
			request.get(fetchAPI, (error, resp, body) => {
				try{
					setTimeout(()=>resolve(body), 3000);
				}catch(ex){
					reject(ex);
				}
			});
		});
	}
}

module.exports = ApiSteam;
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
		this.getItems();
		this.getPrices();
		this.getPopular();
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
					resolve(body);
				}catch(ex){
					reject(ex);
				}
			});
		});
	}
	getPrices(nameItem){
		let fetchAPI = {
			url: this.url + this.version + '/prices/' + nameItem + '?key=' + this.key,
			headers: this.headers,
			json: true
		}
		return new Promise((resolve, reject) => {
			request.get(fetchAPI, (error, resp, body) => {
				try{
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
					resolve(body);
				}catch(ex){
					reject(ex);
				}
			});
		});
	}
}

module.exports = ApiSteam;
const fs = require('fs')
// 使用 node-fetch 抓取網址資料
const fetch = require('node-fetch')

const keyword = '隆乳'
//const url = `https://www.google.com/search?q=${encodeURI(keyword)}&num=20`
// 百度搜尋結果（目前無法爬取百度資料）
const url = `https://www.baidu.com/s?wd=${encodeURI(keyword)}&rn=30`

//設定變數 str 存放 node-fetch 後的資料
let str = ""

fetch(url, {
    //設定裝置為電腦，防止爬取到行動版頁面
    headers: {
        "User-Agent": 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
    }})
    .then(res => res.text())
    .then(body => {
        return body.toString();
        //fs.writeFileSync(`./keywords/${keyword}.html`,body.toString())
    })
    .then(body => {
        str = body;
        //console.log(str)
        fs.writeFileSync(`./keywords/${keyword}.html`,str.toString())
    })
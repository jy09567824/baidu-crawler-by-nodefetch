const fs = require('fs')
// 使用 cheerio 整理資料，取出每筆結果標題、連結與描述
const cheerio = require('cheerio')
const $ = cheerio.load(str) //這一段有問題，抓不到str的資料GG

const results = []
let ranking = 1
$('.g').each(function(i, elem) {
    //新增 aElem、stElem 兩個固定值，分別抓取標題、連結、描述的 DOM 元素
    const aElem = $(this).find('a')
    const stElem = $(this).find('.st')

    //設定條件，如果有從 aElem 有抓到 href 的屬性，則抓取對應的資料存入 result 中
    if ($(aElem).attr('href')) {
        const result = {}
        result.serp = ranking++
        result.href = $(aElem).attr('href')
        result.title = $(aElem).find('h3').text()
        result.description = $(stElem).text()
        //把 result 物件存入 results 中
        results.push(result)
      }
  })

  //將結果儲存成 ${keyword}.json
  fs.writeFileSync(`./keywords/${keyword}.json`, JSON.stringify(results, null, 2))

  return results
const client =  require('cheerio-httpcli');
/*let urlencode = require('urlencode');
const request = require('request');
const cheerio = require('cheerio');*/

// Google에서 "node.js"에 대한 검색한다.
let word = ' node.js ' ;

client.fetch( 'http://browse.auction.co.kr/search?keyword=' + encodeURIComponent('삼겹살'), function( err , $ , res , body ) {

    $('div[class=section--itemcard_info]').each( function (idex, ele) {
        let data = $('div[class=area--itemcard_title]','div[class=section--itemcard_info_major]',$(this)).children().children('a').attr('href');
        // 이미지
        //('div[class=section--itemcard_info_major]').text();


        //data = await JSON.stringify(data);
        //data = await data.replace(/[}]/gi,'},');
        //data = await data.substring(data.indexOf("{"),data.lastIndexOf(","));
        console.log(data);
    });
});

/*
<ul id="fruits">
    <li class="apple">Apple</li>
    <li class="orange">Orange</li>
    <li class="pear">Pear</li>
    </ul>*/

Jsoup = org.jsoup.Jsoup

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
	//init_msg = "@경매장 코어젬스톤 엘리시움"; //for test

	msg = msg.replace(/(\s*)/g, "")
	var text = msg.substr(4).trim();

	if (msg.indexOf('@경매장') != -1){

		try {
			var server = text.slice(-4, text.length)
			var item = "";


			if (text.indexOf('스카니아') != -1) {
				item = text.slice(0, text.length - 4)

			} else if (text.indexOf('엘리시움') != -1) {
				item = text.slice(0, text.length - 4)

			} else if (text.indexOf('크로아') != -1) {
				server = text.slice(-3, text.length)
				item = text.slice(0, text.length - 3)

			} else if (text.indexOf('루나') != -1) {
				server = text.slice(-2, text.length)
				item = text.slice(0, text.length - 2)
			}

			경매장 = Jsoup.connect("https://maple.market/items/" + item + "/" + server).get()

			tna = 경매장.select("#auction-list > table > tbody > tr:nth-child(1) > td.text-left > span").get(0).text();
			price1 = 경매장.select("#auction-list > table > tbody > tr:nth-child(1) > td:nth-child(4)").get(0).text();
			price2 = 경매장.select("#auction-list > table > tbody > tr:nth-child(2) > td:nth-child(4)").get(0).text();
			price3 = 경매장.select("#auction-list > table > tbody > tr:nth-child(3) > td:nth-child(4)").get(0).text();
			price4 = 경매장.select("#auction-list > table > tbody > tr:nth-child(3) > td:nth-child(4)").get(0).text();
			price5 = 경매장.select("#auction-list > table > tbody > tr:nth-child(3) > td:nth-child(4)").get(0).text();
			priceck = 경매장.select("#auction-list > table > tbody > tr:nth-child(1) > td:nth-child(5)").get(0).text();

			if (price1 == "-") {
				price1 = 경매장.select("#auction-list > table > tbody > tr:nth-child(1) > td:nth-child(5)").get(0).text();
				price2 = 경매장.select("#auction-list > table > tbody > tr:nth-child(2) > td:nth-child(5)").get(0).text();
				price3 = 경매장.select("#auction-list > table > tbody > tr:nth-child(3) > td:nth-child(5)").get(0).text();
				price4 = 경매장.select("#auction-list > table > tbody > tr:nth-child(4) > td:nth-child(5)").get(0).text();
				price5 = 경매장.select("#auction-list > table > tbody > tr:nth-child(5) > td:nth-child(5)").get(0).text();
			}

			if (priceck == "-") {
				price1 = 경매장.select("#auction-list > table > tbody > tr:nth-child(1) > td:nth-child(6)").get(0).text();
				price2 = 경매장.select("#auction-list > table > tbody > tr:nth-child(2) > td:nth-child(6)").get(0).text();
				price3 = 경매장.select("#auction-list > table > tbody > tr:nth-child(3) > td:nth-child(6)").get(0).text();
				price4 = 경매장.select("#auction-list > table > tbody > tr:nth-child(4) > td:nth-child(6)").get(0).text();
				price5 = 경매장.select("#auction-list > table > tbody > tr:nth-child(5) > td:nth-child(6)").get(0).text();
			}
			
			rep = "검색하신 [" + server + "섭 " + item + "]의\n경매장 검색 결과는\n\n" + "1 : " + price1 + "\n2 : " + price2 + "\n3 : " + price3 + "\n4 : " + price4 + "\n5 : " + price5 + "\n\n더 많은 내역은 인게임에서 확인해주세요~"

			replier.reply(rep);
		}
		catch (e) {
			replier.reply("메이플 마켓에 지원하지 않는 아이템이거나\n지원하지 않는 서버입니다.\n아이템명(공백없이)/서버명을 확인 해주세요.\n지원서버 : 스카니아, 루나, 크로아, 엘리시움")
		}
	}
}

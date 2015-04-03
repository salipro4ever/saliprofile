  var a = document.getElementById('Blog1'); 
  if (a) {
	 var b = a.getElementsByTagName('div');
	 for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'post-body entry-content') {
		nd = b.item(i).innerHTML.replace(/#bl0/gi, "<span class='tag'></span>"); 
        nd = nd.replace(/#bl1/gi, "<span class='bullet0'></span>");
		nd = nd.replace(/#bl2/gi, "<span class='bullet1'></span>");
		nd = nd.replace(/#bl3/gi, "<span class='bullet2'></span>");
		nd = nd.replace(/#lnk/gi, "<span class='link'></span>");
		nd = nd.replace(/#bsrc/gi, "<span class='nguon'></span>");
		nd = nd.replace(/#blsrc/gi, "<span class='nguon'></span>");
		nd = nd.replace(/#bllink/gi, "<span class='link'></span>");
		nd = nd.replace(/#blkey/gi, "<span class='key'></span>");
		nd = nd.replace(/#bldown/gi, "<span class='downs'></span>");
		nd = nd.replace(/#note/gi, "<div class='note'>");
		nd = nd.replace(/#\/note/gi, "</div>");	 
		nd = nd.replace(/#code/gi, "<div class='scode'>");
		nd = nd.replace(/#\/code/gi, "</div>");	 
		nd = nd.replace(/@hanhphuc/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@buonngu/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@nhaymat/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@hoi/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@toatmohoi/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@tiensi/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@chodoi/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@hay/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@gaqua/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/112.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@cafe/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/57.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@ok/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/69.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@no/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/68.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@buon/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@love/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@leluoi/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@cuoibo/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif' alt='SaliproBlog'>");
		nd = nd.replace(/@tambiet/gi, "<img src='http://l.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif' alt='SaliproBlog'>");
		 
		 
		 
		 b.item(i).innerHTML = nd;
		}
	}
}
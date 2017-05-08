/**
 * blogit2.js
 * Created by SaliproPham on 26/05/2015.
 */




var no_thumb = 'http://1.bp.blogspot.com/-7vDs5hMaDho/U268E2ecF4I/AAAAAAAADY8/RBHVTTuJrxc/w300-h140-c/no-image.png';
var no_thumb2 = 'http://3.bp.blogspot.com/-ltyYh4ysBHI/U04MKlHc6pI/AAAAAAAADQo/PFxXaGZu9PQ/s60-c/no-image.png';
var BLOGIT = {fx:{}};

/**
 * SALIPRO: BLOGIT PLUGIN
 */
!function(){

    BLOGIT.fx.substr_3dot = function(w,num)
    {
        var y=w;
        var r=0;
        var s="";
        var t=1;
        a=y.replace(/\s/g,' ');
        a=a.split(' ');
        if(a.length>1)
        {
            if(num>=a.length)
            {
                num=a.length;
                t=0
            }
            for(z=0;
                z<num;
                z++)
            {
                if(a[z].length>0)
                {
                    s+=" "+a[z];
                    r++
                }
            }
            if(t==1)s+="..."
        }
        return s
    }
    BLOGIT.fx.thumbnail_resize = function(image_url,w,h)
    {
        var url = image_url.replace('/s72-c/','/');;
        if(w && h){
            url = image_url.replace('/s72-c/','/w'+w+'-h'+h+'-c/');
        }
        return url;
    }

    BLOGIT.featured_posts=function(t,i,a,e){var s=function(t){var i="",e="",s=t.feed.entry;if(s){for(var l="http://placehold.it/640x360&text=blogit.info",d=0;d<s.length;d++){var r=s[d],c="#",n="";if("media$thumbnail"in r&&(l=BLOGIT.fx.thumbnail_resize(r.media$thumbnail.url)),r.category.length>1)for(var v=0;v<r.category.length;v++)r.category[v].term!=a&&3>v&&(n+="<span>"+r.category[v].term+"</span>");for(var o=0;o<r.link.length;o++)if("alternate"==r.link[o].rel){c=r.link[o].href;break}0==d?i='<a href="'+c+'"><article id="'+r.id.$t.split(".")[2]+'"><div class="thumb"><img src="'+l+'"></div><div class="detail"><h2 class="post-title">'+r.title.$t+'</h2><div class="post-tags">'+n+"</div></div></article></a>":e+='<div class="col-md-6 small-item"><a href="'+c+'"><article id="'+r.id.$t.split(".")[2]+'"><div class="thumb"><img src="'+l+'"></div><div class="detail"><h2 class="post-title">'+r.title.$t+'</h2><div class="post-tags">'+n+"</div></div></article></a></div>"}var f='<div class="col-md-6"><div class="featured-left">'+i+'</div></div><div class="col-md-6"><div class="featured-right">'+e+"</div></div>";return f}},l=function(){$.ajax({url:t+"/feeds/posts/summary",data:{category:a,"max-results":i,alt:"json-in-script"},success:function(t,i){$(e).html(s(t,i));$(e).addClass('loaded')},dataType:"jsonp",cache:!0})};$(document).ready(l)};

    BLOGIT.total_posts = function(res){
        var a = res.feed.openSearch$totalResults.$t;
        if(!a || a.length == 0) a = 'Loading'
        document.write(a);
    };//

    BLOGIT.total_comments = function(res){
        var a = res.feed.openSearch$totalResults.$t;
        if(!a || a.length == 0) a = 'Loading'
        document.write(a);
    };//

    BLOGIT.total_views = function(){


        var a = $('#Stats1_totalCount').text();
        if(!a || a.length == 0) a = 'Loading'
        console.log($('#Stats1_totalCount').text())
        document.write(a);
    };//

    BLOGIT.get_FacbookLike = function(res){
        var a = res.shares;
        if(!a || a.length == 0) a = 0
        document.write(a);
    };//

    BLOGIT.get_TwitterTweet = function(res){
        var a = res.count;
        if(!a || a.length == 0) a = 0
        document.write(a);
    };//
}();




/**
 *  bp_thumbnail_resize
 */
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('d a(5,0){7 2=k;7 1=f;6=\'<n 9="\'+2+\'" 8="\'+1+\'" b="\'+5.3(\'/e-c/\',\'/i\'+2+\'-h\'+1+\'-c/\')+\'" j="\'+0.3(/"/g,"")+\'" l="\'+0.3(/"/g,"")+\'"/>\';m(0!="")4 6;o 4""}',25,25,'post_title|image_height|image_width|replace|return|image_url|image_tag|var|height|width|bp_thumbnail_resize|src||function|s72|160|||w|alt|256|title|if|img|else'.split('|'),0,{}))

/**
 * selectnav mobile
 */
window.selectnav=function(){return function(p,q){var a,h=function(b){var c;b||(b=window.event);b.target?c=b.target:b.srcElement&&(c=b.srcElement);3===c.nodeType&&(c=c.parentNode);c.value&&(window.location.href=c.value)},k=function(b){b=b.nodeName.toLowerCase();return"ul"===b||"ol"===b},l=function(b){for(var c=1;document.getElementById("selectnav"+c);c++){}return b?"selectnav"+c:"selectnav"+(c-1)},n=function(b){g++;var c=b.children.length,a="",d="",f=g-1;if(c){if(f){for(;f--;){d+=r}d+=" "}for(f=0;f<c;f++){var e=b.children[f].children[0];if("undefined"!==typeof e){var h=e.innerText||e.textContent,i="";j&&(i=-1!==e.className.search(j)||-1!==e.parentElement.className.search(j)?m:"");s&&!i&&(i=e.href===document.URL?m:"");a+='<option value="'+e.href+'" '+i+">"+d+h+"</option>";t&&(e=b.children[f].children[1])&&k(e)&&(a+=n(e))}}1===g&&o&&(a='<option value="">'+o+"</option>"+a);1===g&&(a='<select class="selectnav" id="'+l(!0)+'">'+a+"</select>");g--;return a}};if((a=document.getElementById(p))&&k(a)){document.documentElement.className+=" js";var d=q||{},j=d.activeclass||"active1",s="boolean"===typeof d.autoselect?d.autoselect:!0,t="boolean"===typeof d.nested?d.nested:!0,r=d.indent||"\u2192",o=d.label||"- Navigation -",g=0,m=" selected ";a.insertAdjacentHTML("afterend",n(a));a=document.getElementById(l());a.addEventListener&&a.addEventListener("change",h);a.attachEvent&&a.attachEvent("onchange",h)}}}();(jQuery);


/**
 * related_posts
 *
 */
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();var thumburl=new Array();
function related_results_labels_thumbs(json)
{
    for(var i=0;
        i<json.feed.entry.length;
        i++)
    {
        var entry=json.feed.entry[i];
        relatedTitles[relatedTitlesNum]=entry.title.$t;
        try
        {
            thumburl[relatedTitlesNum]=entry.gform_foot.url
        }
        catch(error)
        {
            s=entry.content.$t;
            a=s.indexOf("<img");
            b=s.indexOf("src=\"",a);
            c=s.indexOf("\"",b+5);
            d=s.substr(b+5,c-b-5);
            if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
            {
                thumburl[relatedTitlesNum]=d
            }
            else thumburl[relatedTitlesNum]='http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png'
        }
        if(relatedTitles[relatedTitlesNum].length>35)relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...";
        for(var k=0;
            k<entry.link.length;
            k++)
        {
            if(entry.link[k].rel=='alternate')
            {
                relatedUrls[relatedTitlesNum]=entry.link[k].href;
                relatedTitlesNum++
            }
        }
    }
}
function removeRelatedDuplicates_thumbs()
{
    var tmp=new Array(0);
    var tmp2=new Array(0);
    var tmp3=new Array(0);
    for(var i=0;
        i<relatedUrls.length;
        i++)
    {
        if(!contains_thumbs(tmp,relatedUrls[i]))
        {
            tmp.length+=1;
            tmp[tmp.length-1]=relatedUrls[i];
            tmp2.length+=1;
            tmp3.length+=1;
            tmp2[tmp2.length-1]=relatedTitles[i];
            tmp3[tmp3.length-1]=thumburl[i]
        }
    }
    relatedTitles=tmp2;
    relatedUrls=tmp;
    thumburl=tmp3
}
function contains_thumbs(a,e)
{
    for(var j=0;
        j<a.length;
        j++)if(a[j]==e)return true;
    return false
}
function printRelatedLabels_thumbs()
{
    for(var i=0;
        i<relatedUrls.length;
        i++)
    {
        if((relatedUrls[i]==currentposturl)||(!(relatedTitles[i])))
        {
            relatedUrls.splice(i,1);
            relatedTitles.splice(i,1);
            thumburl.splice(i,1);
            i--
        }
    }
    var r=Math.floor((relatedTitles.length-1)*Math.random());
    var i=0;
    if(relatedTitles.length>0)document.write('<h1>'+relatedpoststitle+'</h1>');
    document.write('<div style="clear: both;"/>');
    while(i<relatedTitles.length&&i<20&&i<maxresults)
    {
        document.write('<a class="related-item');
        if(i!=0)document.write('"');
        else document.write('"');
        document.write(' href="'+relatedUrls[r]+'"><img class="related_img" src="'+thumburl[r]+'"/><br/><div class="related_desc">'+relatedTitles[r]+'</div></a>');
        if(r<relatedTitles.length-1)
        {
            r++
        }
        else
        {
            r=0
        }
        i++
    }
    document.write('</div>');
    relatedUrls.splice(0,relatedUrls.length);
    thumburl.splice(0,thumburl.length);
    relatedTitles.splice(0,relatedTitles.length)
}
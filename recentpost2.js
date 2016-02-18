function showlatestpostswiththumbs(json) {
    document.write('<ul class="recent-posts-container">');
    for (var i = 0; i < posts_no; i++) {
        var entry = json.feed.entry[i];
        var posttitle = entry.title.$t;
        var postsurl;
        if (i == json.feed.entry.length) break;
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
                var commentstext = entry.link[k].title;
                var commentsurl = entry.link[k].href;
            }
            if (entry.link[k].rel == 'alternate') {
                postsurl = entry.link[k].href;
                break;
            }
        }
        var recenthumb;
        try {
            recenthumb = entry.media$thumbnail.url;
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                 if(d.length>=1) {  
                    var n = d.indexOf("http://res.cloudinary.com/staticcontenthost/image/upload/");
                    if(n >-1) {   				
                        recenthumb=d.replace('http://res.cloudinary.com/staticcontenthost/image/upload/', 'http://res.cloudinary.com/staticcontenthost/image/upload/c_scale,fl_lossy.splice,w_58,h_58,c_fill/');   
                    } //put code for picassa thumbnails
                    else 
                    recenthumb = d; 
                 } 
            } else recenthumb = 'http://2.bp.blogspot.com/-C3Mo0iKKiSw/VGdK808U7rI/AAAAAAAAAmI/W7Ae_dsEVAE/s1600/no-thumb.png';
        }
        var postdate = entry.published.$t;
        var showyear = postdate.substring(0, 4);
        var showmonth = postdate.substring(5, 7);
        var showday = postdate.substring(8, 10);
        var monthnames = new Array();
        monthnames[1] = "January";
        monthnames[2] = "Febbruary";
        monthnames[3] = "March";
        monthnames[4] = "April";
        monthnames[5] = "May";
        monthnames[6] = "June";
        monthnames[7] = "July";
        monthnames[8] = "August";
        monthnames[9] = "September";
        monthnames[10] = "October";
        monthnames[11] = "November";
        monthnames[12] = "December";
        document.write('<li class="recent-posts-list">');
        if (posts_date == true) document.write('<abbr class="timeago" title="'+ postdate+'">'+monthnames[parseInt(showmonth, 10)] + ' ' + showday + ', ' + showyear+'</abbr>');
        if (showpoststhumbs == true)
        document.write('<a href="' + postsurl + '"><img class="recent-post-thumb" src="' + recenthumb + '"/></a>');
        document.write('<div class="recent-post-title"><a href="' + postsurl + '" target ="_top">' + posttitle + '</a></div>');
        var posts_details = '';
        var flag = 0;
        document.write('<div class="recent-posts-details">');
        if (showcommentslink == true) {
            if (flag == 1) {
                posts_details = posts_details + ' <br> ';
            }
            if (commentstext == '1 Comments') commentstext = '1 Comment';
            if (commentstext == '0 Comments') commentstext = 'No Comments';
            commentstext = '<a href="' + commentsurl + '" target ="_top">' + commentstext + '</a>';
            posts_details = posts_details + commentstext;
            flag = 1;;
        }
        if (readmorelink == true) {
            if (flag == 1) posts_details = posts_details + ' | ';
            posts_details = posts_details + '<a class="readmorelink" href="' + postsurl + '" class="url" target ="_top">Read more</a>';
            flag = 1;;
        }
        document.write(posts_details);
        document.write('</div>');
        document.write('</li>');
    }
    document.write('</ul>');
}

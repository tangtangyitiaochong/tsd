//helppane.js Version 2.6
var H_URL_BASE='',H_TOPIC='',H_KEY='',L_H_TEXT='',H_FILTER='',H_BRAND='',bSearch=false;
var H_CONFIG='',L_H_APP='',L_CONTACTUS_URL='';
var H_BURL='helppane.htm',H_TARG='',H_VER='2.6',v4='',v3='';
var h_win,H_OTHER='',bResize=true,bOptNoResize=false;
var oW,oH,oX,oY;
var ph_delayInterval = 100;
var ph_maxRetries = 100;
var ph_retries = ph_maxRetries;
function DoHelp(iNm) {
	if (!oW) {
		oW = document.body.clientWidth;
		oH = document.body.clientHeight;
		oX = window.screenLeft;
		oY = window.screenTop;
	}
	var sQP,W,H,sWD,sc=screen.width,bIE4PC;
	var agent = navigator.userAgent.toLowerCase();
	var app = navigator.appName.toLowerCase();
	var agent_isMac = (agent.indexOf('mac') > -1);
	var agent_isIE = (agent.indexOf("msie")>-1 && parseInt(navigator.appVersion.substring(0,1))>=4);
	var agent_isMSN = false, vi = agent.indexOf('msn '), agent_isMacMSN = false;

	if (vi > -1) {
		agent_isMSN = agent.substring(vi+4);
		agent_isMSN = parseFloat(agent_isMSN.substring(0,agent_isMSN.indexOf(";")));
		agent_isMSN = (agent_isMSN != NaN && agent_isMSN >= 6)
	}
	agent_isMacMSN = agent.indexOf('ppc mac os x') > -1  && agent.indexOf('msn explorer') > -1 ;
        sQP =(H_BURL.indexOf("?")>-1) ? "&":"?";		
	sQP+='H_VER='+H_VER+'&v4='+v4+'&v3='+escape(v3);
	sQP+='&INI='+H_CONFIG;
        if (agent_isMSN && !agent_isMacMSN){
	sQP+='&H_APP='+encodeURIComponent(L_H_APP);	
	sQP+=(bSearch) ? '&SEARCHTERM='+escape(H_KEY)+'&S_TEXT='+encodeURIComponent(L_H_TEXT):'&TOPIC='+H_TOPIC;
        } else {
	sQP+='&H_APP='+escape(L_H_APP);	
	sQP+=(bSearch) ? '&SEARCHTERM='+escape(H_KEY)+'&S_TEXT='+escape(L_H_TEXT):'&TOPIC='+H_TOPIC;
        }
	if (H_BRAND!='') sQP+='&BrandID='+H_BRAND;
	if (H_FILTER!='') sQP+='&Filter='+H_FILTER;
	if (L_CONTACTUS_URL!='') sQP+='&ContactUS='+L_CONTACTUS_URL; 
	if (typeof(v1)!="undefined") sQP+='&v1='+escape(v1);
	else sQP+='&v1='+escape(document.location.protocol + "//" + document.location.hostname);
 	sQP+='&v2='+escape(document.location.search);
	if (typeof(H_CONFIG) != "undefined" && (self.name == null || self.name == "" || self.name == "msnMain")) self.name = H_CONFIG.substring(0,H_CONFIG.indexOf("."));
	sQP+='&tmt='+escape(window.name);
	if (sc<=800) sQP+="&sp=1";
	if (bOptNoResize) sQP+='&bOptNoResize=1';
	// opener resize data for MAP - csand:13May05
	sQP+='&od='+!bOptNoResize+','+oW+','+oH+','+oX+','+oY
	
	  
	W=230;
	H=(agent.indexOf("windows")>0 && agent.indexOf("aol")>0) ? screen.availHeight-window.screenTop-22:screen.availHeight//*AOL
	sWD="toolbar=0,status=0,menubar=0,resizable=1,top=0,width="+W;
	
	if (agent_isMSN){
		window.external.showHelpPane(H_URL_BASE+'/frameset.asp'+sQP,W)
	}		
	else if (agent.indexOf('webtv')>0 || agent.indexOf('msn companion')>0 || agent.indexOf('stb')>0 || (agent.indexOf('ppc')>0 && agent.indexOf('windows ce')>0)){
                  document.location = H_URL_BASE+'/frameset.asp'+sQP
	}
	else if (app.indexOf('netscape')>-1 && navigator.appVersion.indexOf('4.')>-1) {
	    var fw;
		if (agent_isMac) {
			sWD+=",height="+(H-38)+",left="+(sc-W-16);fw=30;
		} else {
			sWD+=",height="+(H-30)+",left="+(sc-W-12);fw=12;
		}
		if (!bOptNoResize) top.window.resizeTo(screen.availWidth - W - (window.outerWidth - window.innerWidth)-fw, screen.availHeight - (window.outerHeight-window.innerHeight));
		if (!bOptNoResize) top.window.moveTo(0,0);
		h_win=window.open(H_URL_BASE+'/frameset.asp'+sQP,'_help',sWD);
	}	
	else if (agent.indexOf("opera")>-1) {
		sWD+=",height="+H+",left="+(sc-W - (agent_isMac ? 5 : 0));
		if (!bOptNoResize) window.resizeTo(screen.availWidth - W - (agent_isMac ? 20 : 0), screen.availHeight);
		if (!bOptNoResize) window.moveTo(0,0);
		h_win=window.open(H_URL_BASE+'/frameset.asp'+sQP,'_help',sWD);
	} else if (agent.indexOf("aol")>-1) {
	    sWD+=",height="+(H-115);
		window.open(H_URL_BASE+'/frameset.asp'+sQP,'_help',sWD);
	} else if (agent_isIE || agent.indexOf('netscape')>-1 || agent.indexOf('mozilla')>-1) {
		sWD+=",height="+H+",left="+(sc-W);
		bResize=false;
		bIE4PC = agent.indexOf("msie 4")>0;
		if (H_TARG=='') H_TARG = (bIE4PC)?'_help26':'_help';
		if (iNm != null) H_TARG+=iNm;
		if (bIE4PC) {
			window.open(H_BURL+sQP,H_TARG,sWD);
		}
		else {
            try {
              h_win=window.open(H_BURL+sQP,H_TARG,sWD);
              if (null != h_win)
              {   /* We use setTimeout to deal with a race condition where opened window uses document.domain */
                  var fn = "set_window_restore_coords(" + oW + ", " + oH + ", " + oX + ", " + oY+ ")";
                  window.setTimeout(fn, ph_delayInterval);
              }
            }
            catch(exception){
            }
        } 
        if (h_win && !agent_isMac && app.indexOf("netscape")<0) h_win.opener=self;
	}else {window.open(H_URL_BASE+'/frameset.asp'+sQP,'_help', sWD);}
}

function set_window_restore_coords(w, h, x, y)
{
    --ph_retries;
    try
    {
        if (h_win != null)
        {
            if (h_win.document.readyState == "complete")
            {
                h_win.oW = w
		        h_win.oH = h;			
		        h_win.oX = x;
		        h_win.oY = y;
                ph_retries = ph_maxRetries;
            }
            else if(ph_retries > 0)
            {
                var fn = "set_window_restore_coords(" + w + ", " + h + ", " + x + ", " + y + ")";
                setTimeout(fn, ph_delayInterval);
            }
        }
    }
    catch(exception)
    {   /* This exception is raised if the target window has not set document.domain yet */
        if (ph_retries > 0)
        {
            var fn = "set_window_restore_coords(" + w + ", " + h + ", " + x + ", " + y + ")";
            setTimeout(fn, ph_delayInterval);
        }
    }  
}


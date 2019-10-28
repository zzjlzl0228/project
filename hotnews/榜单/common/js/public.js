var L = new Array();
L["system_tips"] = "系统提示";
L["ok"] = "确 定";
L["cancel"] = "取 消";
L["upload"] = "上 传";
L["uploading"] = "上传中..";
L["upload_file"] = "上传文件";
L["upload_img"] = "上传图片";
L["allow"] = "限制为:";
L["preview_img"] = "图片预览";
L["choose_img"] = "选择图片";
L["width"] = "宽度";
L["height"] = "高度";
L["up_local"] = "本地图片";
L["up_remote"] = "网络图片";
L["type_imgurl"] = "请填写图片网址";
L["choose_file"] = "请选择文件";
L["choose_item"] = "选择信息";
L["dialog_user"] = "会员{V0}资料";
L["empty_img"] = "不可预览，图片地址为空";
L["confirm_del"] = "确定要删除吗？此操作将不可撤销";
L["type_category"] = "请输入分类名称或简称，例如：计算机";
L["related_found"] = "为您找到以下相关分类，请选择：";
L["related_not_found"] = "未找到相关分类，请调整名称";
L["type_valid_filepath"] = "请输入正确的文件路径";
L["wysiwyg_mode"] = "请切换到设计模式";
L["dialog_close"] = "关闭[快捷键Esc]";
L["tpl_add"] = "新建模板";
L["tpl_edit"] = "修改模板";
L["Sun"] = "日";
L["Mon"] = "一";
L["Tue"] = "二";
L["Wed"] = "三";
L["Thu"] = "四";
L["Fri"] = "五";
L["Sat"] = "六";
L["prev_year"] = "前一年";
L["next_year"] = "后一年";
L["prev_month"] = "上一月";
L["next_month"] = "下一月";
L["str_delete"] = "删除";
L["str_captcha"] = "点击显示";
L["fck_zoom"] = "点击增加高度 右击缩小高度";
L["data_recovery"] = "数据恢复";
L["save_draft"] = "暂存草稿";
L["if_cover_data"] = "发现 {V0} 保存的数据，是否覆盖当前数据？";
L["no_data"] = "抱歉 未找到保存的数据";
L["at_least_10_letters"] = "请至少输入10个字，当前已输入{V0}字";
L["stop_auto_save"] = "系统会自动保存草稿，此操作将中止系统自动保存功能，确定要继续吗？";
L["draft_auto_saved"] = "{V0}点{V1}分{V2}秒 系统自动保存了草稿";
L["draft_saved"] = "草稿已保存";
L["stop_save"] = "关闭保存";
L["draft_save_stopped"] = "草稿保存已停止";
L["start_save"] = "开启保存";
L["upload_attach"] = "插入附件";
L["tip_image"] = "提示：您的浏览器支持直接拖拽本地图片至编辑器或者直接Ctrl+C粘贴QQ截图里的图像，赶快试试吧！";
L["tip_know"] = "我知道了";
L["click_open"] = "点击打开原图";
L["keyword_value"] = "输入关键词";
L["keyword_message"] = "请输入关键词";
L["Sunday"] = "星期日";
L["Monday"] = "星期一";
L["Tuesday"] = "星期二";
L["Wednesday"] = "星期三";
L["Thursday"] = "星期四";
L["Friday"] = "星期五";
L["Saturday"] = "星期六";
L["show_date"] = "今天是 {V0}月{V1}日 {V2}";
L["close_letter"] = "收起";
L["last_page"] = "已至最后一页";
L["popular_search_terms"] = "热门搜索：";
L["search_tips_close"] = "关闭";
L["chrome_fav_tip"] = "请按快捷键Ctrl+D收藏本页，谢谢";
L["iso_tips_video"] = "暂不支持此视频，请在电脑上观看";
L["max_mode"] = "最多可选{V0}种经营模式";
L["max_cate"] = "最多可添加{V0}个分类";
L["choose_category"] = "请选择分类";
L["category_chosen"] = "已添加过此分类";
L["sync_sina"] = "同步到新浪微博";
L["sync_qq"] = "同步到腾讯微博";
L["sync_qzone"] = "同步到QQ空间";
L["sync_login_sina"] = "您还没有登录新浪微博或者登录已经失效，是否现在登录?";
L["sync_login_qq"] = "您还没有QQ登录或者QQ登录已经失效，是否现在登录?";
var DTPath = "http://www.10pinping.com/";
var SKPath = "http://www.10pinping.com/skin/10/";
var MEPath = "http://www.10pinping.com/member/";
var EXPath = "http://www.10pinping.com/extend/";
var CKDomain = ".10pinping.com";
var CKPath = "/";
var CKPrex = "myb_";
var UA = navigator.userAgent.toLowerCase();
var isIE = (document.all && window.ActiveXObject && !window.opera) ? true : false;
var isGecko = UA.indexOf("webkit") != -1;
var DMURL = document.location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + "/";
var AJPath = (DTPath.indexOf("://") == -1 ? DTPath : (DTPath.indexOf(DMURL) == -1 ? DMURL : DTPath)) + "ajax.php";
var isMobile = false;
if ((UA.indexOf("phone") != -1 || UA.indexOf("mobile") != -1 || UA.indexOf("android") != -1 || UA.indexOf("ipod") != -1) &&
	get_cookie("mobile") != "pc" && UA.indexOf("ipad") == -1) {
	isMobile = true
}
if (isIE) {
	try {
		document.execCommand("BackgroundImageCache", false, true)
	} catch (e) {}
}
var xmlHttp;
var Try = {
	these: function() {
		var returnValue;
		for (var i = 0; i < arguments.length; i++) {
			var lambda = arguments[i];
			try {
				returnValue = lambda();
				break
			} catch (e) {}
		}
		return returnValue
	}
};

function makeRequest(queryString, php, func, method) {
	xmlHttp = Try.these(function() {
		return new XMLHttpRequest()
	}, function() {
		return new ActiveXObject("Msxml2.XMLHTTP")
	}, function() {
		return new ActiveXObject("Microsoft.XMLHTTP")
	});
	method = (typeof method == "undefined") ? "post" : "get";
	if (func) {
		xmlHttp.onreadystatechange = eval(func)
	}
	xmlHttp.open(method, method == "post" ? php : php + "?" + queryString, true);
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send(method == "post" ? queryString : null)
}

function Dd(i) {
	return document.getElementById(i)
}

function Ds(i) {
	Dd(i).style.display = ""
}

function Dh(i) {
	Dd(i).style.display = "none"
}

function Dsh(i) {
	Dd(i).style.display = Dd(i).style.display == "none" ? "" : "none"
}

function Df(i) {
	Dd(i).focus()
}
var tID = 0;

function Tab(ID) {
	var tTab = Dd("Tab" + tID);
	var tTabs = Dd("Tabs" + tID);
	var Tab = Dd("Tab" + ID);
	var Tabs = Dd("Tabs" + ID);
	if (ID != tID) {
		tTab.className = "tab";
		Tab.className = "tab_on";
		tTabs.style.display = "none";
		Tabs.style.display = "";
		tID = ID;
		try {
			Dd("tab").value = ID
		} catch (e) {}
	}
}

function checkall(f, t) {
	var t = t ? t : 1;
	for (var i = 0; i < f.elements.length; i++) {
		var e = f.elements[i];
		if (e.type != "checkbox") {
			continue
		}
		if (t == 1) {
			e.checked = e.checked ? false : true
		}
		if (t == 2) {
			e.checked = true
		}
		if (t == 3) {
			e.checked = false
		}
	}
}

function stoinp(s, i, p) {
	if (Dd(i).value) {
		var p = p ? p : ",";
		var a = Dd(i).value.split(p);
		for (var j = 0; j < a.length; j++) {
			if (s == a[j]) {
				return
			}
		}
		Dd(i).value += p + s
	} else {
		Dd(i).value = s
	}
}

function select_op(i, v) {
	var o = Dd(i);
	for (var i = 0; i < o.options.length; i++) {
		if (o.options[i].value == v) {
			o.options[i].selected = true;
			break
		}
	}
}

function Dmsg(str, i, s, t) {
	var t = t ? t : 5000;
	var s = s ? true : false;
	try {
		if (s) {
			window.scrollTo(0, 0)
		}
		Dd("d" + i).innerHTML = '<img src="' + SKPath + 'image/check_error.gif" width="12" height="12" align="absmiddle"/> ' +
			str;
		Dd(i).focus()
	} catch (e) {}
	window.setTimeout(function() {
		Dd("d" + i).innerHTML = ""
	}, t)
}

function Inner(i, s) {
	try {
		Dd(i).innerHTML = s
	} catch (e) {}
}

function InnerTBD(i, s) {
	try {
		Dd(i).innerHTML = s
	} catch (e) {
		Dd(i).parentNode.outerHTML = Dd(i).parentNode.outerHTML.replace(Dd(i).innerHTML, s)
	}
}

function Go(u) {
	window.location = u
}

function confirmURI(m, f) {
	if (confirm(m)) {
		Go(f)
	}
}

function showmsg(m, t) {
	var t = t ? t : 5000;
	var s = m.indexOf(L["str_delete"]) != -1 ? "delete" : "ok";
	try {
		Dd("msgbox").style.display = "";
		Dd("msgbox").innerHTML = m;
		window.setTimeout("closemsg();", t)
	} catch (e) {}
}

function closemsg() {
	try {
		Dd("msgbox").innerHTML = "";
		Dd("msgbox").style.display = "none"
	} catch (e) {}
}

function sound(f) {
	return '<div style="float:left;"><embed src="' + DTPath + "file/flash/" + f +
		'.swf" quality="high" type="application/x-shockwave-flash" height="0" width="0" hidden="true"/></div>'
}

function Eh(t) {
	var t = t ? t : "select";
	if (isIE) {
		var arVersion = navigator.appVersion.split("MSIE");
		var IEversion = parseFloat(arVersion[1]);
		if (IEversion >= 7 || IEversion < 5) {
			return
		}
		var ss = document.body.getElementsByTagName(t);
		for (var i = 0; i < ss.length; i++) {
			ss[i].style.visibility = "hidden"
		}
	}
}

function Es(t) {
	var t = t ? t : "select";
	if (isIE) {
		var arVersion = navigator.appVersion.split("MSIE");
		var IEversion = parseFloat(arVersion[1]);
		if (IEversion >= 7 || IEversion < 5) {
			return
		}
		var ss = document.body.getElementsByTagName(t);
		for (var i = 0; i < ss.length; i++) {
			ss[i].style.visibility = "visible"
		}
	}
}

function FCKLen(i) {
	var i = i ? i : "content";
	var o = FCKeditorAPI.GetInstance(i);
	var d = o.EditorDocument;
	var l;
	if (document.all) {
		l = d.body.innerText.length
	} else {
		var r = d.createRange();
		r.selectNodeContents(d.body);
		l = r.toString().length
	}
	return l
}

function FCKXHTML(i) {
	var i = i ? i : "content";
	return FCKeditorAPI.GetInstance(i).GetXHTML(true)
}

function Tb(d, t, p, c) {
	for (var i = 1; i <= t; i++) {
		if (d == i) {
			Dd(p + "_t_" + i).className = c + "_2";
			Ds(p + "_c_" + i)
		} else {
			Dd(p + "_t_" + i).className = c + "_1";
			Dh(p + "_c_" + i)
		}
	}
}

function is_captcha(v) {
	if (v == L["str_captcha"]) {
		return false
	}
	if (v.match(/^[a-z0-9A-Z]{1,}$/)) {
		return v.match(/^[a-z0-9A-Z]{4,}$/)
	} else {
		return v.length > 1
	}
}

function ext(v) {
	return v.substring(v.lastIndexOf(".") + 1, v.length).toLowerCase()
}

function PushNew() {
	$("#bc_push").remove();
	s = document.createElement("script");
	s.type = "text/javascript";
	s.id = "bc_push";
	s.src = DTPath + "api/push.js.php?refresh=" + Math.random() + ".js";
	document.body.appendChild(s)
}

function set_cookie(n, v, d) {
	var e = "";
	var f = d ? d : 365;
	e = new Date((new Date()).getTime() + f * 86400000);
	e = "; expires=" + e.toGMTString();
	document.cookie = CKPrex + n + "=" + v + ((CKPath == "") ? "" : ("; path=" + CKPath)) + ((CKDomain == "") ? "" : (
		"; domain=" + CKDomain)) + e
}

function get_cookie(n) {
	var v = "";
	var s = CKPrex + n + "=";
	if (document.cookie.length > 0) {
		o = document.cookie.indexOf(s);
		if (o != -1) {
			o += s.length;
			end = document.cookie.indexOf(";", o);
			if (end == -1) {
				end = document.cookie.length
			}
			v = unescape(document.cookie.substring(o, end))
		}
	}
	return v
}

function del_cookie(n) {
	var e = new Date((new Date()).getTime() - 1);
	e = "; expires=" + e.toGMTString();
	document.cookie = CKPrex + n + "=" + escape("") + ";path=/" + e
}

function substr_count(str, exp) {
	if (str == "") {
		return 0
	}
	var s = str.split(exp);
	return s.length - 1
}

function lang(s, a) {
	for (var i = 0; i < a.length; i++) {
		s = s.replace("{V" + i + "}", a[i])
	}
	return s
}
document.onkeydown = function(e) {
	var k = typeof e == "undefined" ? event.keyCode : e.keyCode;
	if (k == 37) {
		try {
			if (Dd("bc_previous").value && typeof document.activeElement.name == "undefined") {
				Go(Dd("bc_previous").value)
			}
		} catch (e) {}
	} else {
		if (k == 39) {
			try {
				if (Dd("bc_next").value && typeof document.activeElement.name == "undefined") {
					Go(Dd("bc_next").value)
				}
			} catch (e) {}
		} else {
			if (k == 38 || k == 40 || k == 13) {
				try {
					if (Dd("search_tips").style.display != "none" || Dd("search_tips").innerHTML != "") {
						SCTip(k);
						return false
					}
				} catch (e) {}
			}
		}
	}
};

function showDialog(reg) {
	$('.menu_list').hide();
	var w = 321;
	var u = "/member/reglogin.php?reg=" + reg;
	var c = '<iframe src="' + u + '" id="iframe" width="' + w +
		'" height="365" border="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" framespacing="0" frameborder="0" scrolling="no"></iframe>';
	var s = 0;
	var px = 0;
	var py = 0;
	var body = document.documentElement || document.body;
	if (isGecko) {
		body = document.body
	}
	var cw = body.clientWidth;
	var ch = body.clientHeight;
	var bsw = body.scrollWidth;
	var bsh = body.scrollHeight;
	var bw = parseInt((bsw < cw) ? cw : bsw);
	var bh = parseInt((bsh < ch) ? ch : bsh);
	if (!s) {
		var LoginDialogBg = document.createElement("div");
		with(LoginDialogBg.style) {
			zIndex = 998;
			position = "absolute";
			width = "100%";
			height = bh + "px";
			overflow = "hidden";
			top = 0;
			left = 0;
			border = "0px";
			if (isIE) {
				filter = " Alpha(Opacity=50)"
			} else {
				opacity = 50 / 100
			}
		}
		LoginDialogBg.id = "LoginDialogBg";
		document.body.appendChild(LoginDialogBg)
	}
	var sl = px ? px : body.scrollLeft + parseInt((cw - w) / 2);
	var st = py ? py : body.scrollTop + parseInt(ch / 2) - 100;
	var LoginDialog = document.createElement("div");
	with(LoginDialog.style) {
		zIndex = 10000;
		position = "fixed";
		webkitTransform = "translateX(-50%) translateY(-50%)";
		transform = "translateX(-50%) translateY(-50%)";
		width = w + "px";
		left = "50%";
		top = "50%";
		display = "none"
	}
	LoginDialog.id = "LoginDialog";
	document.body.appendChild(LoginDialog);
	Dd("LoginDialog").innerHTML = c;
	Eh();
	$("#LoginDialog").show(1, function() {
		st = py ? py : body.scrollTop + parseInt(ch / 2) - parseInt($("#LoginDialog").height() / 2)
	})
};

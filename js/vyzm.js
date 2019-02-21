//------------使用方式---------------
//
//		sjverify( 放验证码元素的id,切换图片的元素的id,对象 obj)
//		对象obj参数（选填）
//		{
//			"nbe":4, //-------------字符个数
//			"typ":1,	//-----------1代表纯字母，2代表数字字母
//			"windt":80,	//-------------该元素的宽为80，不带px
//			"heith":30,	//-------------该元素高度为30，不带px
//			"size":16	//---------------字体大小，不带px
//		}
//	
//		图片的验证码获得，图片元素.getAttribute("yzm");
//

function sjverify(domid,qhid,obj){
	//domid是验证码放入的元素的id
	var dom=document.getElementById(domid);
	dom.innerHTML="";
	console.log(dom);
	var qieh=document.getElementById(qhid);
	console.log(qieh)
	//设置默认框高
	width=80;
	height=30;
	//设置默认个数为4，纯字母
	var nbe=4;
	var type=1;
	//字体大小
	var size=16;
	//对象遍历
	for( e in obj){
		//判断对象nbe的值是否存在，负数取绝对值
		if(e=="nbe"){
			//判断是否为数字
			if(Number(Math.abs(obj.nbe))){
				nbe=obj.nbe;
			}
		}
		//判断对象type的值是否存在
		if(e=="type"){
			//判断是否为数字，负数取绝对值
			if(Number(Math.abs(obj.type))){
				type=obj.type;
			}
		}
		//判断宽高
		if(e=="width"){
			//判断是否为数字，负数取绝对值
			if(Number(Math.abs(obj.width))){
				width=obj.width;
			}
		}
		if(e=="height"){
			//判断是否为数字，负数取绝对值
			if(Number(Math.abs(obj.height))){
				height=obj.height;
			}
		}
		//判断字体大小
		if(e=="size"){
			//判断是否为数字，负数取绝对值
			if(Number(Math.abs(obj.size))){
				size=obj.size;
			}
		}

	}
	//所有字母字符或字母和数字，判断type
	if(type==1){
		var zmzf="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,n,O,P,Q,R,S,T,U,V,W,X,Y,Z";
	}else{
		var zmzf="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,n,O,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
	}
	//变成数组
	var zmarr=zmzf.split(",");
	
	//创建空的数组，用于接收nbe个随机数，获取的是nbe个随机下标
	var szbrr=[]
	for(var i=0;i<nbe;i++){
		szbrr.push(Math.floor(Math.random()*zmarr.length));
	}
	//创建空数组，获取随机验证码字符
	var zmcrr=[]
	for(var i=0;i<szbrr.length;i++){
		zmcrr.push(zmarr[szbrr[i]]) ;
	}
	//不可选取的字符串
	var bxq="moz-user-select: -moz-none;-moz-user-select: none;-o-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;";
	//开始生成
	dom.style="display:block; width: "+width+"px; height: "+height+"px;font-size:"+size+"px;text-align: center;line-height: "+height+"px;cursor: pointer;"+bxq;
	var yzm=""
	for(var i=0;i<zmcrr.length;i++){
		var i1=document.createElement("i");
		if(Math.random()*100>50){
			var n=1;
		}else{
			var n=-1;
		}
		
		i1.innerHTML=zmcrr[i];
		i1.style="color: #"+Math.random().toString().slice(2,8)+";font-style: normal;display: inline-block;margin-left:"+(width/nbe/4)+"px;";
		i1.style.transform="rotateZ("+Math.random()*30*n+"deg)"
		dom.appendChild(i1);
		yzm+=zmcrr[i];
	}
	
	//点击该元素刷新
	dom.onclick=function(){
		sjverify(domid,qhid,obj);
		
	}
	
	qieh.onclick=function(){
		sjverify(domid,qhid,obj);
	}
	dom.setAttribute("yzm",yzm);
}




























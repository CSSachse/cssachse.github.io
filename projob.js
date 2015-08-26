/*	TAG ENUMS
	In tags, the following values may be used to represent the following:
	Coding:			1
	Web design:		2
	3D printing:	3
	Hardware:		4
	Miscellaneous:	5
*/
/*	OPTION ENUMS
	For each option, a corresponding element must be placed in availoptions at the same position.
	Options are written out in the order represented in availoptions
	Direct link:	1
	Github link:	2
	Blog link:		3
	Expand/misc js:	4
*/


function projobj(projectname,availoptions,optionurls,imageurl,description,tags){
	this.name=projectname;
	this.optlist=availableoptions;
	this.opturls=optionurls;
	this.imgurl=imageurl;
	this.descr=description;
	this.toHTML=function(){
		//generate links thingy
		linksting="";
		for(i=0;i<optlist.length;i+=1){
			linksting+="<a class='optting projopt"+optlist[i]+"' href='"+opturls[i]+"'></a>";
		}
		return "<div class='projobj' style='background-image:url("+imgurl+");' ><div class='projobjstuff'>"+descr+"<div class='linksa'><a>linki</a><a>linki</a><a>linki</a></div></div></div>";
	}
}
projobjlist=[
new projobj("fireworks",[1],[],"/resources/project_pics/fireworks.png","Basic fireworks animation created for the new year 2012/2013",[1,2])
]
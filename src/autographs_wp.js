window.$ = window.jQuery; //help me
function genSchedule(schedule) {
	function getProperty(obj,property) {
		//this literally hurts to type
		return eval(obj+"\x5b"+property+"\x5d");
	}
	var str = "";
	for(var day in schedule) {
		str += "\x3cb>"+day+"\x3c/b>: "+getProperty("schedule","day")+"\x3cbr />";
	}
	return str;
}

function getDisplayName(name) {
	if(name.displayName) {
		return name.displayName;
	}
	return name.name;
}

function genAutographs(data) {
	function getProperty(obj,property) {
		//oh no
		return eval(obj+"\x5b"+property+"\x5d");
	}
	var html = "";
	for(var i = 0; i < data.length; i++) {
		html += '\x3cdiv class="autograph-guest">\x3cdiv style="display:table-cell;vertical-align:middle;width:350px;height:350px;">'+
		'\x3cdiv class="autograph-cover">'+
			'\x3cdiv class="autograph-guest-img">\x3cimg src="'+getProperty("data","i").img+'" alt="'+getProperty("data","i").name+'" />\x3c/div>'+
			'\x3cdiv class="autograph-guest-name">'+getProperty("data","i").name+'\x3c/div>'+
		'\x3c/div>'+
		'\x3cdiv class="autograph-schedule">'+
			'\x3cdiv class="autograph-guest-name">'+getDisplayName(getProperty("data","i"))+'\x3c/div>\x3cbr />'+
			genSchedule(getProperty("data","i").schedule)+
		'\x3c/div>'+
		'\x3c/div>\x3c/div>';
	}
	$("#autographArea").html(html);
	$(".autograph-cover").click(function(event) {
		var $this = $(this);
		$this.fadeOut('fast',function() {
			$this.next().fadeIn('fast');
		});
	});
	$(".autograph-schedule").click(function(event) {
		var $this = $(this);
		$this.fadeOut('fast',function() {
			$this.prev().fadeIn('fast');
		});
	});
}
$(document).ready(function() {
	genAutographs(/*INSERT DATA HERE*/);
});

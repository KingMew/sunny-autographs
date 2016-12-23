//Dang I wish I could use me some react
function genSchedule(schedule) {
	var str = "";
	for(var day in schedule) {
		str += "<b>"+day+"</b>: "+schedule[day]+"<br />";
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
	var html = "";
	for(var i = 0; i < data.length; i++) {
		html += '<div class="autograph-guest"><div style="display:table-cell;vertical-align:middle;width:350px;height:350px;">'+
		'<div class="autograph-cover">'+
			'<div class="autograph-guest-img"><img src="'+data[i].img+'" alt="'+data[i].name+'" /></div>'+
			'<div class="autograph-guest-name">'+data[i].name+'</div>'+
		'</div>'+
		'<div class="autograph-schedule">'+
			'<div class="autograph-guest-name">'+getDisplayName(data[i])+'</div><br />'+
			genSchedule(data[i].schedule)+
		'</div>'+
		'</div></div>';
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

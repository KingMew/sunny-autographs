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
	genAutographs(Array(
		{
			name: "Akemi Kanda",
			img: "http://www.taiyoucon.com/wp-content/uploads/2016/10/Akemi-Kanda.jpg",
			schedule: {
				Friday: "4pm - 5pm",
				Saturday: "1pm - 2pm"
			}
		},
		{
			name: "Clifford Chapin",
			img: "http://www.taiyoucon.com/wp-content/uploads/2016/06/cliff.jpg",
			schedule: {
				Friday: "3pm - 3pm",
				Saturday: "3pm - 4pm",
				Sunday: "12pm - 1pm"
			}
		},
		{
			name: "Lotus Juice",
			displayName: "Lotus Juice &amp; Shihoko Hirata",
			img: "http://www.taiyoucon.com/wp-content/uploads/2016/10/Lotus-Juice.jpg",
			schedule: {
				Friday: "TBA",
				Saturday: "4pm - 5pm",
				Sunday: "3pm - 4pm"
			}
		},
		{
			name: "Shihoko Hirata",
			displayName: "Lotus Juice &amp; Shihoko Hirata",
			img: "http://www.taiyoucon.com/wp-content/uploads/2016/10/shihoko.jpg",
			schedule: {
				Friday: "TBA",
				Saturday: "4pm - 5pm",
				Sunday: "3pm - 4pm"
			}
		},
		{
			name: "TeddyLoid",
			img: "http://www.taiyoucon.com/wp-content/uploads/2016/11/Teddyloid.jpg",
			schedule: {
				Friday: "TBA",
				Saturday: "5pm - 6pm",
				Sunday: "1pm - 2pm"
			}
		},
		{
			name: "Yuko Sanpei",
			img: "http://www.taiyoucon.com/wp-content/uploads/2016/11/Yuko-Sanpei-thumb.jpg",
			schedule: {
				Friday: "5pm - 6pm",
				Saturday: "2pm - 3pm",
				Sunday: "2pm - 3pm"
			}
		}
	));
});

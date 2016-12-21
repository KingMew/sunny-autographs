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
	genAutographs([
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
	]);
});

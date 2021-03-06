let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let newdate = year + "." + month + "." + day;

const setOrder = function(array){
	let orderedEvent = array.sort(function(a, b){
		var A = a.date
		var B = b.date
		var forOrderA = A.year*365 + A.month*30 + A.day
		var forOrderB = B.year*365 + B.month*30 + B.day
		return forOrderB - forOrderA
	})
	return orderedEvent
}

let previous = events.filter(function(e){
	var date = e.date
	if(year < date.year){
		return false
	}else if(year == date.year && month < date.month){
		return false
	}else if(year == date.year && month == date.month && day <= date.day){
		return false
	}else{
		return true
	}
})

let upComming = events.filter(function(e){
	var date = e.date
	if(year < date.year){
		return true
	}else if(year == date.year && month < date.month){
		return true
	}else if(year == date.year && month == date.month && day <= date.day){
		return true
	}else{
		return false
	}
})

let OrderedPreviousEvent = setOrder(previous)
let OrderedUpComing = setOrder(upComming)

OrderedUpComing.forEach(e => {
	$("#wrapper1").append(`<div class='animatedParent animateOnce' data-appear-top-offset='-50' id=geektonForum` + e.date.year + e.date.month + e.date.day + `>
		<div class='animated fadeInUp' id="brief-intro" style="margin-top: 40px; margin-bottom: 40px; border: 2px solid #a8a8a8; border-radius: 5px;">
			<div class="row" style="margin:opx!important">
			  	<div class="col-xl-6 col-lg-12">
			  		<h3 style="color: #333333; padding-top:3%; padding-left:3%"><a style="color: #333333" href="` + e.linkToAssay + `" target="_blank">` + e.topic + `</a></h3>
			  		<h4 style="color: #ff0000; padding-left:3%">`+ e.date.year + `.` + e.date.month + `.` + e.date.day +`</h4>
					<p style="padding-left:3%">` + e.trailer + `</p>
			  	</div>
			  	<div class="col-xl-6 col-lg-12">
				  <img src="` + e.img + `" width=100%>
			  	</div>
			</div>
		</div>
	</div>`)
	$("#up-coming").append('<li style="margin-top: 5px; margin-bottom: 5px"><a href="#geektonForum' + e.date.year + e.date.month + e.date.day + '">' + e.topic + '</a></li>')
})

OrderedPreviousEvent.forEach(e => {
	$("#wrapper1").append(`<div class='animatedParent animateOnce' data-appear-top-offset='-50' id=geektonForum` + e.date.year + e.date.month + e.date.day + `>
		<div class='animated fadeInUp' id="brief-intro" style="margin-top: 40px; margin-bottom: 40px; border: 2px solid #a8a8a8; border-radius: 5px;">
			<div class="row" style="margin:opx!important">
			  	<div class="col-xl-6 col-lg-12">
			  		<h3 style="color: #333333; padding-top:3%; padding-left:3%"><a style="color: #333333" href="` + e.linkToAssay + `" target="_blank">` + e.topic + `</a></h3>
			  		<h4 style="color: #a8a8a8; padding-left:3%">`+ e.date.year + `.` + e.date.month + `.` + e.date.day +`</h4>
					<p style="padding-left:3%">` + e.trailer + `</p>
			  	</div>
			  	<div class="col-xl-6 col-lg-12">
				  <img src="` + e.img + `" width=100%>
			  	</div>
			</div>
		</div>
	</div>`)
	$("#previous-meetings").append('<li style="margin-top: 5px; margin-bottom: 5px"><a href="#geektonForum' + e.date.year + e.date.month + e.date.day + '">' + e.topic + '</a></li>')
})
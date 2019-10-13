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

let OrderedPreviousEventCards = OrderedPreviousEvent.map(function(){
	$("#wrapper").append()
})


$("#wrapper").append()
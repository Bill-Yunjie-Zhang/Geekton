// console.log(team)
let removeDuplicatedTeam = [team[0]]
team.forEach(e => {
    for(ii = 0; ii < removeDuplicatedTeam.length; ii++){
        if(e.name === removeDuplicatedTeam[ii].name && e.year === removeDuplicatedTeam[ii].year){
            return 0;
        } 
    }
    removeDuplicatedTeam.push(e);
    return 1;
})
// console.log(removeDuplicatedTeam)

let nonFounders = removeDuplicatedTeam.filter(e => e.year !== "founder")
let orderednonFounders = nonFounders.sort(function(a,b){
    return b.year - a.year
})

// console.log(founders)
// console.log(orderednonFounders)

let years = []
let year = 0
nonFounders.forEach(e => {
    if(e.year !== years[years.length-1]){
        years.push(e.year)
        year = e.year
    }
})
// console.log(years)

years.forEach(e => {
    $("#wrapper1").append(`<div class='animatedParent animateOnce' data-appear-top-offset='-50' id=teamMember` + e + `>
        <div class='animated fadeInUp' style="margin-top: 40px; margin-bottom: 40px; background-color: #a8a8a8; padding-top: 20px">
            <div id="` + e + `memberCards" style="margin: auto; width: 75%"></div>
        </div>
    </div>`)
    $("#teamMembers").append('<li style="margin-top: 5px; margin-bottom: 5px"><a href="#teamMember' + e + '">' + e + '</a></li>')
    nonFounders.forEach(ele => {
        if(ele.year === e){
            $("#" + e + "memberCards").append(`<div class='animatedParent animateOnce' data-appear-top-offset='-50' style="width:300px; display: inline-block; margin: 10px">
                <div class='animated fadeInRight c delay-10000' style="margin-top: 40px; margin-bottom: 40px; background-color: #333333; padding: 20px;">
                    <img src="` + ele.pic+ `" width=100% style="margin-bottom: 10px">
                    <h3 style="color: #ffffff">` + ele.name + `</h3>
                    <p style="color: #ffffff"> <span style="color:#efefef">Gender:</span> ` + ele.gender + `</p>
                    <p style="color: #ffffff"> <span style="color:#efefef">School:</span><br> ` + ele.school + `</p>
                    <p style="color: #ffffff"> <span style="color:#efefef">Contact:</span><br> ` + ele.contact + `</p>
                    <div class="overlay">
                        <div class="text">` + ele.txt + `</div>
                    </div>
                </div>
            </div>`) 
        }
    })
})
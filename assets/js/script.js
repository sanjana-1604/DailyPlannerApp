let currentTime = moment().format('LT');
const container = $(".container");
const currentDay = $("#currentDay")
let taskArray = []

let li;
let ul;
let button;
let textArea;
let hourDiv;

///////////////////////////////////////////
console.log(currentTime)


///////////////////////////////////////
toDisplayCurrentDay()
createTimeBlocks()

function toDisplayCurrentDay() {
    currentDay.text(moment().format("dddd, MMMM Do"))
}


function createTimeBlocks() {
    var amPM = "";
    var icon;
    ul = $("<ul>").addClass("time-block")
    container.append(ul)

    for (var i = 9; i < 18; i++) {
        li = $("<li>").addClass("row")
        hourDiv = $("<div>").addClass("hour")
        if (i < 13)
            amPM = "AM"
        else
            amPM = "PM"
        if (i == 9)
            hourDiv.text(`0${i}:00 ${amPM}`)
        else {
            hourDiv.text(`${i}:00 ${amPM}`)
        }
        textArea = $("<textarea>").addClass("future")
       textArea.val(localStorage.getItem(`${i}`))
        button = $("<button>").addClass("saveBtn ")
        icon = $("<i>").addClass("fa fa-solid fa-lock")
        button.attr("item-Number", i)
        button.append(icon)
        li.append(hourDiv).append(textArea).append(button)
        ul.append(li)
        
    }
}
$(".saveBtn").click(function(){
  
    localStorage.setItem(`${$(this).attr("item-Number")}`, $(this).siblings("textarea").val())
})
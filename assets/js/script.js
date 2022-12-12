let currentTime = moment().format("HH");
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
    var timeToDisplay = "09 AM";
    var icon;
    ul = $("<ul>").addClass("time-block")
    container.append(ul)

    for (var i = 9; i < 18; i++) {
        li = $("<li>").addClass("row")
        hourDiv = $("<div>").addClass("hour")
        hourDiv.text(timeToDisplay)

        textArea = $("<textarea>")
        if (currentTime == i)
            textArea.addClass("present")
        else if (currentTime > i)
            textArea.addClass("past")
        else {
            textArea.addClass("future")
        }
        textArea.val(localStorage.getItem(`${i}`))
        button = $("<button>").addClass("saveBtn ")
        icon = $("<i>").addClass("fa fa-unlock")
        button.attr("item-Number", i)
        button.append(icon)
        li.append(hourDiv).append(textArea).append(button)
        ul.append(li)
        timeToDisplay = moment(i.toString(), ["HH"]).add(1, "hour").format("hh A")
    }
}
$(".saveBtn").click(function () {
   $(this).children("i").removeClass("fa fa-unlock")
   $(this).children("i").addClass("fa fa-lock")
    localStorage.setItem(`${$(this).attr("item-Number")}`, $(this).siblings("textarea").val())
})
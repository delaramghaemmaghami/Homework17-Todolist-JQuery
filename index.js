$("button.clear-tasks").click(function() { //* Description: deletes all tasks ...
    $("ul").empty()

    localStorage.removeItem("tasks")
})

// $("i.delete-item").click(function () { //* Description: deletes one task -> "FIRST SOLUTION"
//     $(this).parent().remove()
// })

$("ul.list-group").click(function(event) { //* Description: deletes one task -> "SECOND SOLUTION"
    if(event.target.className.search("delete-item") != -1) {
        event.target.parentElement.remove()

        var SavedTasks = JSON.parse(localStorage.getItem("tasks"));

        for(let j=0; j<SavedTasks.length; j++) {
            if(SavedTasks[j] == event.target.parentElement.innerText) {
                SavedTasks.splice(j, 1)
                j--;
            }
        }

        localStorage.setItem("tasks", JSON.stringify(SavedTasks))
    }
})

$("button").click(function(event) {  //* Description: Add task ...
    inputTask = $("#task-input-id").val();
    
    if(inputTask == "") {
        alert("You should fill out this field!!")
    }

    else{
        var liTag = $('<li></li>').text(inputTask);
        liTag.addClass("list-group-item d-flex justify-content-between")

        var iTag = $('<i></i>');
        iTag.addClass("fas fa-times text-danger mr-auto delete-item")

        $(liTag).append($(iTag))
        $("ul").append(liTag)

        $('#task-form').trigger("reset")

        let tasks
        tasks = [];
    
        if(localStorage.getItem("tasks") === null) {
        tasks = [];
        } 

        else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        }
    
        tasks.push(inputTask)
    
        localStorage.setItem("tasks", JSON.stringify(tasks))
    
        alert("Task saved!")

        // $("i.delete-item").click(function () { //* Description: deletes one task -> "FIRST SOLUTION"
        //     $(this).parent().remove()
        // })

        event.preventDefault()
    }
})

// const ul = document.querySelector("ul.list-group")
// const ulChildren = ul.children

// const array = [];

// for(let i=0; i<ulChildren.length; i++) {
//     array.push(ulChildren[i].innerText)
// }

// localStorage.setItem("tasks", JSON.stringify(array))

//* Description: This part displays the saved tasks in the localStorage
var SavedTasks = JSON.parse(localStorage.getItem("tasks"));

for(let i=0; i<SavedTasks.length; i++) {
    var liTag = $('<li></li>').text(SavedTasks[i]);
    liTag.addClass("list-group-item d-flex justify-content-between")

    var iTag = $('<i></i>');
    iTag.addClass("fas fa-times text-danger mr-auto delete-item")

    $(liTag).append($(iTag))
    $("ul").append(liTag)
}
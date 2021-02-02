const messages= [
    {
        name: "Mike",
        text: "Okay, I believe we should put some resources behind this. The other members in the team, mostly men participated freely in the conversation but for me, it did not go so well. Step in my shoes, see things from my point of view.",
        out_speed: 5000
    },
    {
        name: "Emily",
        text: "I have something to add, when you look at the numbers, you see that we do not have enough data to move forward.",
        out_speed: 5000
    },
    {
        name: "Jack",
        text: "Well, I am not sure the issue is the data..",
        out_speed: 5000 
    },
    {
        name: "Mike",
        text: "You do not understand how the test goes, sure it may not seem much but we have got some of really good feedbacks from these folks.",
        out_speed: 5000
    },
    {
        name: "Emily",
        text: "I have seen the data and I can clearly understand the result.",
        out_speed: 5000
    },
    {
        name: "Mike",
        text: "Sometimes, you cannot trust the data. If we spend time caring about the number all day long, we are never gonna move forward.",
        out_speed: 5000
    },
    {
        name: "Emily",
        text: "We ran that test for a reason. It is a good indicator of what happens if we scale this.",
        out_speed: 5000
    },
    {
        name: "Mike",
        text: "Look, I know this is the right way to go, I got a feeling about this, I have seen this before." ,
        out_speed: 5000
    },
    {
        name: "Jay",
        text: "So, Mike is right, we can move forward" ,
        out_speed: 5000 
    },
    {
        name: "Emily",
        text: "What am I here for?...",
        out_speed: 5000
    }
]

let i = 0
let message = ""
let messageText = document.getElementById('message')
let name = document.getElementById('name')

function getMessage(){
    if (i < messages.length){
        messageText.innerHTML = messages[i].text
        name.innerHTML = messages[i].name

        let messageContainer = document.createElement("div")
        messageContainer.style.width = "100%"
        messageContainer.style.display = "flex"
        messageContainer.style.flexDirection = "column"

        let newName = document.createElement("div")
        newName.innerHTML =  messages[i].name
        newName.style.fontSize = "12px"
        newName.style.width = "80%"
        messageContainer.appendChild(newName)

        let newText = document.createElement("div")
        newText.innerHTML =  messages[i].text
        newText.style.fontSize = "14px"
        newText.style.borderRadius = "8px"
        newText.style.padding = "10px"
        newText.style.marginTop = "5px"
        newText.style.width = "80%"

        if (messages[i].name === "Mike"){
            newText.style.backgroundColor = "#1E04FC"
        } else  if (messages[i].name === "Emily"){
            newText.style.backgroundColor = "#FC04B8"
        } else  if (messages[i].name === "Jack"){
            newText.style.backgroundColor = "#02010C"
        } else  if (messages[i].name === "Jay"){
            newText.style.backgroundColor = "#4A01B3"
        }
        messageContainer.appendChild(newText)

        messageContainer.style.marginBottom = "20px"

        if (i%2 === 0){
            messageContainer.style.alignItems = "flex-start"
            messageContainer.style.textAlign = "left"
        } else {
            messageContainer.style.alignItems = "flex-end"
            messageContainer.style.textAlign = "right"
        }

        document.getElementById("chat").appendChild(messageContainer)
        i ++
        setTimeout(getMessage, messages[i].out_speed)
    }
}

getMessage()
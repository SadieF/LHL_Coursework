function whatToDoForLunch(hungry, availableTime) {
   if (hungry) {
        if (availableTime < 20) {
            console.log("Pick something up and eat in back in the Lab or in the kitchen")
        } else if (availableTime < 30) {
            console.log("You deserve a break and could try a place in Gastown")
        } else {
        console.log("Back to work, slacker");
        }
    } else {
    console.log("Wait till you're hungry")
    }
  }

whatToDoForLunch(true, 15)
whatToDoForLunch(false, 15)
whatToDoForLunch(true, 25)
whatToDoForLunch(true, 35)
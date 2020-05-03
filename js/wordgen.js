var NumberOfWords = 32

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "A person"
words[2] = "Concern or Vulnerability"
words[3] = "Something you used to do or currently do for your job"
words[4] = "Artwork"
words[5] = "Holiday or tradition"
words[6] = "Country"
words[7] = "Sport"
words[8] = "Business"
words[9] = "Politics"
words[10] = "Society"
words[11] = "Something you did recently"
words[12] = "Dream vacation"
words[13] = "TV show or movie"
words[14] = "Game"
words[15] = "Something you accomplished"
words[16] = "Trait or characteristic you admire"
words[17] = "Something you struggle with"
words[18] = "A goal"
words[19] = "An item in your house"
words[20] = "Food"
words[21] = "Your daily routine"
words[22] = "Describe a family member"
words[23] = "A fear or regret"
words[24] = "An awful date"
words[25] = "GAME: 3 clues to guess who/what I am"
words[26] = "ACT: Short scene from a story or play"
words[27] = "Share a memory"
words[28] = "Next week's to-do list"
words[29] = "History"
words[30] = "Inspirational"
words[31] = "Something that made you smile"
words[32] = "Professional Development"

function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function PickRandomWord(frm) {
    // Generate a random number between 1 and NumberOfWords
    var rnd = Math.ceil(Math.random() * NumberOfWords)

    // Display the word inside the text box
    frm.WordBox.value = words[rnd]
}
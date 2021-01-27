var NumberOfWords = 32

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "A famous person"
words[2] = "Concern or Vulnerability"
words[3] = "Something you used to do or currently do for your job"
words[4] = "Artistic"
words[5] = "Holiday or tradition"
words[6] = "Country"
words[7] = "Explain the rules of a Sport"
words[8] = "A business and how it works"
words[9] = "Political"
words[10] = "Societal or pop culture"
words[11] = "Something you did recently"
words[12] = "Dream vacation"
words[13] = "TV show or movie"
words[14] = "Instructions for a favorite recipe"
words[15] = "Something you accomplished recently"
words[16] = "Trait or characteristic you admire"
words[17] = "Something you struggle with"
words[18] = "A goal"
words[19] = "An item in your house"
words[20] = "Instructions for how to play a game"
words[21] = "Your daily routine"
words[22] = "Share a fun memory"
words[23] = "Describe a business"
words[24] = "An awful date"
words[25] = "GAME: 3 clues to guess who/what I am"
words[26] = "ACT: Short scene from a story or play"
words[27] = "Describe a fictional character"
words[28] = "Next week's to-do list"
words[29] = "Historical"
words[30] = "Inspirational"
words[31] = "Something that made you smile"
words[32] = "A news article you read this week"

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



function library (...books){
 
    let filteredBooks = books.filter(book => book.includes('k') || book.includes('К'))
    console.log(filteredBooks)
    let nonFilteredBooks = books.filter(book => !book.includes('k') && !book.includes('К')) 
    console.log(nonFilteredBooks)
    
}

    
library(
    "Pride and Prejudice", "To Kill a Mockingbird", "1984", "The Great Gatsby", "The Catcher in the Rye", "One Hundred Years of Solitude", "The Lord of the Rings", "Animal Farm", "Brave New World", "Wuthering Heights", "The Hobbit", "The Hitchhiker's Guide to the Galaxy", "Jane Eyre", "The Picture of Dorian Gray", "The Adventures of Huckleberry Finn", "The Grapes of Wrath", "The Sound and the Fury", "The Brothers Karamazov", "Crime and Punishment", "The Sun Also Rises", "A Tale of Two Cities", "The Scarlet Letter", "The Odyssey", "Heart of Darkness", "The Canterbury Tales", "Don Quixote", "The Iliad", "The Divine Comedy", "Moby-Dick", "The Count of Monte Cristo", "The Adventures of Sherlock Holmes", "The Time Machine", "Frankenstein", "Dracula", "The War of the Worlds", "The Invisible Man", "Oliver Twist", "The Adventures of Tom Sawyer", "Robinson Crusoe", "Treasure Island", "The Strange Case of Dr. Jekyll and Mr. Hyde", "The Hound of the Baskervilles", "The Red Badge of Courage", "Little Women", "Alice's Adventures in Wonderland", "Through the Looking-Glass", "The Secret Garden", "Black Beauty", "The Wind in the Willows", "The Call of the Wild", "White Fang", "The Jungle Book", "Anne of Green Gables", "The Three Musketeers", "Les Misérables", "The Phantom of the Opera", "War and Peace", "Anna Karenina", "The Picture of Dorian Gray", "The Trial", "The Metamorphosis", "The Stranger", "The Plague", "The Name of the Rose", "The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish", "Mostly Harmless", "The Dark Tower: The Gunslinger", "The Shining", "Carrie", "Salem's Lot", "The Stand", "It", "Pet Sematary", "Misery", "The Green Mile", "The Da Vinci Code", "Angels and Demons", "The Lost Symbol", "Inferno", "Origin", "The Girl with the Dragon Tattoo", "The Girl Who Played with Fire", "The Girl Who Kicked the Hornets' Nest", "The Hunger Games", "Catching Fire", "Mockingjay", "The Fault in Our Stars", "Looking for Alaska", "Paper Towns", "Turtles All the Way Down", "An Abundance of Katherines", "The Perks of Being a Wallflower", "The Fault in Our Stars"
  )
 
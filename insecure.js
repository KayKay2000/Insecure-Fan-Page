const episodes = [
    { 
        id: 1,
        name: "Insecure as Fuck",
        airDate: "10/9/2016",
        season: 1,
        description: "In the wake of her 29th birthday, Issa reflects on her life and relationship choices.",
        characters: ["Issa Dee", "Lawrence Walker", "Molly Carter", "Frieda", "Joanne", "Diane Nakamura", "Daniel King", "Justin", "Jered", "Sarah", "Ken", "Patricia", "Lamine Dee", "Mark", "Kitty"],
        img: "img/episode1.jpeg",
        
    }, 
    {  
        id: 2,
        name: "Messy as Fuck",
        airDate: "10/16/2016",
        season: 1,
        description: "Issa struggles with her feelings about Lawrence, work, and her life.",
        characters: ["Issa Dee", "Lawrence Walker", "Molly Carter", "Frieda", "Joanne", "Diane Nakamura", "Jered", "Hannah Richards-Foster", "Chad Kerr", "Fast Mike", "Brandon", "Sarah", "Kitty", "Thug Yoda", "Ken", "Mark", "Patricia"],
        img: "img/episode2.jpeg",
        trailer: "https://www.imdb.com/video/vi1815985433?playlistId=tt5149554&ref_=tt_pr_ov_vi"
    }, 
    {
        id: 3,
        name: "Hella Great",
        airDate: "7/23/2017",
        season: 2,
        description: "Issa struggles after the break with Lawrence and with a new task at work. Molly doubts her worth at work, and Lawrence adapts to his new housing situation.",
        characters: ["Issa Dee", "Lawrence Walker", "Molly Carter", "Frieda", "Kelli Prenny", "Tiffany DuBois", "Derek DuBois", "Chad Kerr", "Joanne", "Dr. Rhonda Pine", "Ahmal Dee", "Diane Nakamura", "John Merrill", "Quentin", "Travis", "Hannah Richards-Foster", "Tasha", "Eddie"],
        img: "img/episode3.jpeg",
        trailer: "Not Available "

    }, 
    {
        id: 4,
        name: "Hella Questions",
        airDate: "7/30/2017",
        season: 2,
        description: "Issa tries to make sense of a cryptic encounter; Lawrence considers crucial decisions; after receiving some harsh truths, Molly plots to join the office 'boys club'; Issa and Freida encounter a problematic vice principal.",
        characters: ["Issa Dee", "Lawrence Walker", "Molly Carter", "Frieda", "Kelli Prenny", "Tiffany DuBois", "Vice Principal Charles Gaines", "Chad Kerr", "Dr. Rhona Pine", "John Merrill", "Hannah Richards-Foster", "Tasha", "Ninny", "Master Turnfellow", "Samuel Turnfellow", "Security Guard", "Mrs. Andrews", "Rosa, Bank Teller"],
        img: "img/episode4.jpeg",
        trailer: "https://www.imdb.com/video/vi1933425945?playlistId=tt6243346&ref_=tt_pr_ov_vi"
    }, 
    {
        id: 5,
        name: "Better-Like",
        airDate: "8/12/2018",
        season: 3,
        description: "Issa crashes on Daniel's couch and tries to save up extra cash. Molly returns from a beach vacation with renewed determination to maintain boundaries in her life.",
        characters: ["Issa Dee", "Molly Carter", "Frieda", "Daniel King", "Yolanda", "Percy", "Kev'yn", "Joanne", "Alejandro Pena", "Patricia", "Ken", "Lillian", "Vanessa", "Nathan Campbell", "Lil Chris", "Louis", "Jada", "Elijah"],
        img: "img/episode5.jpeg",
        trailer: "https://www.imdb.com/video/vi1413332249?playlistId=tt6243360&ref_=tt_ov_vi"
    }, 
    {
        id: 6,
        name: "Familiar-Like",
        airDate: "8/19/2018",
        season: 3,
        description: "Issa gets advice from Kelli about her financial situation and plays wingwoman as Daniel tries to make a music-industry connection.",
        characters: ["Issa Dee", "Molly Carter", "Frieda", "Kelli Prenny", "Daniel King", "Joanne", "Sarah", "Ahmal Dee", "Spyder", "Khalil", "Patricia", "Kitty", "Ken", "Vanessa", "Security", "Jada", "Hood Dude"],
        img: "img/episode6.jpeg",
        trailer: "https://www.imdb.com/video/vi1799208217?playlistId=tt6243366&ref_=tt_ov_vi"
    }, 
    {
        id: 7,
        name: "Lowkey Feelin' Myself",
        airDate: "4/12/2020",
        season: 4,
        description: "While Issa and Condola continue planning for the Block Party, both are made aware that Condola is seeing Lawrence. Meanwhile, Molly may be developing feelings for Andrew, who wants to keep his options open.",
        characters: ["Issa Dee", "Lawrence Walker", "Molly Carter", "Andrew Tan", "Kelli Prenny", "Tiffany DuBois", "Marvin", "Ahmal Dee", "Condola Hayes", "Taurean Jackson", "Rose Cranberry", "Rufus", "Tasha", "Glenda", "Sheryl", "Benjamin", "Stacy Sutton"],
        img: "img/episode7.jpeg",
        trailer: "Not Available"
    }, 
    {
        id: 8,
        name: "Lowkey Distant",
        airDate: "4/19/2020",
        season: 4,
        description: "When Issa and Condola decide to confront the elephant in the room head-on, Lawrence gets uncomfortable; in search of a real connection, Molly struggles to get Andrew to open up during a date night.",
        characters: ["Issa Dee", "Lawrence Walker", "Molly Carter", "Andrew Tan", "Kelli Prenny", "Tiffany DuBois", "Chad Kerr", "Derek DuBois", "Marvin", "Condola Hayes", "Malcolm", "Taurean Jackson", "Rose Cranberry", "Detective Rawlins", "Karen"],
        img: "img/episode8.jpeg",
        trailer: "Not Available"
    }, 
    {
        id: 9,
        name: "Reunited, Okay?!",
        airDate: "10/24/2021",
        season: 5,
        description: "At her ten-year college reunion, Issa's self doubt quickly surfaces, while Molly struggles to get out of her own head.",
        characters: ["Issa Dee", "Lawrence Walker", "Molly Carter", "Kelli Prenny", "Tiffany DuBois", "Derek DuBois", "Moderator", "Cheyenne", "Nadia Gopal"],
        img: "img/episode9.jpeg",
        trailer: "Not Available"
    }, 
    {
        id: 10,
        name: "Growth, Okay?!",
        airDate: "10/31/2021",
        season: 5,
        description: "Despite her now thriving business, Issa struggles to find her footing and turns to an old friend for support. Meanwhile, Molly contemplates jumping back into the dating pool.",
        characters: ["Issa Dee", "Molly Carter", "Nathan Campbell", "Taurean Jackson", "Sequoia", "Resha", "Carol Carter", "David Carter", "Stacy Sutton"],
        img: "img/episode10.jpeg",
        trailer: "Not Available"
    } 
] 

const characters = [
    {         
        id: 1, 
        name: "Issa Dee",
        playedBy: "Issa Rae",
        episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        img: "img/issa.jpeg"
},
{
        id: 2, 
        name: "Molly Carter",
        playedBy: "Yvonne Orji",
        episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        img: "img/yvonne.jpeg"
}, 
{
        id: 3,
        name: "Lawrence Walker",
        playedBy: "Jay Ellis",
        episodes: [1, 2, 3, 4, 7, 8, 9],
        img: "img/JayEllis.jpeg"
}, 
{
        id: 4,
        name: "Kelli Prenny",
        playedBy: "Natasha Rothwell",
        episodes: [3, 4, 6, 7, 8, 9],
        img: "img/NatashaR.webp"
},
{
        id: 5,
        name: "Tiffany DuBois",
        playedBy: "Amanda Seales",
        episodes: [3, 4, 7, 8, 9],
        img: "img/amandas.jpeg"
},
{
        id: 6,
        name: "Nathan Campbell",
        playedBy: "Kendrick Sampson",
        episodes: [5, 10],
        img: "img/KendrickS.jpeg"
}      
        
    
]
module.exports = {episodes, characters}

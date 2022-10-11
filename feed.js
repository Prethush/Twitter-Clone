export let feedArr = [
  {
    profileImg:
      "https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg",
    date: "oct 10",
    time: "1h",
    name: "James Franco",
    at: "@jamesfranco",
    text: "A very common mindset these days on social media: many new people think that folks with a large number of followers are senior developers But it isn't always the case. Trust but verify.",
    image: false,
    message: !localStorage.getItem("comments")
      ? ""
      : JSON.parse(localStorage.getItem("comments"))[0]
      ? JSON.parse(localStorage.getItem("comments"))[0].length
      : "",
    retweet: 6,
    like: 20,
  },
  {
    profileImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    date: "oct 1",
    time: "8d",
    name: "Kate Swayer",
    at: "@kateswayer",
    text: "Enjoy the moment!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    message: !localStorage.getItem("comments")
      ? ""
      : JSON.parse(localStorage.getItem("comments"))[1]
      ? JSON.parse(localStorage.getItem("comments"))[1].length
      : "",
    retweet: 50,
    like: 260,
  },
  {
    profileImg:
      "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg",
    date: "oct 4",
    time: "4d",
    name: "Dwyane Jhonson",
    at: "@rock",
    text: "Never Quit",
    image:
      "https://talksport.com/wp-content/uploads/sites/5/2021/01/EsP3JYPXAAA2UNG.jpg?strip=all&w=836&quality=40",
    message: !localStorage.getItem("comments")
      ? ""
      : JSON.parse(localStorage.getItem("comments"))[2]
      ? JSON.parse(localStorage.getItem("comments"))[2].length
      : "",
    retweet: 60,
    like: "35k",
  },
];

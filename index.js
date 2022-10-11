import { data } from "./navigation.js";
import { feedArr } from "./feed.js";
let navigation = document.getElementById("nav");
let feedContainer = document.querySelector(".feed-container");
let messageContainer = null,
  messageArr = [],
  commentBtnArr = [],
  commentBoxArr = [],
  commentBox = null,
  commentBtn = null;

// building the left navigation of the webpage
data.forEach((n) => {
  let pContainer = document.createElement("div");
  pContainer.className = "flex nav-container items-center pointer";
  pContainer.style.marginBottom = ".8rem";
  pContainer.style.width = "80%";
  let iconTag = document.createElement("i");
  iconTag.className = n.iconClass;
  iconTag.style.fontSize = "1.2rem";
  let text = document.createElement("h3");
  text.textContent = n.name;
  text.style.fontSize = "1.2rem";
  text.style.marginLeft = "1.2rem";
  if (n.isSelected) {
    text.style.fontWeight = 700;
  }
  pContainer.append(iconTag, text);
  navigation.append(pContainer);
});

// user feeds section building
function fetchFeeds() {
  feedArr.forEach((f, i) => {
    let postContainer = document.createElement("div");
    postContainer.className = "flex";
    postContainer.style.padding = ".8rem 1rem";
    postContainer.style.borderBottom = "1px solid rgb(244, 240, 240)";
    let aside = document.createElement("aside");
    let profileImg = document.createElement("img");
    profileImg.className = "circle";
    profileImg.style.width = "3.8rem";
    profileImg.style.height = "3.8rem";
    profileImg.src = f.profileImg;
    profileImg.alt = f.name;
    profileImg.style.objectFit = "cover";
    aside.append(profileImg);
    let contentContainer = document.createElement("div");
    contentContainer.style.marginLeft = ".8rem";
    let basicProfileInfo = document.createElement("div");
    basicProfileInfo.className = "flex";
    let userName = document.createElement("h4");
    userName.textContent = f.name;
    userName.style.fontSize = "1rem";
    userName.style.fontWeight = "700";
    let userProfileName = document.createElement("span");
    userProfileName.textContent = f.at;
    userProfileName.style.marginLeft = ".5rem";
    let time = document.createElement("span");
    time.style.marginLeft = ".5rem";
    time.textContent = f.time;
    basicProfileInfo.append(userName, userProfileName, time);
    let text = document.createElement("p");
    text.textContent = f.text;
    text.style.fontSize = ".9rem";
    let div = document.createElement("div");
    div.style.marginTop = ".2rem";
    div.append(text);
    let imageContainer = document.createElement("div");
    imageContainer.style.marginTop = ".5rem";
    let img;
    if (f.image) {
      img = document.createElement("img");
      img.src = f.image;
      img.style.borderRadius = ".5rem";
      img.style.width = "100%";
      imageContainer.append(img);
      div.append(imageContainer);
    }
    let bottomContainer = document.createElement("div");
    bottomContainer.className = "flex justify-between";
    bottomContainer.style.marginTop = ".7rem";
    messageContainer = document.createElement("div");
    let message = document.createElement("i");
    message.className = "fa-solid fa-message";
    let messageCount = document.createElement("span");
    messageCount.textContent = f.message;
    messageCount.style.marginLeft = ".5rem";
    messageContainer.style.cursor = "pointer";
    messageContainer.append(message, messageCount);
    messageArr.push(messageContainer);
    let retweetContainer = document.createElement("div");
    let retweet = document.createElement("i");
    retweet.className = "fa-solid fa-retweet";
    let retweetCount = document.createElement("span");
    retweetCount.style.marginLeft = ".5rem";
    retweetCount.textContent = f.retweet;
    retweetContainer.append(retweet, retweetCount);
    let likeContainer = document.createElement("div");
    let like = document.createElement("i");
    like.className = "fa-solid fa-heart";
    let likeCount = document.createElement("span");
    likeCount.style.marginLeft = ".5rem";
    likeCount.textContent = f.message;
    likeContainer.append(like, likeCount);
    let shareContainer = document.createElement("div");
    let share = document.createElement("like");
    share.className = "fa-solid fa-share";
    shareContainer.append(share);
    bottomContainer.append(
      messageContainer,
      retweetContainer,
      likeContainer,
      shareContainer
    );
    let commentContainer = document.createElement("div");
    commentContainer.style.marginTop = ".5rem";
    commentBox = document.createElement("input");
    commentBox.className = "commentBox";
    commentBox.placeholder = "Add Comment";
    commentBoxArr.push(commentBox);
    let commentBtnContainer = document.createElement("div");
    commentBtnContainer.className = "flex justify-end";
    commentBtn = document.createElement("button");
    commentBtn.className = "btn btn-small";
    commentBtn.textContent = "Add comment";
    commentBtnArr.push(commentBtn);
    commentBtnContainer.style.marginTop = ".8rem";
    let comments = document.createElement("div");
    if (f.message) {
      let commentsArr = JSON.parse(localStorage.getItem("comments"))[i];
      commentsArr.forEach((c) => {
        let commentsContainer = document.createElement("div");
        let commentContentBox = document.createElement("div");
        commentContentBox.className = "flex column";
        commentContentBox.style.marginLeft = "1rem";
        let commentUserName = document.createElement("h3");
        commentUserName.textContent = "prethush";
        commentUserName.style.fontWeight = "700";
        commentsContainer.className = "commentsContainer";
        let commentImg = document.createElement("img");
        commentImg.src = "./assets/images/me.jpg";
        commentImg.className = "commentImg";
        let commentText = document.createElement("p");
        commentText.textContent = c;
        commentContentBox.append(commentUserName, commentText);
        commentsContainer.append(commentImg, commentContentBox);
        comments.append(commentsContainer);
      });
    }
    commentBtnContainer.append(commentBtn);
    commentContainer.append(commentBox, commentBtnContainer, comments);
    contentContainer.append(
      basicProfileInfo,
      div,
      bottomContainer,
      commentContainer
    );
    postContainer.append(aside, contentContainer);
    feedContainer.append(postContainer);
  });
}

fetchFeeds();

// Adding comments to a specific posts
commentBtnArr.forEach((comment, i) => {
  comment.addEventListener("click", () => {
    console.log(commentBoxArr[i].value);
    if (commentBoxArr[i].value) {
      if (localStorage.getItem("comments")) {
        let comments = JSON.parse(localStorage.getItem("comments"));
        if (comments[i]) {
          comments[i].push(commentBoxArr[i].value);
        } else {
          comments[i] = [];
          comments[i].push(commentBoxArr[i].value);
        }
        localStorage.setItem("comments", JSON.stringify(comments));
      } else {
        let comments = [];
        comments[i] = [];
        comments[i].push(commentBoxArr[i].value);
        localStorage.setItem("comments", JSON.stringify(comments));
      }
      location.reload();
    }
  });
});

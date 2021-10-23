const LinksSocialMedia = {
  github: "j0tappe",
  facebook: "j0tappe",
  instagram: "j0tappe",
  linkedin: "in/j0tappe",
  twitter: "j0tappe",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `http://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userProfile.href = data.html_url;
      userPhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();

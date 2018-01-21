function getGitHubPinnedRepos(url) {
    $.ajax({
     url: url,
     type:'GET',
     success:function (data) {
        alert(data);
     }})
}
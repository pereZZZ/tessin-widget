let block = document.getElementsByClassName('b-blockImg');

fetch('https://api.tessin.se/1/projects')
  .then(res => res.json())
  .then(res => {
    for(let i=0; i < 3; i++){
      console.log(res.payload.projects[i])
      block[0].children[i].children[0].children[0].setAttribute('style',
        `background: url('${res.payload.projects[i].teaserImage}') no-repeat;
      background-position: 100% 100%;
			background-size: cover;`
      );
      block[0].children[i].children[1].innerHTML=`${res.payload.projects[i].publicTeaser}`;
    }
  });
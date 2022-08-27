fetch("data.json").then((data)=>{
    return data.json()
}).then((compeleteData)=>{
    let postData =""
    compeleteData.map((kunal,index)=>{
postData += ` <div class="inele">
<div class="number">0${index +1}</div>
    <div class="proficon">
        <img src=${kunal.proficon}  height="25px">
    </div>
    <p class="name">
      ${kunal.name}
    </p>
    <p class="catchline">
        ${kunal.catchline}
    </p>
    <p class="date">
      ${kunal.date}
    </p>
</div>`
document.getElementById("trendingPosts").innerHTML = postData
    })
})

fetch("dataTwo.json").then((data1)=>{
    return data1.json()
}).then((compeleteData1)=>{
    let postData1 =""
    compeleteData1.map((kunal1)=>{
postData1 += `<div class="blog1">
    <div class="blogRead">
        <div class="proficon">
            <img src=${kunal1.proficon} height="25px">
        </div>
        <p class="name">
            ${kunal1.name}
        </p>
        <p class="catchline1">
            ${kunal1.catchline1}
        </p>
        <p class="catchline2">
            ${kunal1.catchline2}
        </p>
        <p class="dateBlog">
            ${kunal1.dateBlog}
            <button class="tagButton">${kunal1.tagButton}</button>
            <button class="star">
                <img src="./Screenshot_2022-08-26_at_11.54.03_PM-removebg-preview.png" height="22px">
            </button>
            <button class="bookicon">
                <img src="./icons8-bookmark-49.png" height="20px">
            </button>
        </p>
    </div>
    <div class="imageBlog">
        <img src=${kunal1.imageBlog} alt="">
    </div>
</div>`
document.getElementById("leftBlog").innerHTML = postData1
    })
})
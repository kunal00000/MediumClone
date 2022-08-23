fetch("data.json").then((data)=>{
    return data.json()
}).then((compeleteData)=>{
    let postData =""
    compeleteData.map((kunal,index)=>{
postData += ` <div class="inele">
<div class="number">0${index +1}</div>
<div class="float">
    <p class="name">
      ${kunal.name}
    </p>
    <p class="catchline">
        ${kunal.catchline}
    </p>
    <p class="date">
      ${kunal.date}
    </p>
</div>
</div>`
document.getElementById("trendingPosts").innerHTML = postData
    })
})
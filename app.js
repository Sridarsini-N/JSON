fetch("./result.json")
    .then((res) => res.json())
    .then((dataList) => {
        let card_body = document.getElementById("cardBody");
        var get = "";
        dataList.map((index) => {
            get += `<p> <b> Name: </b> ${index.Name}</p>
            <p> <b> Age: </b> ${index.Age}</p>
            <p> <b> Designation: </b> ${index.Designation}</p>
            <a href=${index.linked} class="btn btn-primary">LinkedIn</a>`;
            document.getElementById("imageUrl").src = index.ImgSrc;
        })
        card_body.innerHTML = get;
    })

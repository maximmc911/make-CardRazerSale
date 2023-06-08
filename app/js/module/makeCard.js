export const CreatCard = (data , parentDiv) =>{

    parentDiv.innerHTML = data.map((buy) =>
    `
    <div class="card">
                <div class="card_img">
                    <img src="${buy.image}" alt="">
                </div>
                <div class="card_items">
                    <div class="name">
                        <p>${buy.name}</p>
                    </div>
                    <div class="price">
                        <p>$ ${buy.price}</p>
                    </div>

                </div>
                <div class="btn">
                    <button id="${buy._id}">
                        Show more
                    </button>
                </div>
            </div>
    `

    ).join(``);
 };
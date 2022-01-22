const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const tabsTitle = document.querySelector('.card-details__title')
    const tabsPrice = document.querySelector('.card-details__price')
    const tabsImage = document.querySelector('.card__image_item')
    const mainTitle = document.querySelector('title')

    const tabsOptions = [
        {
            name: "Graphite",
            memory: "128",
            price: 60000,
            image: 'iPhone-graphite.webp'
        },
        {
            name: "Silver",
            memory: "256",
            price: 65000,
            image: 'iPhone-silver.webp'
        },
        {
            name: "Sierra Blue",
            memory: "512",
            price: 70000,
            image: 'iPhone-sierra_blue.webp'
        }
    ]

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
        tabsPrice.textContent = `${tabsOptions[index].price}₽`
        tabsImage.src = `img/${tabsOptions[index].image}`
        mainTitle.textContent = `${tabsOptions[index].name}`
    }

    const changeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')
            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        }) 
        changeContent(indexClickedTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
            event.preventDefault()
            changeActiveTabs(index)
        })
    })
    changeContent(0)
}
tabsFunc()
import Card from "../components/Card"

function Home() {
    return (
        <div className="home">
            <div className="header">
                <h1 className="title">Make Charts</h1>
                <p className="introduce">Don't worry about making charts, Make Charts is very intuitive and your charts will look great</p>
                <img src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-e340-61fd-be01-c0ddce4ec5f7/raw?se=2025-08-27T17%3A34%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=2476343e-922e-5a54-9744-b332b1f5ed02&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-27T13%3A02%3A10Z&ske=2025-08-28T13%3A02%3A10Z&sks=b&skv=2024-08-04&sig=7k7TKiM683dVjd7aBlhyRiun/wA765YVV0/X5jTZqqQ%3D" alt="graphics" />
            </div>
            <div className="selectText">
                <h2>Select one and hands to work</h2>
            </div>
            <div className="chartOptions">
                <Card title={'Area Chart'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
                <Card title={'Bar Chart'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
                <Card title={'Doughnut and Pie Charts'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
                <Card title={'Line Chart'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
                <Card title={'Polar Area Chart'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
                <Card title={'Radar Chart'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
                <Card title={'Scatter Chart'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
                <Card title={'Bubble Chart'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMchJ9s6nAn6lPiXv3dfNWkjkOMK9hszmzTQ&s'}/>
            </div>
        </div>
    )
}

export default Home
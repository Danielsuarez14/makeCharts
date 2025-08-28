import Card from "../components/Card"

function Home() {
    return (
        <div className="home">
            <div className="header">
                <h1 translate="no" className="title">Make Charts</h1>
                <p className="introduce">Don't worry about making charts, Make Charts is very intuitive and your charts will look great</p>
                <img src='./player.png' alt="graphics" />
            </div>
            <div className="selectText">
                <h2>Select one and hands to work</h2>
            </div>
            <div className="chartOptions">
                <Card title={'Area Chart'} image={'./area.png'}/>
                <Card title={'Bar Chart'} image={'./bar.png'}/>
                <Card title={'Doughnut and Pie Charts'} image={'./pie.png'}/>
                <Card title={'Line Chart'} image={'./line.png'}/>
                <Card title={'Polar Area Chart'} image={'./polar.png'}/>
                <Card title={'Radar Chart'} image={'./radar.png'}/>
                <Card title={'Scatter Chart'} image={'./scatter.png'}/>
                <Card title={'Bubble Chart'} image={'./bubble.png'}/>
            </div>
        </div>
    )
}

export default Home
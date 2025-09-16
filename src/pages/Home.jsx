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
                <Card id={'area'} title={'Area Chart'} image={'./area.png'}/>
                <Card id={'bar'} title={'Bar Chart'} image={'./bar.png'}/>
                <Card id={'pie'} title={'Doughnut and Pie Charts'} image={'./pie.png'}/>
                <Card id={'line'} title={'Line Chart'} image={'./line.png'}/>
                <Card id={'polar'} title={'Polar Area Chart'} image={'./polar.png'}/>
                <Card id={'radar'} title={'Radar Chart'} image={'./radar.png'}/>
                <Card id={'scatter'} title={'Scatter Chart'} image={'./scatter.png'}/>
            </div>
        </div>
    )
}

export default Home
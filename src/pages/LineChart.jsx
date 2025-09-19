import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"

function LineChart() {
const [title, setTitle] = useState('TRM COP por USD en septiembre del año 2025')
    const [valuesY, setValuesY] = useState('4018.41\n4016.94\n4002.86\n3991.09\n3960.94\n3960.94\n3960.94\n3945.29\n3919.13\n3921.58')
    const [valuesX, setValuesX] = useState('02\n03\n04\n05\n06\n07\n08\n09\n10\n11')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [titleY, setTitleY] = useState('Pesos Colombianos')
    const [titleX, setTitleX] = useState('Dias')
    const [color, setColor] = useColor("rgba(17, 67, 4, 1)"); 

    const chartRef = useRef(null)
    const data = {
        labels: labels,
        datasets: [{
            label: title,
            data: values,
            borderColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
            fill: false,
            tension: 0.1,
        }]
    }
    // 0.406
    const options = {
        interaction: {
            mode: 'index',
            intersect: true,
        },scales: {
            y: {
                title: {
                    display: true,
                    text: titleY
                }
            },
            x: {
                title: {
                    display: true,
                    text: titleX
                }
            }
        },
        plugins: { legend: { display: false }, title: { display: true, text: title } }
    }

    const createImage = () => {
        const base64Image = chartRef.current.toBase64Image();
        const dowload = document.createElement('a')
        dowload.download = `${title}.jpeg`
        dowload.href = base64Image
        dowload.click()
    }


    const update = (value) => {
        setTitle(value)

    }


    useEffect(() => {
        setValues(valuesY.split('\n').filter(l => l !== ''))
        setLabels(valuesX.split('\n').filter(l => l !== ''))
    }, [valuesY, valuesX])


    return (
        <div className='areaChart'  id='phoneChart'>
            <div className='Navbar'>
                <h1 className='titleArea'>Line Chart</h1>
            </div>
            <div className='leftSide' id='phoneSide2'>
                <h2>Make your own graphic</h2>
                <div className='titleY'>
                    <input type="text" value={titleY} onChange={v => setTitleY(v.target.value)}/>
                </div>
                <div className='titleX'>
                    <input type="text" value={titleX} onChange={v => setTitleX(v.target.value)}/>
                </div>
                <div id='labelValueY2'>
                    <h4>Values Y-Axis</h4>
                    <textarea value={valuesY} onChange={a => setValuesY(a.target.value)} id="valuesY" />
                </div>
                <div id='labelValueX2'>
                    <h4>Values X-Axis</h4>
                    <textarea value={valuesX} onChange={a => setValuesX(a.target.value)} id="valuesX" />
                </div> 
                <div className='backgroundPie' id='backgroundPhone2'>
                    <div className='colorPicker'>
                        <h4>Line color</h4>
                        <ColorPicker color={color} onChange={setColor} />
                    </div>
                </div>
            </div> 
            <div className='rightSide' id='upSide'>
                <input type="text" value={title} onChange={a => update(a.target.value)} />
                <Line className='areaLine' data={data} options={options} ref={chartRef} />
                <div className='download'>
                    <img src="./downloadChart.jpg" alt="download" />
                    <button onClick={() => createImage()}>Download</button>
                </div>

            </div>
        </div>
    )
}



export default LineChart
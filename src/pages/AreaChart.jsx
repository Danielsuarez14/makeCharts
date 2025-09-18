import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"

function AreaChart() {
    const [title, setTitle] = useState('TRM COP por USD en septiembre del año 2025')
    const [valuesY, setValuesY] = useState('4018.41\n4016.94\n4002.86\n3991.09\n3960.94\n3960.94\n3960.94\n3945.29\n3919.13\n3921.58')
    const [valuesX, setValuesX] = useState('02\n03\n04\n05\n06\n07\n08\n09\n10\n11')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [titleY, setTitleY] = useState('Pesos Colombianos')
    const [titleX, setTitleX] = useState('Dias')
    const [color, setColor] = useColor("rgb(10, 196, 50, 0.123)");
    const [borderColor, setBorderColor] = useColor("rgba(17, 67, 4, 1)");
    const chartRef = useRef(null)
    const data = {
        labels: labels,
        datasets: [{
            label: title,
            data: values,
            fill: 'origin',
            backgroundColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
            borderColor: `rgba(${borderColor.rgb.r}, ${borderColor.rgb.g},${borderColor.rgb.b},${borderColor.rgb.a})`,
            tension: 0.1,
            pointRadius: 0,
        }]
    }
    const options = {
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
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
        setValues(valuesY.split('\n'))
        setLabels(valuesX.split('\n'))
    }, [valuesY, valuesX, color])


    return (
        <div className='areaChart' id='phoneChart'>
            <div className='Navbar'>
                <h1 className='titleArea'>Area Chart Page</h1>
            </div>
            <div className='leftSide' id='phoneSide'>
                <h2>Make your own graphic</h2>
                <div className='titleY'>
                    <input type="text" value={titleY} onChange={v => setTitleY(v.target.value)}/>
                </div>
                <div className='titleX'>
                    <input type="text" value={titleX} onChange={v => setTitleX(v.target.value)}/>
                </div>
                <div id='labelValueY'>
                    <h4>Values Y-Axis</h4>
                    <textarea value={valuesY} onChange={a => setValuesY(a.target.value)} id="valuesY" />
                </div>
                <div id='labelValueX'>
                    <h4>Values X-Axis</h4>
                    <textarea value={valuesX} onChange={a => setValuesX(a.target.value)} id="valuesX" />
                </div>
                <div className='background' id='phoneBackground'>
                    <h4>Background color</h4>
                    <ColorPicker color={color} onChange={setColor} />
                </div>
                <div className='line' id='phoneLine'>
                    <h4>Line color</h4>
                    <ColorPicker color={borderColor} onChange={setBorderColor} />
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

export default AreaChart
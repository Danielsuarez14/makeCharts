import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"
import { useNavigate } from 'react-router-dom';

function AreaChart() {
    const [title, setTitle] = useState('Title')
    const [valuesY, setValuesY] = useState('65\n59\n80\n81\n56\n55\n40')
    const [valuesX, setValuesX] = useState('Enero\nFebrero\nMarzo\nAbril\nMayo\nJunio\nJulio')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [color, setColor] = useColor("rgb(10, 196, 50, 0.123)");
    const [borderColor, setBorderColor] = useColor("rgb(15, 73, 0)");
    const chartRef = useRef(null)
    const navigate = useNavigate()
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
        scales: { y: { beginAtZero: true } },
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
        <div className='areaChart'>
            <div  className='Navbar'>
                <h1 className='titleArea'>Area Chart Page</h1>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            <div className='leftSide'>
                <h2>Make your own graphic</h2>
                <div>
                    <h4>Values Y-Axis</h4>
                    <textarea value={valuesY} onChange={a => setValuesY(a.target.value)} id="valuesY" />
                </div>
                <div>
                    <h4>Values X-Axis</h4>
                    <textarea value={valuesX} onChange={a => setValuesX(a.target.value)} id="valuesX" />
                </div>
                <div className='background'>
                    <h4>Background color</h4>
                    <ColorPicker color={color} onChange={setColor} />
                </div>
                <div className='line'>
                    <h4>Line color</h4>
                    <ColorPicker color={borderColor} onChange={setBorderColor} />
                </div>
            </div>
            <div className='rightSide'>
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
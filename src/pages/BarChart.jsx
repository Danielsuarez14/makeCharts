import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"
import { useNavigate } from 'react-router-dom';

function BarChart() {
    const [title, setTitle] = useState('Title')
    const [valuesY, setValuesY] = useState('65\n59\n80')
    const [valuesX, setValuesX] = useState('Enero\nFebrero\nMarzo')
    const [valuesBorder, setValuesBorder] = useState('rgba(15, 73, 0, 1)\nrgba(214, 124, 33, 1)\nrgba(17, 41, 112, 1)')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [colors, setColors] = useState([])
    const [borders, setBorders] = useState([])
    const [borderColor, setBorderColor] = useColor("rgb(15, 73, 0)");

    const chartRef = useRef(null)
    const navigate = useNavigate()
    const data = {
        labels: labels,
        datasets: [{
            label: title,
            data: values,
            backgroundColor: valuesBorder.split('\n').filter(l => l !== '').length === valuesX.split('\n').filter(l => l !== '').length ? colors : `${colors[0]}`,
            borderColor: valuesBorder.split('\n').filter(l => l !== '').length === valuesX.split('\n').filter(l => l !== '').length ? borders : `${borders[0]}`,
            borderWidth: 2,
            fill: true,
            tension: 0.1,
            pointRadius: 0,
        }]
    }
    // 0.406
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

    const updateBackground = (event) => {
        const list = event.split('\n').filter(l => l !== '')
        const newList = []
        for (let i = 0; i <= list.length; i++) {
            if (list[i] !== undefined && list[i].length >= 14 && list[i].length <= 22) {
                let line = list[i].substring(0, list[i].length - 2) + '0.5)'
                newList.push(line)
            }

        }
        setColors(newList)
    }

    useEffect(() => {
        setValues(valuesY.split('\n').filter(l => l !== ''))
        setLabels(valuesX.split('\n').filter(l => l !== ''))
        setBorders(valuesBorder.split('\n').filter(l => l !== ''))
        updateBackground(valuesBorder)
        console.log(valuesBorder.split('\n').filter(l => l !== '').length === valuesX.split('\n').filter(l => l !== '').length ? colors : `${colors[0]}`)
    }, [valuesY, valuesX, borderColor, valuesBorder])


    return (
        <div className='areaChart'>
            <div className='Navbar'>
                <h1 className='titleArea'>Bar Chart Page</h1>
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
                <div className='backgroundPie'>
                    <div className='colorPicker'>
                        <h4>Line color</h4>
                        <ColorPicker color={borderColor} onChange={setBorderColor} />
                    </div>
                    <button onClick={() => setValuesBorder(prev => `${prev}\n${`rgba(${Math.round(borderColor.rgb.r)}, ${Math.round(borderColor.rgb.g)}, ${Math.round(borderColor.rgb.b)}, ${Math.round(borderColor.rgb.a)})`}`)}
                    >Put Color</button>
                    <div>
                        <h4>Colors RGB</h4>
                        <textarea value={valuesBorder} onChange={a => setValuesBorder(a.target.value)} id="colorsRGB" />
                    </div>

                </div>
            </div>
            <div className='rightSide'>
                <input type="text" value={title} onChange={a => update(a.target.value)} />
                <Bar redraw className='areaLine' data={data} options={options} ref={chartRef} />
                <div className='download'>
                    <img src="./downloadChart.jpg" alt="download" />
                    <button onClick={() => createImage()}>Download</button>
                </div>

            </div>
        </div>
    )
}

export default BarChart
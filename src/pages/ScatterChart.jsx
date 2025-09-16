import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"
import { useNavigate } from 'react-router-dom';

function ScatterChart() {
    const [title, setTitle] = useState('OMS: Peso (kg) vs Talla (cm) — Niños 2–5 años, percentil 50')
    const [valuesY, setValuesY] = useState('65\n68\n70\n72\n74\n76\n78\n80\n82\n84')
    const [valuesX, setValuesX] = useState('7.4\n8.1\n8.6\n9.0\n9.4\n9.8\n10.2\n10.6\n11.0\n11.4')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [titleY, setTitleY] = useState('Talla')
    const [titleX, setTitleX] = useState('Peso')
    const pairs = []
    const [color, setColor] = useColor("rgba(17, 67, 4, 1)");

    const chartRef = useRef(null)
    const navigate = useNavigate()
    const data = {
        datasets: [{
            label: title,
            data: pairs,
            backgroundColor: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
        }]
    }
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

    const makePairs = () => {
        let dictionary = {}
        if(labels.length === values.length){
            for (let i = 0; i <= values.length - 1; i++){
            dictionary = {'x': parseFloat(labels[i]), 'y': parseFloat(values[i])}
            pairs.push(dictionary)
        }
        return pairs
        }
        
    }


    useEffect(() => {
        setValues(valuesY.split('\n').filter(l => l !== ''))
        setLabels(valuesX.split('\n').filter(l => l !== ''))
    }, [valuesY, valuesX, color])

    useEffect (() => {
        makePairs()
    },[labels, values])


    return (
        <div className='areaChart'>
            <div className='Navbar'>
                <h1 className='titleArea'>Scatter Chart Page</h1>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            <div className='leftSide'>
                <h2>Make your own graphic</h2>
                <div className='titleY'>
                    <input type="text" value={titleY} onChange={v => setTitleY(v.target.value)}/>
                </div>
                <div className='titleX'>
                    <input type="text" value={titleX} onChange={v => setTitleX(v.target.value)}/>
                </div>
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
                        <h4>Point color</h4>
                        <ColorPicker color={color} onChange={setColor} />
                    </div>
                </div>
            </div>
            <div className='rightSide'>
                <input type="text" value={title} onChange={a => update(a.target.value)} />
                <Scatter redraw className='areaLine' data={data} options={options} ref={chartRef} />
                <div className='download'>
                    <img src="./downloadChart.jpg" alt="download" />
                    <button onClick={() => createImage()}>Download</button>
                </div>

            </div>
        </div>
    )
}



export default ScatterChart
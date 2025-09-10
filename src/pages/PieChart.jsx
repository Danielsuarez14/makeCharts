import { Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"
import { useNavigate } from 'react-router-dom';

function PieChart() {
    const [title, setTitle] = useState('Title')
    const [valuesY, setValuesY] = useState('65\n59\n80')
    const [valuesX, setValuesX] = useState('Enero\nFebrero\nMarzo')
    const [valuesColor, setValuesColor] = useState('rgba(15, 73, 0, 1)\nrgba(214, 124, 33, 1)\nrgba(17, 41, 112, 1)')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [colors, setColors] = useState([])
    const [color, setColor] = useColor("rgba(15, 73, 0, 1)")
    const [pie, setPie] = useState(true)
    const chartRef = useRef(null)
    const navigate = useNavigate()
    const data = {
        labels: labels,
        datasets: [{
            label: title,
            data: values,
            backgroundColor: valuesColor.split('\n').length === valuesX.split('\n').length ? colors : `${colors[0]}`
            ,
            hoverOffset: 10,
        }]
    }
    const options = {
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: { title: { display: true, text: title } }
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
        setColors(valuesColor.split('\n'))
        console.log(colors);
    }, [valuesY, valuesX, valuesColor])


    return (
        <div className='areaChart'>
            <div className='Navbar'>
                <h1 className='titleArea'>Pie and Doughnut Chart Page</h1>
                <button onClick={() => navigate('/')}>Back</button>
            </div>
            <div className='leftSide'>
                <h2>Make your own graphic</h2>
                <div>
                    <h4>Values</h4>
                    <textarea value={valuesY} onChange={a => setValuesY(a.target.value)} id="valuesY" />
                </div>
                <div>
                    <h4>Labels</h4>
                    <textarea value={valuesX} onChange={a => setValuesX(a.target.value)} id="valuesX" />
                </div>
                <div className='backgroundPie'>
                    <div className='colorPicker'>
                        <h4>Line color</h4>
                        <ColorPicker color={color} onChange={setColor} />
                    </div>
                    <button onClick={() => setPie(!pie)} className='selectChart'>{pie ? 'Doughnut' : 'Pie'}</button>
                    <button onClick={() => setValuesColor(prev => `${prev}\n${`rgba(${Math.round(color.rgb.r)}, ${Math.round(color.rgb.g)}, ${Math.round(color.rgb.b)}, ${Math.round(color.rgb.a)})`}`)}
                    >Put Color</button>
                    <div>
                        <h4>Colors RGB</h4>
                        <textarea value={valuesColor} onChange={a => setValuesColor(a.target.value)} id="colorsRGB" />
                    </div>

                </div>
            </div>
            <div className='rightSide'>
                <input type="text" value={title} onChange={a => update(a.target.value)} />
                {pie && (
                    <Pie className='pieChart' data={data} options={options} ref={chartRef} />
                )}
                {!pie && (
                    <Doughnut className='pieChart' data={data} options={options} ref={chartRef} />
                )}
                <div className='downloadPie'>
                    <button onClick={() => createImage()}>Download</button>
                </div>

            </div>
        </div>
    )
}

export default PieChart
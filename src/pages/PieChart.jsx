import { Pie, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"

function PieChart() {
    const [title, setTitle] = useState('Top 5 marcas de automoviles mas vendidas en Colombia(2024)')
    const [valuesY, setValuesY] = useState('27023\n25339\n24251\n19605\n17968')
    const [valuesX, setValuesX] = useState('Toyota\nRenault\nKia\nChevrolet\nMazda')
    const [valuesColor, setValuesColor] = useState('rgba(235, 10, 30, 1)\nrgba(255, 209, 0, 1)\nrgba(200, 16, 46, 1)\nrgba(204, 158, 47, 1)\nrgba(33, 33, 33, 1)')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [colors, setColors] = useState([])
    const [color, setColor] = useColor("rgba(15, 73, 0, 1)")
    const [pie, setPie] = useState(true)
    const chartRef = useRef(null)
    const data = {
        labels: labels,
        datasets: [{
            label: title,
            data: values,
            backgroundColor: valuesColor.split('\n').filter(l => l !== '').length === valuesX.split('\n').filter(l => l !== '').length ? colors : `${colors[0]}`
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
        setValues(valuesY.split('\n').filter(l => l !== ''))
        setLabels(valuesX.split('\n').filter(l => l !== ''))
        setColors(valuesColor.split('\n').filter(l => l !== ''))
    }, [valuesY, valuesX, valuesColor])


    return (
        <div className='areaChart'>
            <div className='Navbar'>
                <h1 className='titleArea'>Pie and Doughnut Chart Page</h1>
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
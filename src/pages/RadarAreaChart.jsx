import { Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css"

function RadarAreaChart() {
    const [title, setTitle] = useState('Colombia, PISA 2022')
    const [valuesY, setValuesY] = useState('383\n409\n411')
    const [valuesX, setValuesX] = useState('Matemáticas\nLectura\nCiencias')
    const [values, setValues] = useState([])
    const [labels, setLabels] = useState([])
    const [color, setColor] = useColor("rgb(10, 196, 50, 0.123)");
    const [borderColor, setBorderColor] = useColor("rgba(0, 82, 204, 0.4)");

    const [color2, setColor2] = useColor("rgba(27, 2, 103, 0.12)");
    const [borderColor2, setBorderColor2] = useColor("rgba(255, 99, 132, 0.4)");
    const [values2, setValues2] = useState([])
    const [title2, setTitle2] = useState('Promedio OCDE, 2022')
    const [valuesC, setValuesC] = useState('472\n476\n485')

    const chartRef = useRef(null)
    const data = {
        labels: labels,
        datasets: [{
            label: title,
            data: values,
            fill: true,
            backgroundColor: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`,
            borderColor: `rgba(${borderColor.rgb.r}, ${borderColor.rgb.g},${borderColor.rgb.b},${borderColor.rgb.a})`,
            pointBackgroundColor: `rgba(${borderColor.rgb.r}, ${borderColor.rgb.g},${borderColor.rgb.b},${borderColor.rgb.a})`,
            pointBorderColor: 'rgba(255, 255, 255, 1)',
            pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointHoverBorderColor: `rgba(${borderColor.rgb.r}, ${borderColor.rgb.g},${borderColor.rgb.b},${borderColor.rgb.a})`,
        }, {
            label: title2,
            data: values2,
            fill: true,
            backgroundColor: `rgba(${color2.rgb.r},${color2.rgb.g},${color2.rgb.b},${color2.rgb.a})`,
            borderColor: `rgba(${borderColor2.rgb.r}, ${borderColor2.rgb.g},${borderColor2.rgb.b},${borderColor2.rgb.a})`,
            pointBackgroundColor: `rgba(${borderColor2.rgb.r}, ${borderColor2.rgb.g},${borderColor2.rgb.b},${borderColor2.rgb.a})`,
            pointBorderColor: 'rgba(255, 255, 255, 1)',
            pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)',
            pointHoverBorderColor: `rgba(${borderColor2.rgb.r}, ${borderColor2.rgb.g},${borderColor2.rgb.b},${borderColor2.rgb.a})`,
        }]
    }
    const options = {
        interaction: {
            mode: 'index',
            intersect: false,
        }
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
        setTitle2(value)

    }

    useEffect(() => {
        setValues(valuesY.split('\n').filter(l => l !== ''))
        setLabels(valuesX.split('\n').filter(l => l !== ''))
        setValues2(valuesC.split('\n').filter(l => l !== ''))
    }, [valuesY, valuesX, color, valuesC])


    return (
        <div className='radarChart'>
            <div className='Navbar'>
                <h1 className='titleRadar'>Radar Chart</h1>
            </div>
            <div className='leftSideRadar'>
                <h2>Make your own graphic</h2>
                <div>
                    <h4>Values</h4>
                    <textarea value={valuesY} onChange={a => setValuesY(a.target.value)} id="valuesY" />
                </div>
                <div>
                    <h4>Labels</h4>
                    <textarea value={valuesX} onChange={a => setValuesX(a.target.value)} id="valuesX" />
                </div>
                <div className='backgroundRadar1'>
                    <h4>Background color</h4>
                    <ColorPicker color={color} onChange={setColor} />
                </div>
                <div className='lineRadar1'>
                    <h4>Line color</h4>
                    <ColorPicker color={borderColor} onChange={setBorderColor} />
                </div>
            </div>
            <div className='rightSideRadar'>
                <input type="text" value={title} onChange={a => update(a.target.value)} />
                <Radar data={data} options={options} ref={chartRef} />
                <div className='downloadPie'>
                    <button onClick={() => createImage()}>Download</button>
                </div>

            </div>
            <div className='bottom'>
                <input type="text"  className={'title2'} value={title2} onChange={a => setTitle2(a.target.value)} />
                <div>
                    <h4>Values 2</h4>
                    <textarea value={valuesC} onChange={a => setValuesC(a.target.value)} id="valuesY" />
                </div>
                <div className='backgroundRadar2'>
                    <h4>Background color 2</h4>
                    <ColorPicker color={color2} onChange={setColor2} />
                </div>
                <div className='lineRadar2'>
                    <h4>Line color 2</h4>
                    <ColorPicker color={borderColor2} onChange={setBorderColor2} />
                </div>
            </div>
        </div>
    )
}

export default RadarAreaChart
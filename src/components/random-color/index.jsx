import { useState, useEffect, useCallback } from 'react';
import './styles.css';

export default function RandomColor(){
    const [type, setType] = useState('hex');
    const [color, setcolor] = useState('rgb(0,0,0)');

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    const handleCreateRandomHexColor = useCallback(()=>{
        const hex= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for (let i=0;i<6;i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }

        setcolor(hexColor);
    }, []);

    const handleCreateRandomRgbColor = useCallback(()=>{ 
        const r= Math.floor(Math.random()*256);
        const g= Math.floor(Math.random()*256);
        const b= Math.floor(Math.random()*256);
        const rgbColor = `rgb(${r},${g},${b})`;
        console.log(rgbColor);
        setcolor(rgbColor);

    }, []);

    useEffect(()=>{
        if (type === 'hex'){
            handleCreateRandomHexColor();
        } else {
            handleCreateRandomRgbColor();
        }
    }, [type, handleCreateRandomHexColor, handleCreateRandomRgbColor]);

    return(
        <div style={{background: color,
                height: "100vh",
                 width: "100vw",}}>
            <button onClick={()=> setType('hex')}>Create Hex Color</button>
            <button onClick={()=> setType('rgb')}>Create Rgb Color</button>
            <button onClick={type === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '60px',
                marginTop: '35vh'
            }}>
                <h1>{type === 'hex' ? "HEX Color" : "RGB Color"}</h1>
                <h2>{color}</h2>
            </div>
        </div>
    )
}
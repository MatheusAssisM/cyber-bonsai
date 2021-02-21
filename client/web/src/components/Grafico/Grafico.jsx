import React, { useEffect, useState } from 'react'
import ScriptTag from 'react-script-tag'
export default () => {

    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = "./static/teste.js";
        script.async = true;
       

        document.head.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, [])

    function getDados() {

    }
    return (
        <div id="piechart">
            <p>Graficos aqui</p>
        </div>
    )
}


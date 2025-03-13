
export default function AlingCenter({color = "currentColor", width = "w", height = "h", className = ""}) {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5,6h21a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z" fill={color}/>
            <path d="M5.5,8a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z" fill={color}/>
            <path d="M18.5,18H5.5a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z" fill={color}/>
            <path d="M22.5,13H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z" fill={color}/>
        </svg>


    )
}


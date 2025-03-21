
export default function Bold({color = "currentColor", width = "w", height = "h", className = ""}) {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={color}
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.954,10.663A6.986,6.986,0,0,0,12,0H5A2,2,0,0,0,3,2V22a2,2,0,0,0,2,2H15a6.994,6.994,0,0,0,2.954-13.337ZM7,4h5a3,3,0,0,1,0,6H7Zm8,16H7V14h8a3,3,0,0,1,0,6Z"
                fill={color}/>
        </svg>

)
}


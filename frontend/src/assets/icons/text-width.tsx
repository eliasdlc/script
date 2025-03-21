
export default function TextWidth({color = "currentColor", width = "w", height = "h", className = ""}) {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={color}
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4,5.5v-1C4,2.02,6.02,0,8.5,0h7c2.48,0,4.5,2.02,4.5,4.5v1c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-2V13.5c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5V3h-2c-.83,0-1.5,.67-1.5,1.5v1c0,.83-.67,1.5-1.5,1.5s-1.5-.67-1.5-1.5Zm19.72,13.32l-3.06-3.06c-.61-.61-1.65-.18-1.65,.68v1.56H5v-1.56c0-.86-1.04-1.29-1.65-.68L.28,18.82c-.38,.38-.38,.99,0,1.37l3.06,3.06c.61,.61,1.65,.18,1.65-.68v-1.56h14v1.56c0,.86,1.04,1.29,1.65,.68l3.06-3.06c.38-.38,.38-.99,0-1.37Z"
                fill={color}/>
        </svg>

)
}


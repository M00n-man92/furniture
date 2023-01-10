import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import './sliders.scss'


export default function Sliders() {
    return (
        <div className="sliders">
            <div className={"arrow " +("left") }> <ArrowLeftOutlined /></div>
            <div className="wrapper">

                <div className="slider">
                    <div className="imageconta">
                        <img src="assets/Calça skinny_ como usar em 6 estilos diferentes e arrasar.png" alt="" />
                    </div>
                    <div className="discr">
                        <div className="titel">
                            <span>Artifact ID and Name</span>
                        </div>
                        <div className="discription">
                            <span>Items that initiate/trigger the activity
                                and are transformed, consumed, or become part.</span>
                        </div>
                        <div className="but">
                            <button>right here</button>
                        </div>
                    </div>
                </div>
               
                

            </div>
            
            <div className={"arrow " +("right") }><ArrowRightOutlined /></div>

        </div>
    )
}

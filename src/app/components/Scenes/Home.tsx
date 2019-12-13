import React, { forwardRef } from 'react'
import Page from './Page'
import Arrow from "../Arrow/Arrow";

const Home = forwardRef(() => (
    <Page position={{ x: 0, y: 0 }} size={{ width: 100, height: 100 }}>
        <div id="one">
            <h1 className="title">Phryné</h1>
            <div className="subtitle">L'incroyable procès d'une courtisane</div>
            <p className="text">
                At nunc si ad aliquem bene nummatum tumentemque ideo honestus advena salutatum
                introieris, primitus tamquam exoptatus suscipieris et interrogatus multa coactusque
            </p>
            <Arrow/>
        </div>
    </Page>
))

export default Home

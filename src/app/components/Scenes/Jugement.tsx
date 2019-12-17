import React, { forwardRef } from 'react'
import Page from './Page/Page'
import useNoise from '../../helpers/useNoise'
import Image from './Image'
import useMouseParalax from '../../helpers/useMouseParalax'

const Jugement = forwardRef<HTMLElement>(() => {
    const [x1, y1, sx1, sy1] = useMouseParalax(0.1)

    const offset1 = {
        x: 0 + sx1,
        y: useNoise(40, 0.03) * 4 + sy1,
    }

    return (
        <Page>
            <Image left={0} top={0} width={100} src="01-fond.png" />
            <Image left={0} top={0} width={100} src="jugement/fond-trait.png" />
            <Image left={0} top={0} width={100} posOffset={offset1} src="jugement/lesjuges.png" />
        </Page>
    )
})

export default Jugement

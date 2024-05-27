import React from 'react'
import tw from 'twin.macro'
import AnimationRevealPage from 'helpers/AnimationRevealPage'
import notFoundImage from 'images/not-found.png'
import {PrimaryButton} from 'components/misc/Buttons'
import { Link } from 'react-router-dom'

const Container = tw.div`min-w-full flex flex-col items-center`
const Image = tw.img`size-full lg:size-2/5`
const NotFound = () => {
  return (
    <AnimationRevealPage>
        <Container>
            <Image src={notFoundImage}/>
            <Link to='/'>
                <PrimaryButton>Go Back</PrimaryButton>
            </Link>
        </Container>
    </AnimationRevealPage>
  )
}

export default NotFound